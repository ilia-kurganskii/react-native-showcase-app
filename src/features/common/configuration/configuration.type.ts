export interface Configuration {
  contentful: {
    host: string;
    space: string;
    publicKey: string;
  };
  environment: string;
  sentry: {
    dsn: string;
  };
}
