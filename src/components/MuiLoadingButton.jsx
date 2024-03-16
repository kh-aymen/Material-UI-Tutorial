import React, { useState } from "react"
import { Stack } from "@mui/material"
import { LoadingButton } from "@mui/lab"
import { Check, Save } from "@mui/icons-material"

const MuiLoadingButton = () => {
  const [open, setOpen] = useState(false)
  return (
    <Stack spacing={2} direction="row" p={6}>
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>

      <LoadingButton variant="outlined" loadingIndicator="Loading...">
        Fetch Data
      </LoadingButton>
      <LoadingButton loading variant="outlined" loadingIndicator="Loading...">
        Fetch Data
      </LoadingButton>

      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        startIcon={<Save />}
      >
        Save
      </LoadingButton>
      <LoadingButton
        loading={open}
        variant="outlined"
        loadingPosition="start"
        startIcon={<Save />}
        onClick={() => setOpen(true)}
      >
        Save
      </LoadingButton>
      <LoadingButton
        loading={open}
        variant="outlined"
        loadingPosition="start"
        startIcon={<Check />}
        onClick={() => setOpen(true)}
      >
        Save
      </LoadingButton>
    </Stack>
  )
}

export default MuiLoadingButton
