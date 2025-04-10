import { useQuery } from 'react-query'

interface Post {
  id: number
  title: string
  body: string
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export const usePosts = () => {
  return useQuery<Post[], Error>('posts', fetchPosts)
}