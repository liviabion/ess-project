import { appDeliveryRoutes } from "../app-layout";
import { Header } from "../header";

export function HeaderDelivery() {
  return (
    <Header routes={appDeliveryRoutes} />
  )
}