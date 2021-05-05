import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import {Typography} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

// import AddButton from '../createform/AddButton'
import friends from "./dummy-friends";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        flexGrow: 1
    },

    margin: {
        margin: theme.spacing(1),
    },

    textField: {
        width: '25ch',
    },

    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "24px",
    },

    media: {
      height: 140,
    },

    card: {
        display: "grid",
        gridTemplateRows: "1fr auto",
        gridGap: "8px",
        height: 345,
        minWidth: 500,
        backgroundSize: "cover"
    },
    
    actions: {
        display: "flex",
        justifyContent: "space-between"
    }
}));


export default function Friends() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    return (
        <div className={classes.root}>
            <Grid>
                <h2 style={{ marginLeft:30 }}>FRIENDS - </h2>
            </Grid>
                <Button onClick={() => window.helloComponent.handleSearchFriends()} size="medium" color="primary" style={{marginLeft: 10, float: 'right'}}>
                    Add Friend
                </Button>

            <div style={{ marginTop: 0, padding: 30 }}>
                <Grid container spacing={40} justify="center" className={classes.grid}>
                    {friends.map(friend  => (
                        <Grid item key={friend.title}>
                            <Card>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {friend.title}
                                        </Typography>
                                        <Typography component="p">{friend.content}</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button component={Link} to='/test' size="small" color="primary">
                                        View
                                    </Button>
                                </CardActions>
                            </Card>
                            <br/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}