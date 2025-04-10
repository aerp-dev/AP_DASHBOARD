import { Outlet, createBrowserRouter } from 'react-router-dom'
import AERP1 from '../pages/AERP1'
import Products from '../pages/Products'
import Billing from '../pages/Billing'
import ForecastAndArchive from '../pages/ForecastAndArchive'
import NotFound from '../pages/NotFound'
import MainLayout from 'layouts/MainLayout'
import Home from 'pages/Home'
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
    //   { index: true, element: <AERP1 /> },
      { index: true, element: <Home /> },
      { path: 'products', element: <Product /> },
      { path: 'billing', element: <Billing /> },
      { path: 'forecast', element: <ForecastAndArchive /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default router