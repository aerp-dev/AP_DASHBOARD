import React from 'react'
import { usePosts } from '../hooks/useApi'

const Products: React.FC = () => {
  const { data, isLoading, error } = usePosts()

  if (isLoading) return <p>Загрузка продуктов...</p>
  if (error) return <p>Ошибка загрузки продуктов: {error.message}</p>

  return (
    <section className='max-w-7xl mx-auto mt-4'>
      <h1 className='text-3xl font-bold mb-6'>Продукты</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {data?.slice(0, 8).map((item) => (
          <div key={item.id} className='bg-white p-4 rounded shadow flex items-center justify-center'>
            {item.title.slice(0, 20)}...
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products