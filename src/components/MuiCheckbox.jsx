import React, { useState } from 'react'
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material'
import { Bookmark, BookmarkOutlined } from '@mui/icons-material'

const MuiCheckbox = () => {
    const [cheked, setCheked] = useState(false)
    console.log("🚀 ~ MuiCheckbox ~ cheked:", cheked)
    const [skills, setSkills] = useState([])
    console.log("🚀 ~ MuiCheckbox ~ skills:", skills)

    const handleChangeSkills = (event) => {
        const index = skills.indexOf(event.target.value)

        if (index === -1) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills(skills.filter(skill => skill !== event.target.value))
        }
    }

    return (
        <Box>
            <Box>
                <FormControlLabel
                    label='I accept terms and conditions'
                    control={<Checkbox size='small' color='secondary' checked={cheked} onChange={(event) => setCheked(event.target.checked)} />}
                />
                <Checkbox
                    icon={<BookmarkOutlined />}
                    checkedIcon={<Bookmark />}
                    checked={cheked}
                    onChange={(event) => setCheked(event.target.checked)}
                />
            </Box>
            <Box>
                <FormControl error>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            label='Html'
                            control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleChangeSkills} />}
                        />
                        <FormControlLabel
                            label='Css'
                            control={<Checkbox value='css' checked={skills.includes('css')} onChange={handleChangeSkills} />}
                        />
                        <FormControlLabel
                            label='Js'
                            control={<Checkbox value='js' checked={skills.includes('js')} onChange={handleChangeSkills} />}
                        />
                    </FormGroup>
                    <FormHelperText>Invalid Selection</FormHelperText>
                </FormControl>
            </Box>
        </Box>
    )
}

export default MuiCheckbox