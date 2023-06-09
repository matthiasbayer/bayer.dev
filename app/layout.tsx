import './globals.css'
import { Montserrat } from 'next/font/google'
import clsx from 'clsx'
import { Analytics } from '@vercel/analytics/react'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Matthias Bayer',
  description: 'Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          montserrat.className,
          'antialiased bg-white dark:bg-neutral-950 text-neutral-800 dark:text-white'
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
