import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

class AddButton extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Link to={this.props.url} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            <AddIcon /> {this.props.btnText}
          </Button>
        </Link>
      </div>
    );
  }
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

export default withStyles(styles)(AddButton);
