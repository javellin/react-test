import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Menu from "./Menu";
import FavoritesList from "./FavoritesList";
import BooksList from "./BooksList";
import AddBook from "./AddBook";
import AuthorsList from "./AuthorsList";
import PublishersList from "./PublishersList";
import AddAuthor from "./AddAuthor";
import AddPublisher from "./AddPublisher";

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Header />
        <div className={classes.root}>
          <Menu />
          <main className={classes.content}>
            <Switch>
              <Route exact={true} path="/" component={FavoritesList} />
              <Route exact={true} path="/favorites" component={FavoritesList} />
              <Route exact={true} path="/books" component={BooksList} />
              <Route exact={true} path="/books/add" component={AddBook} />
              <Route exact={true} path="/authors" component={AuthorsList} />
              <Route exact={true} path="/authors/add" component={AddAuthor} />
              <Route
                exact={true}
                path="/publishers/add"
                component={AddPublisher}
              />
              <Route
                exact={true}
                path="/publishers"
                component={PublishersList}
              />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0
  },
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  }
});

export default withStyles(styles)(App);
