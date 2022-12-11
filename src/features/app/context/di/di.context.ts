import { Container, interfaces } from 'inversify';
import React, { useContext } from 'react';

const ServicesContext = React.createContext<Container | null>(null);

export const DIProvider = ServicesContext.Provider;

export function useAppService<T>(
  serviceIdentifier: interfaces.ServiceIdentifier<T>
) {
  const containerInstance = useContext(ServicesContext);
  return containerInstance!.get(serviceIdentifier);
}
