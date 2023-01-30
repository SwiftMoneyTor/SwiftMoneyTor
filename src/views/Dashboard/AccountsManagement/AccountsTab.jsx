import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { GiBriefcase } from "react-icons/gi";
import { MdAlternateEmail, MdExpandLess, MdExpandMore } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const AccountsTab = () => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };
    return (
        <div className='p-5'>
            <h3>Personal</h3>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Nested List Items
                    </ListSubheader>
                }
            >
                <ListItemButton>
                    <ListItemIcon>
                        <BiUserCircle/>
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                       <MdAlternateEmail/>
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <RiLockPasswordFill />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    {open ? <MdExpandLess /> : <MdExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <GiBriefcase/>
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </div >
    )
}

export default AccountsTab