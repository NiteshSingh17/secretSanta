import './globals.css'
export const metadata = {
  title: 'Acme Secret Santa',
  description: 'Acme Secret Santa App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
