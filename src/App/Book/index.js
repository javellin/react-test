import React from "react";
import { withStyles } from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

class Book extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={this.props.image}
          title={this.props.title}
        />
      </Card>
    );
  }
}

const styles = theme => ({
  card: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    width: 220,
    marginTop: 10,
    marginRight: 15,
    height: 360,  
  },
  media: {
    paddingTop: "62.5%",
    height: 222,
    width: 225    
  }
});

export default withStyles(styles)(Book);
