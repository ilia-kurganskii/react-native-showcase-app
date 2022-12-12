import * as Sentry from '@sentry/react-native';

import { LoggerLevel, LoggerTransport } from '../logger.type';

export class SentryTransport implements LoggerTransport {
  handle(level: LoggerLevel, message: string, error?: Error): void {
    if (level === 'error') {
      if (error) {
        Sentry.captureException(error);
      } else {
        Sentry.captureMessage(message);
      }
    }
  }
}
