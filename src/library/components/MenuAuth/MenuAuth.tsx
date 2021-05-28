import React from 'react';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {  withStyles } from "@material-ui/core";

interface StandardComponentProps {
    anchorEl: any,
    handleClose: any,
}

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5'
    },
})((props: MenuProps) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        fontFamily: '\'Mulish\', sans-serif',
        fontWeight: 400,
        '&:focus': {
            backgroundColor: '#FFED00',
        },
    },
}))(MenuItem);

const MenuAuth = ({anchorEl, handleClose} : StandardComponentProps) => {

    return(
        <StyledMenu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <StyledMenuItem
                onClick={handleClose}
            >
                Профиль
            </StyledMenuItem>
            <StyledMenuItem
                onClick={handleClose}
            >
               Выход
            </StyledMenuItem>
        </StyledMenu>)
}

export default MenuAuth;