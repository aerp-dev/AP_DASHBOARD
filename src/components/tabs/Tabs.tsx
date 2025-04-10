interface TabsProps {
  tabs: string[]
  current: number
  onChange: (index: number) => void
}

export const Tabs = ({ tabs, current, onChange }: TabsProps) => (
  <div className='flex gap-2 overflow-x-auto hide-scroll'>
    {tabs?.map((tab: string, i: number) => (
      <button
        key={`${tab?.replaceAll(' ', '-')}-${i}`}
        onClick={() => onChange(i)}
        className={`py-2 px-4 text-sm text-nowrap border-b-2 ${i === current ? 'border-blue-600 text-blue-600 font-semibold' : 'border-transparent text-gray-500'}`}>
        {tab || '---'}
      </button>
    ))}
  </div>
)

export const TabPanel = ({ children, current, index }: { children: React.ReactNode; current: number; index: number }) => (current === index ? <>{children}</> : null)