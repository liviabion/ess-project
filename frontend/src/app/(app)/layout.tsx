import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
