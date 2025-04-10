// Hooks
import { useTypedSelector } from 'hooks'

const Home: React.FC = () => {
  const { name } = useTypedSelector((s) => s.store.user)

  return (
    <section className='max-w-7xl mx-auto mt-4'>
      <h1 className='text-xl font-bold mb-4'>Добро пожаловать, {name}!</h1>

      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='bg-blue-100 p-4 rounded shadow'>Информация о продуктах</div>
        <div className='bg-green-100 p-4 rounded shadow'>Данные биллинга</div>
        <div className='bg-yellow-100 p-4 rounded shadow'>Прогноз и архив</div>
      </div>
    </section>
  )
}

export default Home