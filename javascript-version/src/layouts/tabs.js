// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import CardContent from '@mui/material/CardContent'

const Tabs = ({tabData,tooltipDate}) => {
  // ** State
  const [value, setValue] = useState(tabData[0].label);
  const [subTabValue, setSubTabValue] = useState(tabData[0].subTabs ? tabData[0].subTabs[0].label : '');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const newTab = tabData.find(tab => tab.label === newValue);
    setSubTabValue(newTab.subTabs ? newTab.subTabs[0].label : '');
  };

  const handleSubTabChange = (event, newValue) => {
    setSubTabValue(newValue);
  };

  return (
    <TabContext value={value} sx={{px:{xs:0}}}>
      <TabList onChange={handleChange} aria-label='card navigation example'>
        {tabData.map((tab, index) => (
          <Tab key={index} value={tab.label} label={tab.label} />
        ))}
      </TabList>
      <CardContent sx={{ textAlign: 'center', px:{xs:0}}}>
        {tabData.map((tab, index) => (
          <TabPanel key={index} value={tab.label} sx={{ p: 0 }}>
            {tab.subTabs ? (
              <TabContext value={subTabValue}>
                <TabList onChange={handleSubTabChange} aria-label='sub-tab navigation'>
                  {tab.subTabs.map((subTab, subIndex) => (
                    <Tab key={subIndex} value={subTab.label} label={subTab.label}  />
                  ))}
                </TabList>
                {tab.subTabs.map((subTab, subIndex) => (
                  <TabPanel key={subIndex} value={subTab.label} sx={{px:{xs:0}}}>
                    {subTab.content}
                  </TabPanel>
                ))}
              </TabContext>
            ) : (
              tab.content
            )}
          </TabPanel>
        ))}
      </CardContent>
    </TabContext>
  )
}

export default Tabs
