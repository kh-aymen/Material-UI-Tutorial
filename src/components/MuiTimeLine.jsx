import React from "react"
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab"

const MuiTimeLine = () => {
  return (
    <Timeline
    // position='alternate'
    >
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          08:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            color="secondary"
            // variant='outlined'
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City A</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            color="secondary"
            // variant='outlined'
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City B</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          11:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            color="secondary"
            // variant='outlined'
          />
        </TimelineSeparator>
        <TimelineContent>City C</TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default MuiTimeLine
