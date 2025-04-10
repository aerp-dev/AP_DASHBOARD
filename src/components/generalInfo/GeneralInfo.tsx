import { useAerpGeneralInfo } from '../../features/api'

// Components
import { Loader } from 'components'

const GeneralInfo = () => {
  const { data, isLoading, isError } = useAerpGeneralInfo()

  if (isLoading)
    return (
      <div className='py-20'>
        <Loader className='w-14 h-14' />
      </div>
    )
  if (isError)
    return (
      <div className='py-20'>
        <p className='text-center text-red-500'>Xatolik yuz berdi</p>
      </div>
    )

  return (
    <div className='space-y-2'>
      <p>
        <strong>Name:</strong> {data?.name}
      </p>
      <p>
        <strong>Created Date:</strong> {data?.createdAt}
      </p>
      <p>
        <strong>Last Payment Date:</strong> {data?.lastPaymentDate}
      </p>
      <p>
        <strong>Next Payment Date:</strong> {data?.nextPaymentDate}
      </p>
      <p>
        <strong>Organizations:</strong> {data?.organizationCount}
      </p>
      <p>
        <strong>Total Employees:</strong> {data?.totalEmployees}
      </p>
      <p className='whitespace-pre-wrap'>
        <strong>Description:</strong> {data?.description}
      </p>

      <button className='btn btn-outline mt-2'>Tafsilotni o‘zgartirish</button>
    </div>
  )
}

export default GeneralInfo