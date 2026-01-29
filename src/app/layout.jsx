import './globals.css'

export const metadata = {
  title: 'Mofarm Lands & Properties Ltd | Where Dreams Turn to Reality',
  description: 'Kenya\'s trusted land company. Affordable plots with verified title deeds, transparent pricing, and flexible 6-month payment plans. Plots starting from KES 200,000.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
