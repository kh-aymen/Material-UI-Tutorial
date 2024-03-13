import { Typography } from '@mui/material'
import React from 'react'

const MuiTypography = () => {
    return (
        <div>
            <Typography variant='h1' gutterBottom>h1 Heading</Typography>
            <Typography variant='h2'>h2 Heading</Typography>
            <Typography variant='h3'>h3 Heading</Typography>
            <Typography variant='h4'>h4 Heading</Typography>
            <Typography variant='h4' component='h1'>h4 Heading</Typography>
            <Typography variant='h5'>h5 Heading</Typography>
            <Typography variant='h6'>h6 Heading</Typography>

            <Typography variant='subtitle1'>subtitle1 Heading</Typography>
            <Typography variant='subtitle2'>subtitle2 Heading</Typography>

            <Typography variant='body1'>body1  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto fuga quaerat doloribus dolorem autem, saepe temporibus veritatis fugiat et officia.</Typography>
            <Typography variant='body2'>body2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officiis ipsa delectus quisquam dolor distinctio vel, corporis quis ullam nihil?</Typography>
        </div>
    )
}

export default MuiTypography