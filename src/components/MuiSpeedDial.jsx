import React from "react"
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material"
import { CopyAll, Print, Share, Edit } from "@mui/icons-material"

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<Edit />} />}
    >
      <SpeedDialAction icon={<CopyAll />} tooltipTitle="copy" tooltipOpen />
      <SpeedDialAction icon={<Print />} tooltipTitle="print" tooltipOpen />
      <SpeedDialAction icon={<Share />} tooltipTitle="share" tooltipOpen />
    </SpeedDial>
  )
}

export default MuiSpeedDial
