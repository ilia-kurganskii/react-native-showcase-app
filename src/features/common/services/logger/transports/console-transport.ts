import { LoggerLevel, LoggerTransport } from '../logger.type';

export class ConsoleTransport implements LoggerTransport {
  handle(level: LoggerLevel, message: string, error?: Error): void {
    if (error) {
      console[level](message, error);
    } else {
      console[level](message);
    }
  }
}
