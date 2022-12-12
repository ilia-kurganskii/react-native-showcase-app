import { injectable } from 'inversify';

import { LoggerLevel, LoggerTransport } from './logger.type';
import { SentryTransport, ConsoleTransport, FileTransport } from './transports';

@injectable()
export class LoggerService {
  private transports: LoggerTransport[];

  constructor() {
    this.transports = [
      new ConsoleTransport(),
      new FileTransport(),
      new SentryTransport(),
    ];
  }

  debug(message: string) {
    this.log('debug', message);
  }

  info(message: string) {
    this.log('info', message);
  }

  error(message: string, error?: Error | unknown) {
    this.log('error', message, error);
  }

  warn(message: string, error?: Error | unknown) {
    this.log('warning', message, error);
  }

  log(level: LoggerLevel, message: string, error?: Error | unknown) {
    return this.transports.forEach((transport) =>
      transport.handle(level, message, error)
    );
  }
}
