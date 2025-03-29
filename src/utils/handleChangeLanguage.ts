import i18next from 'i18next'
import { langType } from 'types'
import { LANG_LOCALSTORAGE_NAME } from './storageNames'

/**
 * Changes the application language.
 * @param {langType} e - The new language code.
 * - Updates the language in `i18next`.
 * - Stores the language in `localStorage`.
 * - Sets the `lang` attribute of `document.documentElement`.
 */
const handleChangeLanguage = (e: langType): void => {
  i18next?.changeLanguage(e)
  localStorage?.setItem(LANG_LOCALSTORAGE_NAME, e)
  document.documentElement.lang = e?.toLocaleLowerCase()
}

export default handleChangeLanguage