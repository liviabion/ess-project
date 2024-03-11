import { useDeliveryPerson } from "@/providers/deliveryPerson";
import { appDeliveryRoutes } from "../app-layout";
import { Header } from "../header";

export function HeaderDelivery() {
  const { deliveryPerson } = useDeliveryPerson();
  return (
    <Header routes={appDeliveryRoutes} name={deliveryPerson?.name} />
  )
}