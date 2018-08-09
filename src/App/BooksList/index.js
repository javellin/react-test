import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import AddButton from "../../common/components/AddButton";
import Grid from "../../common/components/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

class BooksList extends Component {
  state = {
    books: []
  };

  schema = [
    { key: "title", label: "Title" },
    { key: "pageNumbers", label: "Page Numbers" }
  ];

  async componentDidMount() {
    this.setState({
      books: (await axios.get("/api/books")).data
    });
  }

  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <AddButton btnText="Add Book" url="/books/add" />
          </Toolbar>
        </AppBar>
        <Grid schema={this.schema} data={this.state.books} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

export default connect(mapStateToProps)(BooksList);
