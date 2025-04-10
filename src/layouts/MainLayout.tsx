import React from 'react'
import { Navbar } from 'components'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      {/* Shared Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className='flex-grow p-4'>{children}</main>
    </div>
  )
}

export default MainLayout