import './globals.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="rootlayout">
          {children}
        </div>
      </body>
    </html>
  )
}