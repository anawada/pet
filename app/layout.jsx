import Navigation from "../components/Navigation"
import "./globals.css"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
