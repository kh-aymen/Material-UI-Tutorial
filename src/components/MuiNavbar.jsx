import React, { useState } from 'react'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography, Menu, MenuItem } from '@mui/material'
import { CatchingPokemon, KeyboardArrowDown } from '@mui/icons-material'

const MuiNavbar = () => {
    // See Popover in Mui docu
    const [anchoreEl, setAnchoreEl] = useState(null)
    const open = Boolean(anchoreEl)
    const handleClick = (event) => {
        setAnchoreEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchoreEl(null)
    }
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-labelledby='logo'>
                    <CatchingPokemon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    POKEMONE APP
                </Typography>
                <Stack spacing={2} direction='row'>
                    <Button color='inherit'>Features</Button>
                    <Button color='inherit'>Priving</Button>
                    <Button color='inherit'>About</Button>
                    <Button
                        color='inherit'
                        id='resources-button'
                        onClick={handleClick}
                        aria-controls={open ? 'resources-menu' : undefined}
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                        endIcon={<KeyboardArrowDown />}
                    >Resources</Button>
                    <Button color='inherit'>Login</Button>
                </Stack>
                <Menu
                    id='resources-menu'
                    anchorEl={anchoreEl}
                    open={open}
                    MenuListProps={{
                        'aria-labelledby': 'resources-button'
                    }}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} >Blog</MenuItem>
                    <MenuItem onClick={handleClose} >Podcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default MuiNavbar