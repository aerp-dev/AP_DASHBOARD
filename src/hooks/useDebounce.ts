let timeoutId: any = 0
const useDebounce = (callback: Function): void => {
  clearTimeout(timeoutId)
  timeoutId = setTimeout(() => callback(), 1200)
}
export default useDebounce