import { redirect } from 'react-router-dom'
import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

// Utils
import { THEME_LOCALSTORAGE_NAME, TOKEN_COOKIE_NAME, reloadPage } from 'utils'

// Types
import { ThemeType } from 'types'

export interface IInitialState {
  isLoading: boolean
  isFullHeight: boolean
  user: { name: string }
  // settings: ISettings
  // global: IErpConfig
  // sessionIsExpired: boolean
  // isTechnicalWorksActive: boolean
}

const initialState: IInitialState = {
  isLoading: true,
  isFullHeight: false,
  user: { name: '' },
  // sessionIsExpired: false,
  // isTechnicalWorksActive: false,
}

const store = createSlice({
  name: 'store',
  initialState,
  reducers: {
    changeLoading: (state, action) => {
      state.isLoading = action?.payload
    },
    changeTheme: (state, action: { payload: ThemeType }) => {},
    changeFullHeight: (state, action) => {
      state.isFullHeight = action?.payload
    },
    userAuth: (state, action) => {
      switch (action?.payload?.type) {
        case 'LOGIN':
          state.user = action?.payload?.data?.user

          Cookies?.set(TOKEN_COOKIE_NAME, action?.payload?.data?.access_token, { expires: 2 })
          redirect('/dashboard')
          break

        case 'LOGOUT':
          // state.user = {}
          Cookies?.remove(TOKEN_COOKIE_NAME)

          reloadPage()
          return initialState
      }
    },

    // reset
    reset: (_state) => {
      Cookies?.remove(TOKEN_COOKIE_NAME)
      return { ...initialState, isLoading: false }
    },

    // For technical working processes
    changeTechnicalWorksActive: (state, action) => {
      return { ...state, isTechnicalWorksActive: action?.payload || false }
    },
  },
})

export const { reset, userAuth, changeTheme, changeFullHeight, changeTechnicalWorksActive } = store?.actions
export default store.reducer