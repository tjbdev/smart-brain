import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


export default function ProfileIcon({clickLogout}) {
    const [anchorEl, setAnchorEl] = React.useState(null); //A way of using state inside of a functional component.

    const handleClick = (event) =>{
        setAnchorEl(event.target);
    }

    const handleClose = () => {
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
            <Avatar className={classes.root} onClick={handleClick} src={require("./testimage.PNG")}/>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem onClick={clickLogout}>Log Out</MenuItem> 
            </Menu>
        </div>
    )
}
