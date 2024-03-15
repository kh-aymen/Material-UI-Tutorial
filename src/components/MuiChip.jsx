import React, { useState } from 'react'
import { Avatar, Chip, Stack } from '@mui/material'
import { Face } from '@mui/icons-material'

const MuiChip = () => {
    const [chips, setChips] = useState(['chip1', 'chip2', 'chip3', 'chip4'])

    const handleDelet = (chipToDelet) => {
        setChips(chip => chip.filter((item) => item !== chipToDelet))
    }

    return (
        <Stack direction='row' spacing={1} p={2}>
            <Chip label='chip' color='primary' size='large' icon={<Face />} />
            <Chip variant='outlined' label='chip outlined' color='primary' avatar={<Avatar>Kh</Avatar>} />
            <Chip label='Click' color='success' onClick={() => alert('Clicked')} />
            <Chip label='Delete' color='error'
                onClick={() => alert('Clicked')}
                onDelete={() => alert('Delete handler called')}
            />
            {
                chips && chips.map(chip => (
                    <Chip key={chip} label={chip} onDelete={() => handleDelet(chip)} />
                ))
            }
        </Stack>
    )
}

export default MuiChip