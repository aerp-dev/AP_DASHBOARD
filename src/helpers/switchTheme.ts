import { ThemeType } from 'types'
import { changeTheme } from 'store/store'
import type { Dispatch } from '@reduxjs/toolkit'
import { THEME_LOCALSTORAGE_NAME } from 'utils'
/**
 * Switches or retrieves the theme ('dark' or 'light') based on the provided action.
 *
 * @param param - Action to either switch or get the current theme.
 * @param dispatch - Redux dispatch function to update the theme in the store.
 */
export default function switchTheme(param: 'switch' | 'get', dispatch: Dispatch): void {
  if (param === 'get') {
    const theme: ThemeType | null = localStorage?.getItem(THEME_LOCALSTORAGE_NAME) as ThemeType

    if (theme) {
      document?.documentElement?.classList?.add(theme)
      document?.documentElement?.classList?.remove(theme === ThemeType.Dark ? ThemeType.Light : ThemeType.Dark)
      document.documentElement.style.colorScheme = theme
    }
  } else if (param === 'switch') {
    const currentTheme: boolean = localStorage?.getItem(THEME_LOCALSTORAGE_NAME) === ThemeType.Dark || document?.documentElement?.className?.includes(ThemeType.Dark)
    const newTheme: ThemeType = currentTheme ? ThemeType.Light : ThemeType.Dark

    localStorage?.setItem(THEME_LOCALSTORAGE_NAME, newTheme)
    document?.documentElement?.classList?.add(newTheme)
    document?.documentElement?.classList?.remove(currentTheme ? ThemeType.Dark : ThemeType.Light)
    document.documentElement.style.colorScheme = newTheme
  }

  dispatch(changeTheme((localStorage?.getItem(THEME_LOCALSTORAGE_NAME) as ThemeType) || ThemeType.System))
}