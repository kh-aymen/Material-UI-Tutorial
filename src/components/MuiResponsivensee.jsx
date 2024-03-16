import React from "react"
import { Box, styled } from "@mui/material"

const StyledBox = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  backgroundColor: theme.status.danger,
}))

const MuiResponsivensee = () => {
  return (
    <Box height="100vh" width="100%">
      <Box
        sx={{
          height: "300px",
          margin: "auto",
          bgcolor: "secondary.main",
          width: {
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500,
          },
        }}
      ></Box>
      <StyledBox>ss</StyledBox>
    </Box>
  )
}

export default MuiResponsivensee
