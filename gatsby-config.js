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
      }
    ],
    subPages:[
      {
        title: 'API References',
        path: "/references/",
        header: true,
        pages: [{
          title: 'Access Control API',
          path: '/references/access-control.md'
        }, {
          title: 'Audit Query API',
          path: '/references/audit-query.md'
        }, {
          title: 'Batch Ingestion API',
          path: '/references/batch-ingestion.md'
        }, {
          title: 'Catalog API',
          path: '/references/catalog.md'
        }, {
          title: 'Data Access API',
          path: '/references/data-access.md'
        }, {
          title: 'Data Prep API',
          path: '/references/data-prep.md'
        }, {
          title: 'Dataset Service API',
          path: '/references/dataset-service.md'
        }, {
          title: 'Destination Authoring API',
          path: '/references/destination-authoring.md'
        }, {
          title: 'Flow Service API - Sources',
          path: '/references/flow-service.md'
        }, {
          title: 'Flow Service API - Destinations',
          path: '/references/destinations.md'
        }, {
          title: 'Identity Service API',
          path: '/references/identity-service.md'
        }, {
          title: 'Observability Insights API',
          path: '/references/observability-insights.md'
        }, {
          title: 'Policy Service API',
          path: '/references/policy-service.md'
        }, {
          title: 'Privacy Service API',
          path: '/references/privacy-service.md'
        }, {
          title: 'Query Service API',
          path: '/references/query-service.md'
        }, {
          title: 'Reactor API',
          path: '/references/reactor.md'
        }, {
          title: 'Real-time Customer Profile API',
          path: '/references/profile.md'
        }, {
          title: 'Sandbox API',
          path: '/references/sandbox.md'
        }, {
          title: 'Schema Registry API',
          path: '/references/schema-registry.md'
        }, {
          title: 'Segmentation Service API',
          path: '/references/segmentation.md'
        }, {
          title: 'Sensei Machine Learning API',
          path: '/references/sensei-machine-learning.md'
        }, {
          title: 'Streaming Ingestion API',
          path: '/references/streaming-ingestion.md'
        },{
            title: "Unified Tags API",
            description: "Use folders and tags to organize business objects in Adobe Experience Platform.",
            path: "/references/unified-tags.md"
        }]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/experience-platform-apis/'
};
