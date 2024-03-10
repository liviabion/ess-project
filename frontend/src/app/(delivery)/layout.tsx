import { Footer } from '@/components/footer'
import '../globals.css'
import { HeaderDelivery } from '@/components/header/header-delivery'
import { Toaster } from '@/components/ui/toaster'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <HeaderDelivery />
        {children}
        <Footer />

        <Toaster />
      </body>
    </html>
  )
}
