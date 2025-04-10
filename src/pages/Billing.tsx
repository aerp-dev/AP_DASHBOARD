import React from 'react'

const Billing: React.FC = () => {
  return (
    <section className='max-w-7xl mx-auto mt-4'>
      <h1 className='text-3xl font-bold mb-4'>Биллинг</h1>
      <table className='w-full bg-white rounded shadow overflow-hidden'>
        <thead className='bg-gray-200'>
          <tr>
            <th className='px-4 py-2 text-left'>#</th>
            <th className='px-4 py-2 text-left'>Название</th>
            <th className='px-4 py-2 text-left'>Дата</th>
            <th className='px-4 py-2 text-left'>Сумма</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='px-4 py-2'>1</td>
            <td className='px-4 py-2'>Биллинг #101</td>
            <td className='px-4 py-2'>2023-01-10</td>
            <td className='px-4 py-2'>$123.45</td>
          </tr>
          <tr className='bg-gray-50'>
            <td className='px-4 py-2'>2</td>
            <td className='px-4 py-2'>Биллинг #102</td>
            <td className='px-4 py-2'>2023-02-05</td>
            <td className='px-4 py-2'>$678.90</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Billing