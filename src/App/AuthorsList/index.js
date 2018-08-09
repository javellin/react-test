import React from "react";
import AddButton from "../../common/components/AddButton";
import Grid from "../../common/components/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import { actions as authorActions } from "../../common/reducers/authorReducer";
import { connect } from "react-redux";
import { compose } from "recompose";
import authorService from "../../common/services/authorService";
import Filter from "../Filter";

class AuthorsList extends React.PureComponent {
  schema = [
    {
      key: "name",
      label: "Name"
    }
  ];

  state = {
    searchText: "",
    count: 0,
    rowsPerPage: 10,
    page: 0
  };

  dispatchFetchAuthors(page, size, searchText) {
    const { fetchAuthors } = this.props;

    fetchAuthors({
      page,
      size,
      searchText
    });
  }

  componentDidMount() {
    this.dispatchFetchAuthors(0, 10, undefined);
  }

  handleChange = name => event => {
    this.dispatchFetchAuthors(
      this.state.page,
      this.state.rowsPerPage,
      event.target.value
    );
  };

  handleChangePage = (event, page) => {
    const { authors } = this.props;

    if (event) {
      this.dispatchFetchAuthors(page, authors.size, undefined);
    }
  };

  handleChangeRowsPerPage = event => {
    const { authors } = this.props;

    this.dispatchFetchAuthors(
      authors.pageable.pageNumber,
      event.target.value,
      undefined
    );
  };

  onDeleteClick = async objToDelete => {
    const { authors } = this.props;

    await authorService.delete(objToDelete.id);
    this.dispatchFetchAuthors(
      authors.pageable.pageNumber,
      authors.size,
      undefined
    );
  };

  render() {
    const { authors } = this.props;

    return (
      <div>
        <Paper>
          <Filter
            label={"Filter by author's name"}
            handleChange={this.handleChange}
          />
        </Paper>
        <AppBar position="static" color="default">
          <Toolbar>
            <AddButton btnText="Add Author" url="/authors/add" />
          </Toolbar>
        </AppBar>
        <Grid
          schema={this.schema}
          data={authors.content}
          onDeleteClick={this.onDeleteClick}
        />
        <TablePagination
          component="div"
          count={authors.totalElements ? authors.totalElements : 0}
          rowsPerPage={authors.size ? authors.size : 10}
          page={authors.pageable ? authors.pageable.pageNumber : 1}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ author: { authors } }) => {
  return { authors };
};

const mapDispatchToProps = {
  fetchAuthors: authorActions.fetchAuthors
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AuthorsList);
