import { ApiDeliveryNotification } from "@/services/deliveryNotification";

interface DeliveryStatusBadge {
  name: string;
  color: string;
  updateToStatus: ApiDeliveryNotification.DeliveriesReturn['status'] | '';
}

export const deliveryStatusBadge: Record<
  ApiDeliveryNotification.DeliveriesReturn['status'], 
  DeliveryStatusBadge
> = {
  'pendente': {
    name: 'Pendente',
    color: '#FF4500',
    updateToStatus: 'solicitada'
  },
  'solicitada': {
    name: 'Solicitada',
    color: '#FF8000',
    updateToStatus: 'deslocamento'
  },
  'deslocamento': {
    name: 'Deslocamento',
    color: '#4169E1',
    updateToStatus: 'entregue'
  },
  'entregue': {
    name: 'Entregue',
    color: '#000920',
    updateToStatus: ''
  },
}