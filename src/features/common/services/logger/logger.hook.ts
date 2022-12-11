import { useAppService } from '~features/app';
import { LoggerService } from '~features/common';

export function useLoggerService() {
  return useAppService(LoggerService);
}
