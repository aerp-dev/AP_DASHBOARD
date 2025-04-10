export interface IconProps {
  /** Iconifydan ikonka nomi */
  icon: string
  /** Ikonka hajmi. Default - 21 */
  width?: number
  /** onClick bo'lganda ishlovchi trigger. */
  onClick?: () => void
  /** Iconka uchun className */
  className?: string | string[]
}