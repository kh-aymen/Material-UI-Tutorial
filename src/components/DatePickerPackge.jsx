// there is a data picker in "@mui/lab" and so search for it 
// the package here is not in mui


import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import { Box } from '@mui/material'

import "react-datepicker/dist/react-datepicker.css"

const DatePickerPackge = () => {
    const [startDate, setStartDate] = useState(new Date())
    console.log("🚀 ~ DatePickerPackge ~ startDate:", startDate)

    return (
        <Box p={6} m='auto' width='500px'>
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                value={startDate}
                showTimeSelect
                dateFormat='Pp'
            />
        </Box>
    )
}

export default DatePickerPackge

