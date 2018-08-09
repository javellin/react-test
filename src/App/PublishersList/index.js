import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TablePagination from "@material-ui/core/TablePagination";
import AddButton from "../../common/components/AddButton";
import Grid from "../../common/components/Grid";
import Filter from "../Filter";
import { actions as publisherActions } from "../../common/reducers/publisherReducer";
import { connect } from "react-redux";
import { compose } from "recompose";
import publisherService from "../../common/services/publisherService";

class PublishersList extends Component {
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

  dispatchFetchPublishers(page, size, searchText) {
    const { fetchPublishers } = this.props;

    fetchPublishers({
      page,
      size,
      searchText
    });
  }

  componentDidMount() {
    this.dispatchFetchPublishers(0, 10, undefined);
  }

  handleChange = name => event => {
    this.dispatchFetchPublishers(
      this.state.page,
      this.state.rowsPerPage,
      event.target.value
    );
  };

  handleChangePage = (event, page) => {
    const { publishers } = this.props;

    if (event) {
      this.dispatchFetchPublishers(page, publishers.size, undefined);
    }
  };

  handleChangeRowsPerPage = event => {
    const { publishers } = this.props;

    this.dispatchFetchPublishers(
      publishers.pageable.pageNumber,
      event.target.value,
      undefined
    );
  };

  onDeleteClick = async objToDelete => {
    const { publishers } = this.props;

    await publisherService.delete(objToDelete.id);
    this.dispatchFetchPublishers(
      publishers.pageable.pageNumber,
      publishers.size,
      undefined
    );
  };

  render() {
    const { publishers } = this.props;

    return (
      <div>
        <Filter
          label={"Filter by publisher's name"}
          handleChange={this.handleChange}
        />
        <AppBar position="static" color="default">
          <Toolbar>
            <AddButton btnText="Add Publisher" url="/publishers/add" />
          </Toolbar>
        </AppBar>
        <Grid
          schema={this.schema}
          data={publishers.content}
          onDeleteClick={this.onDeleteClick}
        />
        <TablePagination
          component="div"
          count={publishers.totalElements ? publishers.totalElements : 0}
          rowsPerPage={publishers.size ? publishers.size : 10}
          page={publishers.pageable ? publishers.pageable.pageNumber : 1}
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

const mapStateToProps = ({ publisher: { publishers } }) => {
  return { publishers };
};

const mapDispatchToProps = {
  fetchPublishers: publisherActions.fetchPublishers
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PublishersList);
