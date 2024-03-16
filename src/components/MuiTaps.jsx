import React, { useState } from 'react'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Favorite } from '@mui/icons-material'

const MuiTaps = () => {
    const [tapActive, setTapActive] = useState(1)

    const handleChange = (event, newValue) => {
        setTapActive(newValue)
    }

    return (
        <Box p={6}>
            <TabContext value={tapActive}>
                <Box
                    sx={{
                        borderBottom: 1, borderColor: 'divider',
                        // width: '300px'
                    }}
                >
                    <TabList
                        aria-label='Tabs-example'
                        onChange={handleChange}
                        textColor='secondary'
                        indicatorColor='secondary'
                        centered
                    // variant='scrollable'
                    // scrollButtons='auto'
                    >
                        <Tab label='Tap One' value='1' icon={<Favorite />} iconPosition='start' />
                        <Tab label='Tap two' value='2' disabled />
                        <Tab label='Tap Three' value='3' />
                        <Tab label='Tap Four' value='4' />
                        <Tab label='Tap Five' value='5' />
                        <Tab label='Tap Six' value='6' />
                    </TabList>
                </Box>
                <TabPanel value='1'>
                    Panel one
                </TabPanel>
                <TabPanel value='2'>
                    Panel two
                </TabPanel>
                <TabPanel value='3'>
                    Panel three
                </TabPanel>
                <TabPanel value='4'>
                    Panel Four
                </TabPanel>
                <TabPanel value='5'>
                    Panel Five
                </TabPanel>
                <TabPanel value='6'>
                    Panel Six
                </TabPanel>
            </TabContext>
        </Box>
    )
}

export default MuiTaps