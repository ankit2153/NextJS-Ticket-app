import { Inter } from 'next/font/google'
import Nav from './(components)/nav'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  
  title: 'Ticket App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <div className='flex flex-col h-screen max-h-screen'>
         <Nav/>
        <div className='flex-grow overflow-y-auto bg-page text-default-text'>
          {children}
          </div>
        </div>
        </body>
    </html>
  )
}