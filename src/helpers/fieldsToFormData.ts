export default function fieldsToFormData(fields: any, anyValues: boolean = false, notInclude: string[] = []): FormData {
  const formData: FormData = new FormData()

  Object?.entries(fields)?.forEach(([key, value]: any) => {
    if (((value === null || value === undefined || value === '') && !anyValues) || (Array.isArray(notInclude) && notInclude?.length > 0 && notInclude?.includes(key))) return

    switch (true) {
      case typeof value === 'number':
        formData?.set(key, value?.toString())
        break
      case Array.isArray(value):
        formData?.set(key, JSON?.stringify(value))
        break
      case !!(typeof value === 'object' && value?.name?.trim()):
        formData?.set(key, value)
        break
      default:
        formData?.set(key, value?.toString())
    }
  })
  return formData
}