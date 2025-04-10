import { useState } from 'react'

// Components
import { Tabs, TabPanel } from 'components/tabs/Tabs'
import { Button, GeneralInfo, Icon } from 'components'

const tabs: string[] = ['General Info', 'Organizations Info', 'Database Info', 'Database Settings', 'Settings', 'Payment']

export default function Product() {
  const [selectedTab, setSelectedTab] = useState<number>(0)

  const openProductLink = (): void => {
    const productLink: string = `https://aerp.dev`
    window?.open(productLink, '_blank')
  }

  return (
    <div className='p-4 max-w-screen-xl mx-auto rounded-2xl shadow-lg bg-white'>
      <header className='flex items-center justify-between mb-4'>
        <h1 className='text-xl font-semibold mb-2'>AERP 1</h1>

        <Button onClick={openProductLink} className='py-2 pl-4 pr-3 flex gap-0.5'>
          <span>Visit</span>
          <Icon width={14} icon='akar-icons:link-out' className='text-inherit' />
        </Button>
      </header>

      <Tabs tabs={tabs} current={selectedTab} onChange={setSelectedTab} />

      <div className='mt-4'>
        <TabPanel current={selectedTab} index={0}>
          <GeneralInfo />
        </TabPanel>
        {/* <TabPanel current={selectedTab} index={1}>
          <OrganizationsInfo />
        </TabPanel>
        <TabPanel current={selectedTab} index={2}>
          <DatabaseInfo />
        </TabPanel>
        <TabPanel current={selectedTab} index={3}>
          <DatabaseSettings />
        </TabPanel>
        <TabPanel current={selectedTab} index={4}>
          <Settings />
        </TabPanel>
        <TabPanel current={selectedTab} index={5}>
          <Payment />
        </TabPanel> */}
      </div>
    </div>
  )
}