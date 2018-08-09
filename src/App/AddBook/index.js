import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

class AddBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      pageNumbers: ""
    };
  }

  handleChange = field => event => {
    this.setState({
      [field]: event.target.value
    });
  };

  createBookObject = () => {
    return {
      title: this.state.title,
      description: this.state.description,
      pageNumbers: this.state.pageNumbers,
      isFavorite: false
    };
  };

  saveBook = async () => {
    let bookToSave = this.createBookObject();
    await axios.post("/api/books", bookToSave);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form noValidate autoComplete="off" className={classes.container}>
          <TextField
            className={classes.textField}
            id="title"
            label="Title"
            value={this.state.title}
            onChange={this.handleChange("title")}
            margin="normal"
          />
          <TextField
            className={classes.textField}
            id="pageNumbers"
            type="number"
            label="Page Numbers"
            value={this.state.pageNumbers}
            onChange={this.handleChange("pageNumbers")}
            margin="normal"
          />
          <TextField
            id="multiline-flexible"
            label="Description"
            multiline
            rowsMax="4"
            value={this.state.description}
            onChange={this.handleChange("description")}
            className={classes.textField}
            margin="normal"
          />
        </form>
        <Button variant="contained" color="primary" onClick={this.saveBook}>
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

export default withStyles(styles)(AddBook);
