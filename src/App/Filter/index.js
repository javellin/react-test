import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core";

class Filter extends React.PureComponent {
  render() {
    const { classes, label, handleChange, searchText } = this.props;

    return (
      <Paper>
        <TextField
          id="filter"
          label={label}
          className={classes.textField}
          value={searchText}
          onChange={handleChange()}
          margin="normal"
        />
      </Paper>
    );
  }
}

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

export default withStyles(styles)(Filter);
