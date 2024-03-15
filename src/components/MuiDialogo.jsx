import React, { useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

const MuiDialogo = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Box p={4}>
      <Button variant='contained' onClick={handleOpen}>Open Dialog</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='dialog-title'
        aria-aria-describedby='dialog-description'
      >
        <DialogTitle id='dialog-title'>Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id='dialog-description'>
            Are you sure you want to submit the test? You will not be able to edit after submiting
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant='contained'
            color='error'
            onClick={handleClose}
          >Cancle</Button>
          <Button
            variant='contained'
            color='success'
            autoFocus
            onClick={handleClose}
          >Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default MuiDialogo