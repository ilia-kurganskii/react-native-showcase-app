import crashlytics from '@react-native-firebase/crashlytics';

import { LoggerLevel, LoggerTransport } from '../logger.type';

export class CrashlyticsTransport implements LoggerTransport {
  handle(level: LoggerLevel, message: string, error?: Error): void {
    if (level !== 'error') {
      crashlytics().log(`[${level}] ${message}`);
    } else if (error) {
      crashlytics().recordError(error);
    }
  }
}
