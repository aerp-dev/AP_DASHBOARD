// Hooks
import { useTypedSelector } from 'hooks'
import Products from './Products'

const Dashboard: React.FC = () => {
  const { user } = useTypedSelector((s) => s.store)

  return (
    <section className='max-w-7xl mx-auto mt-4'>
      <h1 className='text-xl font-bold'>
        Welcome, <span className='font-semibold'>{user?.name}</span>
      </h1>

      {/* Example placeholder for different data sections */}
      <div className='mt-6'>
        <h2 className='text-xl font-semibold mb-2'>Dashboard Overview</h2>
        <div className='grid grid-cols-3 gap-4'>
          <div className='bg-blue-100 p-4 rounded shadow'>Products Info</div>
          <div className='bg-green-100 p-4 rounded shadow'>Billing Info</div>
          <div className='bg-yellow-100 p-4 rounded shadow'>Forecast &amp; Archive</div>
        </div>
      </div>

      <Products />
    </section>
  )
}

export default Dashboard