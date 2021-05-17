import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import {Typography} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Api from 'api/Api';
import { useHistory } from 'react-router';
function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography className="mb-4" variant="body2" color="textSecondary">{`${Math.round(
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
        height: 345,
        maxWidth: 500,
        backgroundSize: "cover"
    },

    margin: {
        margin: theme.spacing(1),
    },

    textField: {
        width: '25ch',
    },
}));



export default function Mybooks() {
    const classes = useStyles();
    const [books, setBooks] = useState([]);
    const history = useHistory();

    function search(input) {
        parseBooks(input);
    }

    const parseBooks = async () => {
        let response = await Api.getMyBooks();
        if( response.status !== 200 ) {
            history.push("/login");
        } 
        else {
            setBooks(response.data);
        }
    }

    const rateBook = async (e, value, book_id) => {
        let response = await Api.rateBook(book_id, value);
        if( response.status === 200 ) {
            parseBooks();
        }
        else {
            alert("You cannot rate the same book!");
        }
    }

    useState(parseBooks);

    return (
        <div>
            <Grid>
                <h2 style={{ marginLeft:30 }}>MY BOOKS</h2>
            </Grid>

            <div style={{ marginTop: 0, padding: 30 }}>
                <Grid container spacing={10} className={classes.root}>
                    {books.map((book,index) => (
                        <Grid item key={index}>
                            <Card >
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {book.title}
                                        </Typography>
                                        <Rating
                                            name="read-only"
                                            value={book.rating}
                                            onChange={(e,value)=>{rateBook(e,value,book.book_id)}}
                                            readOnly
                                        />
                                        <Typography component="p">{book.description}</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button className="mx-2" size="medium" color="primary">
                                        Progress
                                    </Button>
                                    <ListItem button onClick={() => window.helloComponent.handleBookDetails(book)} key="AllBooks">
                                        <ListItemText primary="See Details"/>
                                    </ListItem>
                                </CardActions>
                                <LinearProgressWithLabel className="mb-4" value={book.progress} />
                            </Card>
                            <br/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}