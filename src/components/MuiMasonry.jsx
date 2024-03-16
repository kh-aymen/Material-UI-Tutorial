import React from "react"
import {
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material"
import { Masonry } from "@mui/lab"
import { ExpandMore } from "@mui/icons-material"

const heights = [
  150, 300, 90, 70, 110, 150, 130, 80, 500, 90, 100, 150, 300, 50, 80, 400, 70, 90,
]

const MuiMasonry = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: 400,
        p: 6,
      }}
    >
      <Masonry columns={4} spacing={1}>
        {heights.map((height, index) => (
          <Paper
            key={index}
            sx={{
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              // height,
              // border: "1px solid",
            }}
          >
            <Accordion sx={{ minHeight: height }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>Accodion {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>Content</AccordionDetails>
            </Accordion>
          </Paper>
        ))}
      </Masonry>
    </Box>
  )
}

export default MuiMasonry
