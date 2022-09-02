import { CodegenConfig } from '@graphql-codegen/cli';
require('dotenv').config();

const config: CodegenConfig = {
  schema: [
    {
      'https://graphql.contentful.com/content/v1/spaces/qt9s9bzsq0aj': {
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
        },
      },
    },
  ],
  documents: './src/**/!(*.gen).ts',
  overwrite: true,
  generates: {
    './schema.graphql': {
      plugins: ['schema-ast'],
    },
    'src/types.ts': {
      plugins: ['typescript'],
      config: {
        avoidOptionals: true,
      },
    },
    'src/': {
      preset: 'near-operation-file',
      plugins: ['typescript-operations'],
      presetConfig: {
        extension: '.types.gen.ts',
        baseTypesPath: 'types.ts',
      },
      config: {
        avoidOptionals: true,
        flattenGeneratedTypes: true,
        immutableTypes: true,
      },
    },
  },
  hooks: {
    afterOneFileWrite: ['eslint --fix'],
  },
};

export default config;
