import React from 'react'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import { NavigateNext } from '@mui/icons-material'
const MuiBreadCumbs = () => {
    return (
        <Box m={2} >
            <Breadcrumbs
                aria-label='breadcrumbs'
                separator={<NavigateNext />}
                maxItems={2}
                // itemsAfterCollapse={2}
                // itemsAfterCollapse={2}
            >
                <Link underline='hover' href='#'>Home</Link>
                <Link underline='hover' href='#'>Catalog</Link>
                <Link underline='hover' href='#'>Accessories</Link>
                <Typography color='text.primary'>Shoes</Typography>
            </Breadcrumbs>
        </Box>
    )
}

export default MuiBreadCumbs