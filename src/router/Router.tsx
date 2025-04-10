import { Outlet, createBrowserRouter } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Products from '../pages/Products'
import Billing from '../pages/Billing'
import ForecastAndArchive from '../pages/ForecastAndArchive'
import NotFound from '../pages/NotFound'
import MainLayout from 'layouts/MainLayout'
import Product from 'pages/Product'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'products', element: <Product /> },
      { path: 'billing', element: <Billing /> },
      { path: 'forecast', element: <ForecastAndArchive /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default router