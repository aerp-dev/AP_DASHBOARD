export default function historyParamsSet(name: string, value: number | string | object | boolean): void {
  const params: URLSearchParams = new URLSearchParams(window?.location?.search)

  const paramValue: string = typeof value === 'string' ? value : typeof value === 'object' && value !== null ? JSON?.stringify(value) : value ? String(value) : ''
  params?.set(name, paramValue)

  window?.history?.pushState({}, '', `?${params?.toString()}${window?.location?.hash}`)
}