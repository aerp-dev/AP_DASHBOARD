import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

// Types
import { IRoutes } from 'types'

// Utils
import { getChildElement, getRedirect } from 'utils'

// Layouts
import MainLayout from 'layouts/MainLayout'

// Routers
import { guestRoutes, HRRoutes, ProfileRoutes, SupplyRoutes, ToolsRoutes, TradeRoutes, TasksRoutes, PayrollRoutes, CashRoutes } from './routes'

// Routes paths
const ROUTE_PATH_NAMES = {
  ALL: '*',
  HOME: '/',
}

// Default routes
const defaultRoutes: IRoutes[] = [
]

// Generate routes based on authentication status
function generateRoutes(authed: boolean): IRoutes[] {
  if (!authed) return guestRoutes

  // const validRoutes: IRoutes[] = adminRoutes(roles) || []

  return [
    {
      path: ROUTE_PATH_NAMES.HOME,
      element: <MainLayout />,
      children: [
        ...defaultRoutes,
        // ...validRoutes,
      ],
    },
  ]
}

export default generateRoutes