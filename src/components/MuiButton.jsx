import React from 'react'
import { Button, Stack, IconButton, ButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

const MuiButton = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant='text' href='https://google.com' target='_blank'>Text</Button>
                <Button variant='outlined'>Text</Button>
                <Button variant='contained'>Text</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>primary</Button>
                <Button variant='contained' color='error'>error</Button>
                <Button variant='contained' color='info'>info</Button>
                <Button variant='contained' color='inherit'>inherit</Button>
                <Button variant='contained' color='secondary'>secondary</Button>
                <Button variant='contained' color='success'>success</Button>
                <Button variant='contained' color='warning'>warning</Button>
            </Stack>
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>small</Button>
                <Button variant='contained' size='medium'>medium</Button>
                <Button variant='contained' size='large'>large</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' startIcon={<SendIcon />}>Send</Button>
                <Button variant='contained' endIcon={<SendIcon />} disableElevation disableRipple onClick={() => alert("Button")}>Send</Button>
                <IconButton size='small' color='secondary'>
                    <SendIcon />
                </IconButton>
            </Stack>
            <Stack direction='row'>
                <ButtonGroup
                    variant='contained'
                    orientation='vertical'
                    size='small'
                    color='success'
                    aria-aria-label='alignment button group'
                >
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>
        </Stack>
    )
}

export default MuiButton