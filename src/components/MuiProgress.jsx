import React from 'react'
import { CircularProgress, LinearProgress, Stack } from '@mui/material'

const MuiProgress = () => {
    return (
        <Stack spacing={2} p={6}>
            <CircularProgress />
            <CircularProgress color='success' />
            <CircularProgress variant='determinate' value={60} />

            <LinearProgress />
            <LinearProgress color='success' />
            <LinearProgress variant='determinate' value={60} />
        </Stack>
    )
}

export default MuiProgress