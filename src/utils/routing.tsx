import { Navigate } from 'react-router-dom'
import type { ReactNode } from 'react'

type IGetChildElement = { path: string; element: ReactNode }

const getChildElement = (path: string, element: ReactNode): IGetChildElement => ({ path, element })
const getRedirect = (path: string = '*', navigate: string = 'list'): IGetChildElement => ({ path, element: <Navigate to={navigate} /> })

export { getChildElement, getRedirect }