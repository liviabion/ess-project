'use client';

import { CartProvider } from "@/providers/cart"
import { HeaderUser } from "./header/header-user"
import { Footer } from "./footer";
import { PropsWithChildren } from "react";

export default function InternalAppLayout({ children }: PropsWithChildren) {
  return (
    <CartProvider>
      <HeaderUser />
      {children}
      <Footer />
    </CartProvider>
  )
}