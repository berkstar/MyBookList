import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import Slider from '@material-ui/core/Slider';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import {TextField, Typography} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import Rating from '@material-ui/lab/Rating';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import StorageService from 'services/StorageService';
import {useState} from 'react';
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
    var input;
    const [books, setBooks] = useState([]);
    const [value, setValue] = useState([1900, 2021]);
    const history = useHistory();

    function search() {
        parseBooks(input, value[0], value[1]);
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const parseBooks = async (input = "", date_b = "", date_e = "") => {
        let response = await Api.searchBook(input, date_b, date_e);
        if (response.status !== 200) {
            history.push("/login");
        } else {
            setBooks(response.data);
        }
    }

    useState(parseBooks);

    return (
        <div>
            <Grid container justify="space-between">
                <h2 className={userType ? "col-8" : "col-10"} style={{marginLeft: 30}}>ALL BOOKS</h2>
                {userType == 1 && <Button
                    style={{marginRight: 30}}
                    variant="contained"
                    color="default"
                    size="medium"
                    onClick={() => {
                        window.helloComponent.handleEditBook()
                    }}>
                    <b>Publish a book</b>
                </Button>}
                <Button
                    style={{marginRight: 30}}
                    variant="contained"
                    color="default"
                    size="medium"
                    onClick={() => {
                        window.helloComponent.handleEditBookList()
                    }}>
                    <b>Create Book List</b>
                </Button>

                <Card className="m-5 container-fluid justify-content-center">
                    <h3 className="mx-5 mt-5">Book name</h3>
                    <div className="d-flex justify-content-center">
                        <TextField className="mx-5 container-fluid"
                                   type="search"
                                   variant="outlined"
                                   style={{marginTop: 20, marginRight: 30, color: '#606060'}}
                                   placeholder="Search by book name..."
                                   onChange={e => (input = e.target.value)}
                                   InputProps={{
                                       endAdornment: (
                                           <InputAdornment position="end">
                                               <SearchIcon/>
                                           </InputAdornment>
                                       ),
                                   }}
                        >
                        </TextField>
                    </div>
                    <h3 className="mx-5 mt-5">Year range</h3>
                    <Slider
                        style={{maxWidth: "500px"}}
                        className="mx-5 mb-3"
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        min={1900}
                        max={2021}
                    />
                    <div className="mb-5 d-flex justify-content-center">
                        <Button
                            variant="contained"
                            color="default"
                            size="medium"
                            onClick={() => {
                                search()
                            }}>
                            <b>Apply Filters</b>
                        </Button>
                    </div>
                </Card>
            </Grid>

            <div style={{marginTop: 0, padding: 30}}>
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
                                            name="read-only"
                                            value={book.rating}
                                            readOnly
                                        />
                                        <Typography component="p">{book.description}</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <ListItem button
                                              onClick={() => window.helloComponent.handleBookDetails(book)}
                                              key="AllBooks">
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