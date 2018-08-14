import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

class Header extends Component {
  render() {
    const { classes, handleOnClick } = this.props;
    return (
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            onClick={handleOnClick}
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Book Shelf
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  flex: {
    flexGrow: 1
  }
};

export default withStyles(styles)(Header);
