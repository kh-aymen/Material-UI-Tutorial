import React, { useState } from 'react'
import { Stack, Rating } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
const MuiRating = () => {
    const [value, setValue] = useState(null)
    console.log("🚀 ~ MuiRating ~ value:", value)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <Stack spacing={2}>
            <Rating
                value={value}
                onChange={handleChange}
                precision={1}
                size='large'
                icon={<Favorite fontSize='inherit' color='error' />}
                emptyIcon={<FavoriteBorder fontSize='inherit' />}
            // highlightSelectedOnly
            // readOnly
            />
        </Stack>
    )
}

export default MuiRating