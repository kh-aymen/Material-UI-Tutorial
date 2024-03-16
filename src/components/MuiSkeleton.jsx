import React from 'react'
import { Skeleton, Stack } from '@mui/material'

const MuiSkeleton = () => {
    return (
        <Stack spacing={1} width='250px' p={6}>
            <Skeleton variant='text' animation='wave' />
            <Skeleton variant='circular' width={40} height={40} animation='wave' />
            <Skeleton variant='rectangular' animation='wave' />
            <Skeleton variant='rounded' animation='wave' />
        </Stack>
    )
}

export default MuiSkeleton