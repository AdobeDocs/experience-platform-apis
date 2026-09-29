#!/usr/bin/env node

const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

function fail(message) {
  console.error(message);
  process.exit(1);
}

const [, , specPathArg, outputPathArg] = process.argv;

if (!specPathArg || !outputPathArg) {
  fail('Usage: node ./.github/skills/postman-collection-refresh/scripts/generate-postman-collection.js <spec-path> <output-path>');
}

const repoRoot = process.cwd();
const specPath = path.resolve(repoRoot, specPathArg);
const outputPath = path.resolve(repoRoot, outputPathArg);
const tmpOutputPath = path.join(os.tmpdir(), `postman-${Date.now()}-${path.basename(outputPath)}`);

if (!fs.existsSync(specPath)) {
  fail(`OpenAPI spec not found: ${specPath}`);
}

const convert = spawnSync(
  'npx',
  ['--yes', 'openapi-to-postmanv2', '-s', specPath, '-o', tmpOutputPath, '-p'],
  { stdio: 'inherit' }
);

if (convert.status !== 0) {
  process.exit(convert.status || 1);
}

const collection = JSON.parse(fs.readFileSync(tmpOutputPath, 'utf8'));

function visit(node, callback) {
  if (node === null || typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    node.forEach((item) => visit(item, callback));
    return;
  }
  callback(node);
  Object.values(node).forEach((value) => visit(value, callback));
}

function renamePlatformGateway(node) {
  if (Array.isArray(node.host)) {
    node.host = node.host.map((part) => (part === '{{baseUrl}}' ? '{{PLATFORM_GATEWAY}}' : part));
  }
  if (Array.isArray(node.variable)) {
    for (const variable of node.variable) {
      if (variable && variable.key === 'baseUrl') {
        variable.key = 'PLATFORM_GATEWAY';
      }
    }
  }
}

function normalizeHeaders(node) {
  if (!Array.isArray(node.header)) {
    return;
  }

  let hasPlatformHeaders = false;
  let hasAuthorization = false;

  for (const header of node.header) {
    if (!header || typeof header !== 'object') {
      continue;
    }

    if (header.key === 'x-api-key') {
      header.value = '{{clientID}}';
      hasPlatformHeaders = true;
    }

    if (header.key === 'x-gw-ims-org-id') {
      header.value = '{{IMSOrg}}';
      hasPlatformHeaders = true;
    }

    if (header.key === 'Authorization') {
      header.value = 'Bearer {{access_token}}';
      hasAuthorization = true;
    }
  }

  if (hasPlatformHeaders && !hasAuthorization) {
    node.header.unshift({
      disabled: false,
      description: {
        content: '(Required) Authorization token for Adobe Experience Platform APIs. Set this Postman environment variable to your bearer token value.',
        type: 'text/plain'
      },
      key: 'Authorization',
      value: 'Bearer {{access_token}}'
    });
  }
}

visit(collection, (node) => {
  renamePlatformGateway(node);
  normalizeHeaders(node);
});

if (Array.isArray(collection.variable)) {
  for (const variable of collection.variable) {
    if (variable && variable.key === 'baseUrl') {
      variable.key = 'PLATFORM_GATEWAY';
    }
  }
}

function flattenItems(items, output) {
  for (const item of items || []) {
    if (item && item.request) {
      output.push(item);
      continue;
    }
    if (item && Array.isArray(item.item)) {
      flattenItems(item.item, output);
    }
  }
}

const flattened = [];
flattenItems(collection.item, flattened);
collection.item = flattened;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(collection, null, 4) + '\n');

const requestCount = flattened.length;
console.log(JSON.stringify({ outputPath, requestCount }, null, 2));
