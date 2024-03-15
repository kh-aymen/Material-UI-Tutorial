import { Avatar, AvatarGroup, Stack } from '@mui/material'
import React from 'react'

const MuiAvatar = () => {
    return (
        <Stack Stack spacing={4}
            p={2}
        >
            <Stack direction='row' spacing={1}>
                <Avatar sx={{ bgcolor: 'primary.main' }}>KH</Avatar>
                <Avatar sx={{ bgcolor: 'secondary.dark' }}>KA</Avatar>
            </Stack>
            <Stack direction='row' spacing={1}>
                <AvatarGroup
                    max={3}
                >
                    <Avatar sx={{ bgcolor: 'primary.main' }}>KH</Avatar>
                    <Avatar sx={{ bgcolor: 'secondary.dark' }}>KA</Avatar>
                    <Avatar sx={{ bgcolor: 'secondary.dark' }}
                        src='https://randomuser.me/api/portraits/women/79.jpg'
                        alt='woman'
                    />
                    <Avatar sx={{ bgcolor: 'secondary.dark' }}
                        src='https://randomuser.me/api/portraits/men/79.jpg'
                        alt='man'
                    />
                </AvatarGroup>
            </Stack>
            <Stack direction='row' spacing={1}>
                <Avatar variant='square' sx={{ bgcolor: 'primary.main', width: 48, height: 48 }}>KH</Avatar>
                <Avatar variant='rounded' sx={{ bgcolor: 'secondary.dark', width: 48, height: 48 }}>KA</Avatar>
                <Avatar sx={{ bgcolor: 'secondary.dark', width: 48, height: 48 }}>KA</Avatar>
            </Stack>
        </Stack >
    )
}

export default MuiAvatar