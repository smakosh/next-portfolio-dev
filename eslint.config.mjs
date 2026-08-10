import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier';

const config = [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'types/**',
      'src/generated/graphql.ts',
      'src/generated/github-schema-loader.js',
    ],
  },
  ...nextCoreWebVitals,
  prettier,
];

export default config;
