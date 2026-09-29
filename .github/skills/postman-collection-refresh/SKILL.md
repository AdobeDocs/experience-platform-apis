---
name: postman-collection-refresh
description: 'Generate or refresh a Postman collection from an OpenAPI spec in this repo. Use when asked to create, regenerate, normalize, or flatten a Postman collection for Experience Platform APIs, including PLATFORM_GATEWAY/clientID/IMSOrg/access_token substitutions.'
argument-hint: 'Provide the source OpenAPI spec path and target collection path, for example: static/swagger-specs/segmentation.yaml -> static/segmentation.json'
user-invocable: true
---

# Postman Collection Refresh

## When to Use
- Create a Postman collection from a repo OpenAPI spec.
- Regenerate a stale collection after spec changes.
- Normalize a generated collection to this repo's Experience Platform conventions.
- Flatten request folders so all endpoints appear at the top level.

## What This Skill Does
This skill converts an OpenAPI file into a Postman collection and then normalizes the result for this repository.

Normalization performed by the bundled script:
- Renames `{{baseUrl}}` to `{{PLATFORM_GATEWAY}}`.
- Sets `x-api-key` headers to `{{clientID}}`.
- Sets `x-gw-ims-org-id` headers to `{{IMSOrg}}`.
- Ensures `Authorization` headers exist and use `Bearer {{access_token}}`.
- Flattens all requests to top-level collection items.

## Procedure
1. Identify the source spec and output collection path.
2. Run the bundled script:
   - `node ./.github/skills/postman-collection-refresh/scripts/generate-postman-collection.js <spec-path> <output-path>`
3. Verify the output JSON parses and confirm the request list is top-level.
4. If the user asked for a reviewable summary, report the request count and the variable substitutions applied.

## Example
```bash
node ./.github/skills/postman-collection-refresh/scripts/generate-postman-collection.js static/swagger-specs/segmentation.yaml static/segmentation.json
```

## Notes
- The script uses `npx --yes openapi-to-postmanv2`, so Node.js and `npx` must be available.
- The output file is overwritten.
- The generated collection keeps response examples produced by the converter.

## Resources
- [Generator script](./scripts/generate-postman-collection.js)
