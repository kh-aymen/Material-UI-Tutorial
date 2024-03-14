import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'

const MuiCard = () => {
    return (
        <Stack direction='row' spacing={2}>
            <Box width='300px'>
                <Card>
                    <CardMedia
                        component='img'
                        height='140'
                        image='https://source.unsplash.com/random'
                        alt='unsplash image'
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant='h5'
                            component='div'
                        >
                            React
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla officia obcaecati, sit voluptates laboriosam doloribus, sapiente eligendi earum debitis, velit aliquid. Earum recusandae deserunt, repellat distinctio tenetur sed modi. Totam!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small' variant='text' color='secondary'>Share</Button>
                        <Button size='small' variant='text' color='secondary'>Learn More</Button>
                    </CardActions>
                </Card>
            </Box>
            <Box width='300px'>
                <Card>
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant='h5'
                            component='div'
                        >
                            React
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla officia obcaecati, sit voluptates laboriosam doloribus, sapiente eligendi earum debitis, velit aliquid. Earum recusandae deserunt, repellat distinctio tenetur sed modi. Totam!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small' variant='text' color='secondary'>Share</Button>
                        <Button size='small' variant='text' color='secondary'>Learn More</Button>
                    </CardActions>
                    <CardMedia
                        component='img'
                        height='140'
                        image='https://source.unsplash.com/random'
                        alt='unsplash image'
                    />
                </Card>
            </Box>
        </Stack>
    )
}

export default MuiCard