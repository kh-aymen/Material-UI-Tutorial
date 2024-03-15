import React from 'react'
import { Stack, Badge } from '@mui/material'
import { Mail } from '@mui/icons-material'

const MuiBadge = () => {
    return (
        <Stack
            direction='row'
            spacing={2}
            p={2}
        >
            <Badge
                badgeContent={5}
                color='primary'
            >
                <Mail />
            </Badge>
            <Badge
                badgeContent={0}
                color='secondary'
                showZero
            >
                <Mail />
            </Badge>
            <Badge
                badgeContent={100}
                color='secondary'
                showZero
            // max={999}
            >
                <Mail />
            </Badge>
            <Badge
                variant='dot'
                color='primary'
            >
                <Mail />
            </Badge>
            <Badge
                variant='dot'
                color='primary'
                invisible={true}
            >
                <Mail />
            </Badge>
        </Stack>
    )
}

export default MuiBadge