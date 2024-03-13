import React, { useState } from 'react'
import {
    Box,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Radio,
    RadioGroup
} from '@mui/material'

const MuiRadio = () => {
    const [value, setValue] = useState('')
    console.log("🚀 ~ MuiRadio ~ value:", value)
    return (
        <Box>
            <FormControl error>
                <FormLabel>
                    Years of Expreience
                </FormLabel>
                <RadioGroup
                    name='jop-expreience-group'
                    aria-labelledby='jop-expreience-group'
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    // row
                    siz
                >
                    <FormControlLabel control={<Radio size='small' color='warning' />} label='0-2' value='0-2' />
                    <FormControlLabel control={<Radio size='small' color='warning' />} label='3-5' value='3-5' />
                    <FormControlLabel control={<Radio size='small' color='warning' />} label='6-9' value='6-9' />
                </RadioGroup>
                <FormHelperText>Invalid selection</FormHelperText>
            </FormControl>
        </Box>
    )
}

export default MuiRadio