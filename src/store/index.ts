import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { NODE_ENV } from 'config'
import storeReducer from 'store/store'

const rootReducer = combineReducers({ store: storeReducer })

export const reduxStore = configureStore({ reducer: rootReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware(), devTools: NODE_ENV !== 'production' })
export type AppDispatch = typeof reduxStore.dispatch

export default reduxStore