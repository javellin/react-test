import React from "react";
import Book from "../Book";
import { actions as bookActions } from "../../common/reducers/bookReducer";
import { compose } from "recompose";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";

import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";

class FavoritesList extends React.PureComponent {
  state = {
    favoriteBooks: [],
    name: ""
  };

  handleChange = name => event => {
    this.setState({
      name: event.target.value
    });
  };

  async componentDidMount() {
    const { fetchFavoriteBooks } = this.props;

    fetchFavoriteBooks();
  }

  static getDerivedStateFromProps({ favoriteBooks }, state) {
    const { name } = state;
    if (name) {
      return {
        favoriteBooks: favoriteBooks.filter(value => value.title.includes(name))
      };
    }
    return { favoriteBooks };
  }

  render() {
    const { favoriteBooks } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Input
          id="input-with-icon-adornment"
          placeholder="Filter by book's title"
          value={this.state.name}
          className={classes.textField}
          onChange={this.handleChange("name")}
          startAdornment={
            <InputAdornment position="start" className={classes.adornment}>
              <Search className={classes.search} />
            </InputAdornment>
          }
        />
        {favoriteBooks.length > 0 && (
          <div className={classes.root}>
            <GridList cellHeight={365} cols={5} component="nav" className={classes.gridList}>
              {favoriteBooks.map((book, index) => {
                return (
                  <GridListTile key={index}>
                    <Book
                      title={book.title}
                      description={book.description}
                      pageNumbers={book.pageNumbers}
                      image={book.image}
                    />
                  </GridListTile>
                );
              })}
            </GridList>
          </div>
        )}
      </div>
    );
  }
}

const flexContainer = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "100%",
    height: "100%"
  },
  adornment: {
    marginTop: 9
  },
  search: {
    color: "grey"
  },
  textField: {
    width: "100%",
    height: 50
  }
});

const mapStateToProps = ({ book: { favoriteBooks } }) => ({
  favoriteBooks
});

const mapDispatchToProps = {
  updateFavoriteBooks: bookActions.updateFavoriteBooks,
  fetchFavoriteBooks: bookActions.fetchFavoriteBooks
};

export default compose(
  withStyles(flexContainer),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(FavoritesList);
