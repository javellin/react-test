import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import authorService from "../../common/services/authorService";

class AddAuthor extends Component {
  state = {
    name: ""
  };

  handleChange = field => event => {
    this.setState({
      [field]: event.target.value
    });
  };

  saveAuthor = () => {
    authorService.save({ name: this.state.name });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form noValidate autoComplete="off" className={classes.container}>
          <TextField
            className={classes.textField}
            id="name"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange("name")}
            margin="normal"
          />
        </form>
        <Button variant="contained" color="primary" onClick={this.saveAuthor}>
          Save
        </Button>
      </div>
    );
  }
}

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

export default withStyles(styles)(AddAuthor);
