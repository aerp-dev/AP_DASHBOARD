import store from 'store/store'

export type StoreType = ReturnType<typeof store>
export interface IRootState {
	store: ReturnType<typeof store>
}
export interface IStoreAction {
	payload: any
	type: string
}