import { loggerSingleton } from './logger.service';

export function useLoggerService() {
  return loggerSingleton;
}
