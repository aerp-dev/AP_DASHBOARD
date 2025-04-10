import { HTMLAttributeAnchorTarget } from 'react'

export interface LinkedTextProps {
  /** Ko'rinishi kerak bo'lgan title yoziladi. */
  title: string
  /** Bosganda ochiladigan URL. */
  url: string
  /** Link uchun className. */
  className?: string
  /** Auto tarjima qilishga ruxsat berish. Default - 'no'. */
  translate?: 'yes' | 'no'
  /** Link bosganda qaysi oynada ochilishi kerakligi - HTMLAttributeAnchorTarget. */
  target?: HTMLAttributeAnchorTarget
}