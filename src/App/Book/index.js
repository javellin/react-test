import React from 'react'
import { withStyles } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';

class Book extends React.PureComponent {
    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardHeader avatar={<Avatar aria-label="Recipe" className={classes.avatar}> R </Avatar>}
                    title={this.props.title}
                    subheader={this.props.pageNumbers}
                />
                <CardMedia
                    className={classes.media}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZpKthfkv96H0qWy-K8a9nqx3AL3yTJLfhYi948XiLZrRj3qo0A"
                    title={this.props.title}
                />
                <CardContent>
                    <Typography component="p">
                        {this.props.description}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: blue[500],
    },
});

export default withStyles(styles)(Book);