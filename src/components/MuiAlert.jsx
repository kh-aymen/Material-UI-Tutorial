import React from 'react'
import { Alert, AlertTitle, Button, Stack } from '@mui/material'
import { Check } from '@mui/icons-material'

const MuiAlert = () => {
    return (
        <Stack spacing={2} p={2}>
            <Alert severity='error'>This is an error alert</Alert>
            <Alert severity='warning'>This is an warning alert</Alert>
            <Alert severity='info'>This is an info alert</Alert>
            <Alert severity='success'>This is an success alert</Alert>

            <Alert variant='outlined' severity='error'>This is an error alert</Alert>
            <Alert variant='outlined' severity='warning'>This is an warning alert</Alert>
            <Alert variant='outlined' severity='info'>This is an info alert</Alert>
            <Alert variant='outlined' severity='success'>This is an success alert</Alert>

            <Alert variant='filled' severity='error'>
                <AlertTitle>error</AlertTitle>
                This is an error alert</Alert>
            <Alert variant='filled' severity='warning'>
                <AlertTitle>warning</AlertTitle>
                This is an warning alert</Alert>
            <Alert variant='filled' severity='info'
                onClose={() => alert('onCloseed')}
            >
                <AlertTitle>info</AlertTitle>
                This is an info alert</Alert>
            <Alert
                variant='filled'
                severity='success'
                icon={<Check fontSize='inherit' />}
                action={
                    <Button color='inherit'>
                        UNDUO
                    </Button>
                }
            >
                <AlertTitle>success</AlertTitle>
                This is an success alert</Alert>
        </Stack>
    )
}

export default MuiAlert