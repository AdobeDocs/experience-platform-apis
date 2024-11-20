/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    template_id: process.env.GATSBY_TEMPLATE_ID,

    // versions: [
    //   {
    //     title: 'v2.0',
    //     selected: true
    //   },
    //   {
    //     title: 'v1.4',
    //     path: 'https://github.com/AdobeDocs/analytics-1.4-apis'
    //   }
    // ],
    pages: [
      {
        title: 'Adobe Experience Platform APIs',
        path: '/'
      },
      {
        title: 'API References',
        menu: [{
          title: 'Access Control API',
          description: 'View available and active user permissions.',
          path: '/references/access-control.md'
        }, {
          title: 'Audit Query API',
          description: 'View audit logs on Platform activities.',
          path: '/references/audit-query.md'
        }, {
          title: 'Batch Ingestion API',
          description: 'Bring data into Platform through batch ingestion.',
          path: '/references/batch-ingestion.md'
        }, {
          title: 'Catalog API',
          description: 'Manage metadata for datasets and batches.',
          path: '/references/catalog.md'
        }, {
          title: 'Data Access API (Deprecated)',
          description: 'Access and download ingested dataset files.',
          path: '/references/data-access.md'
        }, {
          title: 'Data Distiller Authorization API',
          description: 'Manage and enforce IP-based access restrictions for secure data access in Query Service, ensuring compliance with data security standards.',
          path: '/references/data-distiller-auth.md'
        }, {
          title: 'Data Hygiene API',
            description: 'Schedule expiration dates for datasets and programmatically correct or delete your customers’ stored personal data in Experience Platform.',
          path: '/references/data-hygiene.md'
        }, {
          title: 'Data Prep API',
          description: 'Map, transform, and validate data to and from Experience Data Model (XDM).',
          path: '/references/data-prep.md'
        }, {
          title: 'Dataset Service API',
          description: 'Manage usage labels for existing datasets within the Data Lake.',
          path: '/references/dataset-service.md'
        }, {
          title: 'Destination Authoring API',
          description: 'Author a destination in the Experience Platform catalog.',
          path: '/references/destination-authoring.md'
        }, {
          title: 'Flow Service API - Sources',
          description: 'Use the Flow Service API to ingest data from external sources into Experience Platform.',
          path: '/references/flow-service.md'
        }, {
          title: 'Flow Service API - Destinations',
          description: 'Use the Flow Service API to connect to destinations and activate data.',
          path: '/references/destinations.md'
        }, {
          title: 'Identity Service API',
          description: 'Manage identities, namespaces, and clusters linked to the Identity Graph.',
          path: '/references/identity-service.md'
        }, {
          title: 'MTLS Service API',
          description: 'Securely retrieve and verify the public certificates issued by Adobe.',
          path: '/references/mtls-service.md'
        }, {
          title: 'Observability Insights API',
          description: 'View metrics on various Platform activities.',
          path: '/references/observability-insights.md'
        }, {
          title: 'Policy Service API',
          description: 'Manage data usage labels and policies.',
          path: '/references/policy-service.md'
        }, {
          title: 'Privacy Service API',
          description: 'Manage customer requests to access and delete their personal data.',
          path: '/references/privacy-service.md'
        }, {
          title: 'Query Service API',
          description: 'Use standard SQL to query data in Experience Platform.',
          path: '/references/query-service.md'
        }, {
          title: 'Reactor API',
          description: 'Manage extensions, rules, and other resources related to tags.',
          path: '/references/reactor.md'
        }, {
          title: 'Real-time Customer Profile API',
          description: 'Manage merge policies and other Profile-related resources.',
          path: '/references/profile.md'
        }, {
          title: 'Sandbox API',
          description: 'Manage sandboxes for your organization.',
          path: '/references/sandbox.md'
        }, {
          title: 'Schema Registry API',
          description: 'Manage Experience Data Model (XDM) schemas.',
          path: '/references/schema-registry.md'
        }, {
          title: 'Segmentation Service API',
          description: 'Build audiences from your Real-Time Customer Profile data using Adobe Experience Platform generated segment definitions or external sources.',
          path: '/references/segmentation.md'
        }, {
          title: 'Sensei Machine Learning API',
          description: 'Manage engines, models, and other resources related to Data Science Workspace.',
          path: '/references/sensei-machine-learning.md'
        }, {
          title: 'Streaming Ingestion API',
            description: 'Bring data in to Platform through streaming ingestion.',
          path: '/references/streaming-ingestion.md'
        },{
            title: "Unified Tags API",
            description: "Use folders and tags to organize business objects in Adobe Experience Platform.",
            path: "/references/unified-tags.md"
        }]
      }
    ],
    subPages: [
        {
            title: "credentials",
            path: "/credentials/"
        }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/experience-platform-apis/'
};
