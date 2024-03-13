import React, { useState } from 'react'
import { Autocomplete, Stack, TextField } from '@mui/material'

const skills = ['html', 'css', 'javaScript', 'TypeScritp', 'React', 'NodeJS']


const skillsOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill
}))


const MuiAutoComplite = () => {
    const [value, setValue] = useState(null)
    const [skill, setSkill] = useState(null)
    console.log("🚀 ~ MuiAutoComplite ~ skill:", skill)


    return (
        <Stack spacing={2} width='250px'>
            <Autocomplete
                options={skills}
                renderInput={(params) => <TextField {...params} label={'Skills'} />}
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                // freeSolo
            />
            <Autocomplete
                options={skillsOptions}
                renderInput={(params) => <TextField {...params} label={'Skills'} />}
                value={skill}
                onChange={(event, newValue) => setSkill(newValue)}
            />
        </Stack>
    )
}

export default MuiAutoComplite