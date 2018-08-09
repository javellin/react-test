import React from "react";
import Book from "../Book";
import { actions as bookActions } from "../../common/reducers/bookReducer";
import { compose } from "recompose";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

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
        <Paper>
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange("name")}
            margin="normal"
          />
        </Paper>
        {favoriteBooks.length > 0 && (
          <List component="nav" className={classes.container}>
            {favoriteBooks.map((book, index) => {
              return (
                <ListItem key={index}>
                  <Book
                    title={book.title}
                    description={book.description}
                    pageNumbers={book.pageNumbers}
                  />
                </ListItem>
              );
            })}
          </List>
        )}
      </div>
    );
  }
}

const flexContainer = theme => ({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 0,
    float: "left"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
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
