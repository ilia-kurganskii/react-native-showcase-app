import { FileLogger, LogLevel } from 'react-native-file-logger';

import {
  LoggerLevel,
  LoggerTransport,
} from '~features/common/services/logger/logger.type';

export class FileTransport implements LoggerTransport {
  constructor() {
    FileLogger.configure({
      captureConsole: false,
      maximumNumberOfFiles: 2,
    });
  }

  handle(level: LoggerLevel, message: string): void {
    FileLogger.write(FileTransport.getFileLoggerLevel(level), message);
  }

  private static getFileLoggerLevel(input: LoggerLevel): LogLevel {
    switch (input) {
      case 'info':
        return LogLevel.Info;
      case 'debug':
        return LogLevel.Debug;
      case 'warn':
        return LogLevel.Warning;
      case 'error':
        return LogLevel.Error;
    }
  }
}
