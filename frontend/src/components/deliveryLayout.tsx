'use client';

import { PropsWithChildren } from "react";
import { HeaderDelivery } from "./header/header-delivery";
import { Footer } from "./footer";
import { Toaster } from "./ui/toaster";
import { DeliveryPersonProvider } from "@/providers/deliveryPerson";

export function DeliveryLayout({ children }: PropsWithChildren) {
  return (
    <DeliveryPersonProvider>
      <HeaderDelivery />
      {children}
      <Footer />

      <Toaster />
    </DeliveryPersonProvider>
  )
}