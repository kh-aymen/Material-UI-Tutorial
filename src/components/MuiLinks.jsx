import React from 'react'
import { Link, Stack } from '@mui/material'

const MuiLinks = () => {
    return (
        <Stack
            direction='row'
            spacing={2}
            m={4}
        >
            <Link href='#' >Home</Link>
            <Link href='#' variant='h2'>Home</Link>
            <Link href='#' color='secondary' underline='hover'>secondary</Link>
        </Stack>
    )
}

export default MuiLinks