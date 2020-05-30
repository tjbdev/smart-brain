import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


export default function ProfileIcon({clickLogout, clickProfile}) {
    const [anchorEl, setAnchorEl] = React.useState(null); //A way of using state inside of a functional component.

    const handleClickAvatar = (event) =>{
        setAnchorEl(event.target);
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

    const classes =  makeStyles({
        root: {
            height: '60px',
            width: '60px',
            marginTop: '10px',
            marginRight: '40px'
        }
    })();

    return (
        <div>
            <Avatar className={classes.root} onClick={handleClickAvatar} src={require("./testimage.PNG")}/>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <MenuItem onClick={clickProfile}>Profile</MenuItem>
                <MenuItem onClick={clickLogout}>Log Out</MenuItem> 
            </Menu>
        </div>
    )
}
