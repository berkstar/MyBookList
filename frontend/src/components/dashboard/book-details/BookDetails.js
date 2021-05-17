import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import coverimg from "./cover.jpeg";
import {makeStyles} from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import { Card, TextField, Button, CardMedia, Container, Grid} from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Api from 'api/Api';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        borderRadius: 0,
        background: '#1565c0',
        width: '100%',
        height: '50%',
        marginTop: '1%',
        marginbottom: '1%'
    },
    cover: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '15%',
        padding: '20px',
    }
}));



export default function BookDetails(props) {
    const [progress, setProgress] = useState(0);
    const [book, setBook] = useState(props.book);
    const classes = useStyles();
    var page_num;

    const postProgress = async () => {
        let response = await Api.postProgress(book.book_id, page_num);
        if( response.status === 200 ) {
            parseBook();
        }
        else {
            alert("Progress not added! (Server Error!)");
        }
        setProgress(0);
    }

    const rateBook = async (e, value, book_id) => {
        let response = await Api.rateBook(book_id, value);
        if( response.status === 200 ) {
            parseBook();
        }
        else {
            alert("You cannot rate the same book!");
        }
    }

    const parseBook = async (input = book.book_id) => {
        let response = await Api.getMyBooks();
        if (response.status === 200) {
            let books = response.data;
            books.map((book)=>{ if(book.book_id == input) {setBook(book)}});
        } else {
            alert("Error parsing book!");
        }
    }

    const If = ({ condition }) => (condition ? <ProgressBox/> : <br/>);

    const ProgressBox = () => (
        <div>
            <Row className="my-2">
                <Col className="col-9">
                    <Card className="bg-secondary text-light" variant="outlined">
                        <h4>Page Number:</h4>
                        <TextField
                            className="col-6 bg-light text-dark"
                            style={{maxWidth:"220px"}}
                            variant="outlined"
                            placeholder="Example: 121"
                            onChange={(e)=> {page_num = e.target.value}}
                            >
                        </TextField>
                    </Card>
                </Col>
                <Col className="d-flex align-items-center">
                    <Button className="container-fluid col-6" onClick={() => {postProgress()}} color="primary">
                        <CheckIcon className="m-auto" fontSize="large" style={{color:"#ffffff"}}/>
                    </Button>
                    <Button className="container-fluid col-6" onClick={() => {setProgress(0)}} color="primary">
                        <CloseIcon className="m-auto" fontSize="large"  style={{color:"#ffffff"}}/>
                    </Button>
                </Col>
            </Row>
            <br/>
        </div>
    );

    return (
        <Card className="bg-secondary text-light">
            <Grid style={{ marginLeft:30, marginRight:30 }}>
                <Grid className="my-4" container justify="space-between">
                    <h1 className="ml-4">{book.title}</h1>
                    <Button
                        variant="contained"
                        color="default"
                        size="medium"
                        className="mr-4"
                        onClick={() => { alert("clicked") }}>
                        <b>Recommend to a friend</b>
                    </Button>
                </Grid>
                <CardMedia
                    className={classes.cover}
                    src={coverimg}
                    component='img'
                    title="Image"
                />
                <br/>
                <Typography component="h4" variant="h4">
                    Author: {book.author_name}
                    <br/>
                    Number of Pages: {book.pages}
                    <br/>
                    Genre: {book.genre}
                    <br/>
                    Year: {book.year}
                </Typography>
                <br/>
                <Typography component="h4" variant="h4" xs={10}>
                    Description
                </Typography>
                <br/>
                <Typography component="h6" variant="h6" xs={10}>
                    "{book.description}"
                </Typography>
                <br/>
                    <Row className="align-items-center">
                    <Typography className="col-1" component="h4" variant="h4" xs={10}>
                        Progress
                    </Typography>
                    <IconButton className="col-1" onClick={() => {setProgress(1)}}>
                            <AddIcon fontSize="large" style={{color:"#ffffff"}}/>
                    </IconButton>
                </Row>
                <If condition={progress}/>
                { book.progress && 
                <div>
                    <Typography component="h6" variant="h6" xs={10}>
                        Date: {book.date} - Page Number: {book.page_read}<br/>
                    </Typography> 
                    <br/>
                </div>
                }
                <Typography component="h4" variant="h4" xs={10}>
                    Rating
                </Typography>
                <br/>
                <Rating
                    name="simple-controlled"
                    value={book.rating}
                    className="mb-4"
                    onChange={(e,value)=>{rateBook(e,value,book.book_id)}}
                />
            </Grid>
        </Card>
    );
}