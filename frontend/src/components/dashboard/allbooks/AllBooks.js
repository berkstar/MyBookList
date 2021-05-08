import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import {Typography} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import ListRoundedIcon from '@material-ui/icons/ListRounded';
import IconButton from '@material-ui/core/IconButton';
import books from "./dummy-books";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "24px",
    },

    card: {
        display: "grid",
        gridTemplateRows: "1fr auto",
        gridGap: "8px",
        height: 400,
        minWidth: 500,
        backgroundSize: "cover"
    },

    margin: {
        margin: theme.spacing(1),
    },

    textField: {
        width: '25ch',
    },
}));



export default function AllBooks() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    const [value, setValue] = React.useState(2);

    return (
        <div>
            <Grid container justify="space-between">
                <h2 style={{ marginLeft:30 }}>ALL BOOKS</h2>
                <Button 
                style={{ marginRight:30 }}
                variant="contained"
                color="default"
                size="medium"
                onClick={() => { window.helloComponent.handleEditBookList() }}>
                    <b>Create Book List</b>
                </Button>
            </Grid>

            <div style={{ marginTop: 0, padding: 30 }}>
                <Grid container spacing={40} justify="center" className={classes.root}>
                    {books.map(book => (
                        <Grid item key={book.title}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {book.title}
                                            <IconButton>
                                                <ListRoundedIcon fontSize="medium"/>
                                            </IconButton>
                                        </Typography>
                                        <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                        />
                                        <Typography component="p">{book.content}</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button style={{ marginLeft: 10}}component={Link} to='/test' size="small" color="primary">
                                        Progress
                                    </Button>
                                    <ListItem button onClick={() => window.helloComponent.handleBookDetails()} key="AllBooks">
                                        <ListItemText primary="See Details"/>
                                    </ListItem>
                                </CardActions>
                                <LinearProgressWithLabel value={progress} />
                            </Card>
                            <br/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}