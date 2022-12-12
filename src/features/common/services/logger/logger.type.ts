export type LoggerLevel = 'info' | 'debug' | 'warning' | 'error';
export interface LoggerTransport {
  handle(level: LoggerLevel, message: string, error?: Error | unknown): void;
}
