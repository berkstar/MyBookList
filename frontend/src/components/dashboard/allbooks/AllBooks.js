import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import {TextField, Typography} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {Link, useHistory} from "react-router-dom";
import Rating from '@material-ui/lab/Rating';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import StorageService from 'services/StorageService';
import { useState } from 'react';
import Api from 'api/Api';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

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



export default function AllBooks() {
    const classes = useStyles();
    const userType = StorageService.getUserType();
    const [books, setBooks] = useState([]);
    const history = useHistory();

    function search(input) {
        parseBooks(input);
    }

    const parseBooks = async (input="") => {
        let response = await Api.searchBook(input);
        if( response.status !== 200 ) {
            history.push("/login");
        } 
        else {
            setBooks(response.data);
        }
    }

    useState(parseBooks);

    return (
        <div>
            <Grid container justify="space-between">
                <h2 className={ userType? "col-6":"col-8" } style={{ marginLeft:30 }}>ALL BOOKS</h2>
                { userType == 1 && <Button 
                    style={{ marginRight:30 }}
                    variant="contained"
                    color="default"
                    size="medium"
                    onClick={() => { window.helloComponent.handleEditBook() }}>
                    <b>Publish a book</b>
                </Button>}
                <Button
                style={{ marginRight:30 }}
                variant="contained"
                color="default"
                size="medium"
                onClick={() => { window.helloComponent.handleEditBookList() }}>
                    <b>Create Book List</b>
                </Button>
                <TextField
                    type="search"
                    variant="outlined"
                    style={{ marginRight:30, color:'#606060' }}
                    placeholder="Search for a book..."
                    onChange= {input => ( search(input.target.value) )}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                > </TextField>
            </Grid>

            <div style={{ marginTop: 0, padding: 30 }}>
                <Grid container spacing={10} className={classes.root}>
                    {books.map((book, index) => (
                        <Grid item key={index}>
                            <Card>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {book.title}
                                        </Typography>
                                        <Rating
                                        name="simple-controlled"
                                        value={book.rating}
                                        />
                                        <Typography component="p">{book.description}</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <ListItem button onClick={() => window.helloComponent.handleBookDetails(book)} key="AllBooks">
                                        <ListItemText primary="See Details"/>
                                    </ListItem>
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