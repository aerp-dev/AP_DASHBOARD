export default function getDefaultAPIParams() {
  const params: URLSearchParams = new URLSearchParams(window?.location?.search)

  const page: string = params?.get('page') || '1'
  const allLimit: boolean = params?.get('limit') === 'all'
  const limit: string = !allLimit ? params?.get('limit') || '15' : '15'
  const noPaginate: string = params?.get('limit') === 'all' ? 'true' : params?.get('noPaginate') || 'false'

  const search: string = params?.get('search') || ''
  const searchParam: string = params?.get('searchParam') || 'all'

  // Not require params
  const date: string = params?.get('date') || ''
  const filterParam: string = params?.get('filterParam') || ''

  const startDate: string = params?.get('startDate') || ''
  const endDate: string = params?.get('endDate') || ''

  const userId: string = params?.get('userId') || ''

  return {
    page,
    limit,
    search,
    allLimit,
    searchParam,
    ...(date ? { date } : []),
    ...(filterParam ? { filterParam } : []),
    ...(startDate ? { startDate } : []),
    ...(endDate ? { endDate } : []),
    ...(userId ? { userId } : []),
    ...(noPaginate ? { noPaginate } : []),
  }
}