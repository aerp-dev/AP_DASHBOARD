import historyParamsSet from './historyParamsSet'
import { IPagination } from 'types'

export default function setDefaultPaginationParamsToHistory(pagination: IPagination) {
  const params: URLSearchParams = new URLSearchParams(window?.location?.search)

  if (!params?.get('page')) historyParamsSet('page', String(pagination?.page || '1'))
  if (!params?.get('limit')) historyParamsSet('limit', String(pagination?.limit || '15'))
}