import React, { useState } from 'react'
import { InputAdornment, Stack, TextField, Input } from '@mui/material'

const MuiTextField = () => {
    const [value, setValue] = useState('')

    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' variant='outlined' />
                <TextField label='Name' variant='standard' />
                <TextField label='Name' variant='filled' />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Small secondary' size='small' color='secondary' />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField
                    label='Forem Input'
                    size='small'
                    color='secondary'
                    required
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    error={!value}
                    helperText={
                        !value ? 'Required' : 'Do not share your password with others'
                    }
                />
                <TextField label='disabled' size='small' color='secondary' required disabled />
                <TextField size='small' color='secondary' value='Read only' required InputProps={{ readOnly: true }} />
                <TextField
                    label='Forem password'
                    size='small'
                    color='info'
                    type='password'
                    helperText='Do not share your password with others' />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField
                    label='Amount'
                    type='number'
                    InputProps={{
                        startAdornment: <InputAdornment position='start'>$</InputAdornment>
                    }}
                />
                <TextField
                    label='Weight'
                    type='number'
                    InputProps={{
                        endAdornment: <InputAdornment position='end'>Kg</InputAdornment>
                    }}
                />
                <Input />
            </Stack>
        </Stack>
    )
}

export default MuiTextField