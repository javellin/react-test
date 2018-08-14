import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core";
import { DebounceInput } from "react-debounce-input";

class Filter extends React.PureComponent {
  render() {
    const { classes, label, handleChange, searchText } = this.props;

    return (
      <Paper>
        <DebounceInput
          forceNotifyByEnter
          value={searchText}
          placeholder={label}
          debounceTimeout={300}
          className={classes.textField}
          onChange={handleChange()}
        />
      </Paper>
    );
  }
}

const styles = theme => ({
  textField: {
    height: 32,
    width: 1135,
    paddingLeft: "3em",
    paddingRight: 48,
    fontSize: ".9rem"
  }
});

export default withStyles(styles)(Filter);
