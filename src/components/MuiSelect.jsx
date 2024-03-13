import React, { useState } from 'react'
import { Box, TextField, MenuItem } from '@mui/material'

const MuiSelect = () => {
    const [country, setCountry] = useState([])
    return (
        <Box width='250px'>
            <TextField
                label='Select Country'
                select
                value={country}
                onChange={(event) => { setCountry(event.target.value) }}
                fullWidth
                SelectProps={{
                    multiple: true
                }}
                helperText='pls select ur country'
                size='small'
            >
                <MenuItem value='DZ'>Algeria</MenuItem>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AU'>Austraia</MenuItem>
            </TextField>
        </Box>
    )
}

export default MuiSelect