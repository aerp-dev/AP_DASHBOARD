import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className='bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Имя/Логотип */}
        <Link to='/' className='text-base font-bold text-gray-800'>
          Jasurbek Shomaqsudov
        </Link>
        {/* Навигационные ссылки */}
        <ul className='flex space-x-6'>
          <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-500 font-semibold' : 'text-gray-600 hover:text-gray-900')} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/products' className={({ isActive }) => (isActive ? 'text-blue-500 font-semibold' : 'text-gray-600 hover:text-gray-900')}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to='/billing' className={({ isActive }) => (isActive ? 'text-blue-500 font-semibold' : 'text-gray-600 hover:text-gray-900')}>
              Billing
            </NavLink>
          </li>
          <li>
            <NavLink to='/forecast' className={({ isActive }) => (isActive ? 'text-blue-500 font-semibold' : 'text-gray-600 hover:text-gray-900')}>
              Forecast &amp; Archive
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar