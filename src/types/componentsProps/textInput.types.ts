export interface TextInputProps {
  /** Majburiy bo'lmagan uniq id */
  id?: string
  /** Input uchun name */
  name: string
  /** Input type - 'text' | 'search' | 'url' | 'email' */
  type?: 'text' | 'search' | 'url' | 'email'

  /** Iconifydan ikonka nomi yoziladi  */
  icon?: string
  /** Icon hajmi. Default - 20 */
  iconWidth?: number

  /** Input disable holati. Default - false */
  disabled?: boolean
  /** Input required holati. Default - false */
  required?: boolean
  /** Input clearable holati. Default - true */
  clearable?: boolean

  /**generate qobilyati. QR, barcode. Default - false */
  isGenerator?: boolean

  /** Input uchun majburiy bo'lmagan label */
  label?: string
  /** Input uchun majburiy bo'lmaga title. Hover qilganda native browser title ko'rsatilishi uchun. */
  title?: string
  /** Input uchun majburiy bo'lmagan placeholder. Default - `Enter ${label || name}...` */
  placeholder?: string

  /** Komponentaning asosiy konteyneriga qo'shiladigan className */
  mainClassName?: string
  /** Icon uchun className */
  iconClassName?: string
  /** Input uchun className */
  inputClassName?: string
  /** Label uchun className */
  labelClassName?: string

  /** Input qiymati */
  value?: string
  /** Input qiymatini o'zgartirish uchun nomi. Misol uchun: 'surname' */
  valueName?: string
  /** HandleChange - bu funktsiyani oddiy qilib yuborish mumkin. Masalan: handleChange={handleChange} */
  handleChange?: (name: string | any, value: string) => void
}