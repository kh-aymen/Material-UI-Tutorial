import React from 'react'
import { Box, IconButton, Tooltip } from '@mui/material'
import { Delete } from '@mui/icons-material'

const MuiTooltip = () => {
    return (
        <Box>
            <Tooltip title='Delete' placement='right' arrow
                enterDelay={500}
                leaveDelay={200}
            >
                <IconButton>
                    <Delete />
                </IconButton>
            </Tooltip>
        </Box>
    )
}

export default MuiTooltip