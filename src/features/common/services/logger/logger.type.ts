export type LoggerLevel = 'info' | 'debug' | 'warn' | 'error';
export interface LoggerTransport {
  handle(level: LoggerLevel, message: string, error?: Error | unknown): void;
}
