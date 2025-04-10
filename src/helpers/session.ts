import Cookies from 'js-cookie'
import { TOKEN_COOKIE_NAME } from 'utils'

/** Gives user token from cookies */
export const getUserToken = (): string | null => {
  return Cookies?.get(TOKEN_COOKIE_NAME) || null
}

/** Gives current selected Organization UID */
export const getUserOrganization = (): string => {
  const params: URLSearchParams = new URLSearchParams(window?.location?.search)
  return params?.get('organizationParam') || ''
}

export const tokenUnRequiredPathnames: string[] = ['/admins/login', '/admins/admin/profile-password', 'itw']