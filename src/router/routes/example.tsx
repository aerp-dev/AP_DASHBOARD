import { Navigate } from 'react-router-dom'

// Types
import { IRoutes } from 'types'

// Pages

// Routes paths
import { EXAMPLE_PATH_NAMES } from 'router/routePathNames'
import { getChildElement, getRedirect } from 'utils/routing'

// Default admin routes
export const CashRoutes = (): IRoutes[] => [
  { path: EXAMPLE_PATH_NAMES.BASE, element: <>Example</> },

  {
    path: EXAMPLE_PATH_NAMES.BASE2,
    children: [getChildElement('list', <></>), getRedirect('')],
  },

  { path: EXAMPLE_PATH_NAMES.ALL, element: <Navigate to={EXAMPLE_PATH_NAMES.BASE} /> },
]