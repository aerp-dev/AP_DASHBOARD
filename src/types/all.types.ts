import React from 'react'
export interface IRoute {
  path: string
  element: React.ReactNode
  children?: IRoutes[]
}

export interface IRoutes {
  path: string
  element?: React.ReactNode
  children?: IRoutes[]
  location?: string
  navigationType?: string
  navigator?: any
  history?: any
}

export type voidFunction = () => void

export enum ThemeType {
  Dark = 'dark',
  Light = 'light',
  System = 'system',
}