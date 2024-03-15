import React from 'react'
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Mail } from '@mui/icons-material'

const MuiList = () => {
    return (
        <Box sx={{ width: '400px', bgcolor: '#efefef' }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <Mail />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText primary='List Item 1' secondary='secondary text' />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <Mail />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary='List Item 2' secondary='secondary text' />
                </ListItem>
                <Divider />

                <ListItem>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <Mail />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary='List Item 3' secondary='secondary text' />
                </ListItem>
            </List>
        </Box>
    )
}

export default MuiList