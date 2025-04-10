import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import myAxios from 'lib/axios'

interface Post {
  id: number
  title: string
  body: string
}

const fetchPosts = async (): Promise<Post[]> => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts') // JSONPlaceholder API
  return data
}

export const usePosts = () => {
  return useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5, // 5 daqiqa (cache uchun)
    retry: 2, // Retry 2 marta agar xatolik bo‘lsa
  })
}