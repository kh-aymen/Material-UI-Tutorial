import React, { useState, forwardRef } from 'react'
import { Box, Button, Snackbar, Alert } from '@mui/material'

const SnakebarAlert = forwardRef(
    function SnakebarAlert(props, ref) {
        return <Alert elevation={6} ref={ref} {...props} />
    }
)

const MuiSnackbar = () => {
    const [open, setOpen] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }

    return (
        <Box>
            <Button onClick={() => setOpen(true)}>Submit</Button>
            {/* <Snackbar
                message='Form submitted successfully!'
                autoHideDuration={4000}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    horizontal: 'right',
                    vertical: 'bottom'
                }}
            /> */}
            <Snackbar
                autoHideDuration={4000}
                open={open}
                onClose={handleClose}
            >
                <SnakebarAlert onClose={handleClose} severity='success'>
                    Form submitted successfully!
                </SnakebarAlert>
            </Snackbar>
        </Box>
    )
}

export default MuiSnackbar