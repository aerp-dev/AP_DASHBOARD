import React from 'react'

const ForecastAndArchive: React.FC = () => {
  return (
    <section className='max-w-7xl mx-auto mt-4'>
      <h1 className='text-2xl font-bold mb-4'>Forecast &amp; Archive History</h1>

      <div className='bg-white shadow p-4 rounded mb-6'>
        <h2 className='text-xl font-semibold mb-2'>Organization: FutureCo</h2>
        <p className='text-gray-600'>Forecast data based on monthly sales.</p>
        {/* Example button for an action */}
        <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>Start Forecast/Backup Process</button>
      </div>

      <div className='bg-white shadow p-4 rounded'>
        <h3 className='text-lg font-semibold mb-2'>Forecast and Archive History</h3>
        <table className='w-full'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='px-4 py-2 text-left'>Month</th>
              <th className='px-4 py-2 text-left'>Forecast</th>
              <th className='px-4 py-2 text-left'>Archived Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='px-4 py-2'>2023-01</td>
              <td className='px-4 py-2'>$10,000</td>
              <td className='px-4 py-2'>2023-02-01</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='px-4 py-2'>2023-02</td>
              <td className='px-4 py-2'>$12,500</td>
              <td className='px-4 py-2'>2023-03-01</td>
            </tr>
            {/* Additional rows... */}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ForecastAndArchive