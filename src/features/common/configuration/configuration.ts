import { Configuration } from './configuration.type';

export const AppConfiguration: Configuration = {
  environment:
    process.env.NODE_ENV === 'development' ? 'development' : 'production',
  contentful: {
    host: 'https://graphql.contentful.com',
    space: 'qt9s9bzsq0aj',
    publicKey: 'bkIl_QAK8bQwRVfgD2Jz99RQlIPDqoAjOVM02fhOXbw',
  },
  sentry: {
    dsn: 'https://b1af0507d81d4fea9795490fda9867de@o517440.ingest.sentry.io/4504311622008832',
  },
};
