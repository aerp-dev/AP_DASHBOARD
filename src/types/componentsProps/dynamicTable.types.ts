import { TFunction } from "i18next"
import { ReactNode } from "react"

export interface Style {
  Parent?: string
  Table?: string
  THead?: string
  TBody?: string
  HeadTr?: string
  BodyTr?: string
  Th?: string
  Td?: string
}

export interface ITRData<T = any> {
  uid?: string
  data?: T
  tdData: ITDData[]
  onClick?: Function
  className?: string
}

export interface ITDData {
  value?: string | number | boolean | Date
  onClick?: Function
  className?: string
  type?: 'div' | 'image' | 'link' | 'number' | 'JSX'
  title?: string
  element?: ReactNode
}

export interface Contents<T extends Record<string, any>> {
  Headers: string[]
  Main?: HTMLElement

  trData?: ITRData<T>[]

  t?: TFunction<'translation', undefined>

  withActionButtons?: boolean
  handleUpdateClick?: (e: T) => void
  handleDeleteClick?: (e: string) => void

  withSelecting?: boolean
  checkedItems?: string[]
  changeCheckedItems?: any
}

export interface IPropsForDynamicTable<T extends Record<string, any>> {
  Style: Style
  loading?: boolean
  Contents: Contents<T>
}