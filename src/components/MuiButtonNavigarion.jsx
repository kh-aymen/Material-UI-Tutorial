import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Home, Favorite, Person } from '@mui/icons-material'

const MuiButtonNavigarion = () => {
    const [value, setValue] = useState(0)

    return (
        <BottomNavigation
            sx={{ width: '100%', position: 'absolute', bottom: 0 }}
            value={value}
            onChange={(event, newValue) => { setValue(newValue) }}
            showLabels
        >
            <BottomNavigationAction label='home' icon={<Home />} />
            <BottomNavigationAction label='favority' icon={<Favorite />} />
            <BottomNavigationAction label='person' icon={<Person />} />
        </BottomNavigation>
    )
}

export default MuiButtonNavigarion