import 'react-phone-number-input/style.css'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

// Redux store
import reduxStore from 'store'
import { Provider as ReduxProvider } from 'react-redux'
import router from 'router/Router'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from 'lib/reactQuery'

// Router
// import Router from 'router/Router'

// Utils
import { LANG_LOCALSTORAGE_NAME } from './utils'

// Locale languages
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Importing Locale translated texts
import TranslationEN from 'Locale/En'
import TranslationRU from 'Locale/Ru'
import TranslationUZ from 'Locale/Uz'

// i18n initialization
i18n?.use(initReactI18next)?.init({
  resources: {
    en: { translation: TranslationEN },
    ru: { translation: TranslationRU },
    uz: { translation: TranslationUZ },
  },
  lng: localStorage?.getItem(LANG_LOCALSTORAGE_NAME) || 'ru',
  fallbackLng: localStorage?.getItem(LANG_LOCALSTORAGE_NAME) || 'ru',
  interpolation: { escapeValue: false },
})

export default function Providers(): React.JSX.Element {
  return (
    <ReduxProvider store={reduxStore}>
      <QueryClientProvider client={queryClient}>
        {/* <Router /> */}
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </ReduxProvider>
  )
}