import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000/graphql',
  documents: 'src/api-service/modules/**/*.gql',
  generates: {
    // Generate types + SDK (graphql-request)
    'src/api-service/generated/graph-ql-client.generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        skipTypename: false,
        avoidOptionals: false,
        maybeValue: 'T | null',
        enumsAsTypes: true,
        rawRequest: false,
      },
    },
    // REMOVED: Apollo hooks generation (conflict với Apollo v4)
  },
};

export default config;
