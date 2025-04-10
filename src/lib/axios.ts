import axios, { AxiosError, type AxiosInstance, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'

// Redux store
import store from 'store'
// import { expireSession } from 'store/store'

// Helpers
import toast from 'react-hot-toast'
import { getUserOrganization, getUserToken, tokenUnRequiredPathnames } from 'helpers'
import { VITE_BASE_URL, REQUEST_ACCESS_KEY } from 'config'

// Types
interface ErrorResponse {
  message: { en: string }
  details?: Array<{ message: string }>
}

const BASE_URL: string = `${VITE_BASE_URL || ''}api/`
const myAxios: AxiosInstance = axios.create({ baseURL: BASE_URL, timeout: 20000 })

myAxios?.interceptors?.request?.use(
  (config: InternalAxiosRequestConfig) => {
    if (config?.url !== '/admins/userme') toast?.loading('Loading...', { id: 'loading' })

    const USER_TOKEN: string | null = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjbTVpMTZndHcwMDB6cGZvMGt2ZWR0ZGxsIiwib3JnSWQiOiJjbTVpMTZnc3cwMDAzcGZvMGF0dDN3d2ZjIiwiaWF0IjoxNzQ0MjY3MjQxLCJleHAiOjE5MTcwNjcyNDF9.YG9pTmSQFq4iwOQuCTJUIQ29F6E1mJQh3ym5zkBPBFg` || getUserToken()

    const ORGANIZATION_PARAM: string | null = getUserOrganization()
    const requiresToken: boolean = !(
      tokenUnRequiredPathnames?.includes(config?.url || '') ||
      config?.url?.includes('admins/admin/verifyCodeForResetPassword') ||
      config?.url?.includes('/admins/login')
    )

    if ((config?.url === 'itw' ? false : !USER_TOKEN) && requiresToken) {
      //   store?.dispatch(expireSession())
      return Promise.reject(new AxiosError('User token required but not found!'))
    }

    return {
      ...config,
      headers: {
        ...config?.headers,
        Accept: config?.headers?.Accept || 'application/json',
        'Content-Type': config?.headers?.['Content-Type'] || 'application/json',
        ...(USER_TOKEN ? { Authorization: USER_TOKEN } : {}),
        ...(ORGANIZATION_PARAM ? { whichorganization: ORGANIZATION_PARAM } : {}),
        ...(REQUEST_ACCESS_KEY ? { 'Request-Access-Key': REQUEST_ACCESS_KEY } : {}),
      },
    } as InternalAxiosRequestConfig
  },
  (error) => {
    toast?.remove('loading')

    return Promise?.reject(error)
  },
)

myAxios?.interceptors?.response?.use(
  (response: AxiosResponse) => {
    toast?.remove('loading')

    if (response?.data?.message) toast?.[response?.status === 200 || response?.status === 201 ? 'success' : 'error'](response?.data?.message || 'Success!')
    return response
  },
  (error: AxiosError<ErrorResponse>) => {
    const toastId: string = error?.response?.config?.url || ''
    toast?.remove('loading')

    const err: string = (error?.response?.data?.message?.en || error?.response?.data?.message || (error?.response as any)?.message || '')?.trim() || 'Something went wrong, try again later!'

    if (error?.response?.data?.details && error?.response?.data?.details?.length > 0) {
      error?.response?.data?.details?.map((detail: any) => toast?.error((detail?.message || '')?.trim() || err, { id: toastId }))
    } else {
      toast?.error(err, { id: toastId })
    }

    setTimeout(() => toast?.remove(toastId), 1000)
    return Promise?.reject(error)
  },
)

export default myAxios