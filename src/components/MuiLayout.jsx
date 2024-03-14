import React from 'react'
import { Box, Stack, Divider, Grid, Paper } from '@mui/material'

const MuiBox = () => {
    return (
        <Paper
            elevation={6}
            sx={{ padding: '32px' }}
        >
            <Stack
                sx={{ border: '1px solid' }}
                p='1rem'
                direction='row'
                spacing={2}
                divider={<Divider orientation='vertical' flexItem />}
            >
                <Box
                    // component='span'
                    sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        height: '100px',
                        width: '100px',
                        padding: '16px',
                        '&:hover': {
                            backgroundColor: 'primary.light'
                        }
                    }}
                >
                    Evolotion
                </Box>
                <Box
                    display='flex'
                    height='100px'
                    width='100px'
                    bgcolor='skyblue'
                    p='1rem'
                >
                    Evolotion
                </Box>
                <Box
                    display='flex'
                    height='100px'
                    width='100px'
                    bgcolor='skyblue'
                    p='1rem'
                >
                    Evolotion
                </Box>
            </Stack>

            <Grid
                container
                my={2}
                spacing={2}
            // rowSpacing={ 2}
            // columnSpacing={2}
            >
                <Grid item sm={6} xs={12}>
                    <Box bgcolor='primary.light' p={2}>Item 1</Box>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Box bgcolor='primary.light' p={2}>Item 2</Box>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Box bgcolor='primary.light' p={2}>Item 3</Box>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Box bgcolor='primary.light' p={2}>Item 4</Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default MuiBox