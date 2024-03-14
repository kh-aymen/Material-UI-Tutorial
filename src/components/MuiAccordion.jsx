import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

const MuiAccordion = () => {
    const [expanded, setExpanded] = useState(false)

    const handleChange = (isExpanded, panel) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <Box>
            <Accordion expanded={expanded === 'panel1'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}>
                <AccordionSummary
                    id='panel1-header'
                    aria-label='panel1-content'
                    expandIcon={<ExpandMore />}
                >
                    <Typography>
                        Accordion 1
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quasi, quisquam alias ratione dignissimos fugiat totam optio nulla voluptatem nemo veniam odio unde. Ipsa quibusdam quas nesciunt illo, non rem.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}>
                <AccordionSummary
                    id='panel2-header'
                    aria-label='panel2-content'
                    expandIcon={<ExpandMore />}
                >
                    <Typography>
                        Accordion 2
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quasi, quisquam alias ratione dignissimos fugiat totam optio nulla voluptatem nemo veniam odio unde. Ipsa quibusdam quas nesciunt illo, non rem.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}>
                <AccordionSummary
                    id='panel3-header'
                    aria-label='panel3-content'
                    expandIcon={<ExpandMore />}
                >
                    <Typography>
                        Accordion 3
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quasi, quisquam alias ratione dignissimos fugiat totam optio nulla voluptatem nemo veniam odio unde. Ipsa quibusdam quas nesciunt illo, non rem.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default MuiAccordion