import { ApiSupport } from '@/services/support';
import React, { PropsWithChildren, createContext, useEffect, useState, useContext } from 'react';

export const DeliveryPersonContext = createContext<ApiSupport.DeliveryPerson | null>(null);

export const DeliveryPersonProvider = ({ children }: PropsWithChildren) => {
  const [deliveryPerson, setDeliveryPerson] = useState<ApiSupport.DeliveryPerson | null>(null);

  useEffect(() => {
    const fetchDeliveryPerson = async () => {
      try {
        const response = await ApiSupport.getDeliveryPerson();
        setDeliveryPerson(response);
      } catch (error) {
        console.error('Error fetching delivery person:', error);
      }
    };

    fetchDeliveryPerson();
  }, []);

  return (
    <DeliveryPersonContext.Provider value={deliveryPerson}>
      {children}
    </DeliveryPersonContext.Provider>
  );
};

export const useDeliveryPerson = () => {
  const deliveryPerson = useContext(DeliveryPersonContext);
  return { deliveryPerson };
};