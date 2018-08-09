import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="title" color="inherit">
                        Book Shelf
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;