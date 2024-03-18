import { Footer } from '@/components/footer'
import '../globals.css'
import { HeaderDelivery } from '@/components/header/header-delivery'
import { Toaster } from '@/components/ui/toaster'
import { DeliveryLayout } from '@/components/deliveryLayout'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <DeliveryLayout>
          {children}
        </DeliveryLayout>
      </body>
    </html>
  )
}
