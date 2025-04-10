import { useQuery } from '@tanstack/react-query'
import myAxios from 'lib/axios'

// Ma'lumot tiplari
export interface AerpGeneralInfo {
  name: string
  createdAt: string
  lastPaymentDate: string
  nextPaymentDate: string
  organizations: number
  totalEmployees: number
  totalEmployedUsers: number
  description?: string
  organizationCount: number
}

export const useAerpGeneralInfo = () => {
  return useQuery<AerpGeneralInfo>({
    queryKey: ['aerp', 'general'],
    queryFn: async () => {
      const { data } = await myAxios.get<AerpGeneralInfo>('/settings/erp')
      return data
    },
    staleTime: 1000 * 60 * 5, // 5 minut yangilamaydi
    retry: 1,
  })
}