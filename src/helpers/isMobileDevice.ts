export function mobileDeviceChecker(): boolean {
  const userAgent: string = navigator?.userAgent || navigator?.vendor || (window as any)?.opera || ''

  // Check for mobile devices
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i?.test(userAgent?.toLowerCase())
}

export function isMobileDeviceScreen(): boolean {
  return mobileDeviceChecker() && window?.location?.pathname === '/profile/settings'
}