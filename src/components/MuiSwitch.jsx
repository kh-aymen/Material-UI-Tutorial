import React, { useState } from 'react'
import { Box, FormControlLabel, Switch } from '@mui/material'

const MuiSwitch = () => {
    const [checked, setChecked] = useState(false)
    console.log("🚀 ~ MuiSwitch ~ checked:", checked)
    const handleChecked = (event) => {
        setChecked(event.target.checked)
    }
    return (
        <Box>
            <FormControlLabel label="Dark Mode" control={<Switch checked={checked} onChange={handleChecked} size='small' color='warning'/>} />
        </Box>
    )
}

export default MuiSwitch