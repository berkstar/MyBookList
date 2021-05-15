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
import Popup from 'reactjs-popup';
import EditIcon from '@material-ui/icons/Edit';

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
    const [rating, setRating] = useState(2);
    const [progress, setProgress] = useState(0);
    const classes = useStyles();
    const book = props.book;

    function recommend() {

    }

    const If = ({ condition }) => (condition ? <ProgressBox/> : <br/>);

    const ProgressBox = () => (
        <div>
            <h3>New Progress: </h3>
            <Row className="my-2">
                <Col className="col-9">
                    <Card className="bg-secondary text-light" variant="outlined">
                        <Row>
                            <h4>Date:</h4>
                            <TextField
                                className="bg-light text-dark"
                                style={{maxWidth:"220px"}}
                                variant="outlined"
                                placeholder="Example: 11.01.2021"
                                >
                            </TextField>
                        </Row>
                        <h4>Page Number:</h4>
                        <TextField
                            className="col-6 bg-light text-dark"
                            style={{maxWidth:"220px"}}
                            variant="outlined"
                            placeholder="Example: 121"
                            >
                        </TextField>
                    </Card>
                </Col>
                <Col className="d-flex align-items-center">
                    <Button className="container-fluid col-6" onClick={() => {setProgress(0)}} color="primary">
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
                <br/>
                <If condition={progress}/>
                <Typography component="h6" variant="h6" xs={10}>
                    Date 02.04.2021 - Page Number: 241<br/>
                    Date 01.01.2021 - Page Number: 211<br/>
                    Date 23.12.2020 - Page Number: 177<br/>
                    Date 27.10.2020 - Page Number: 123
                </Typography>
                <br/>
                <Typography component="h4" variant="h4" xs={10}>
                    Rating
                </Typography>
                <br/>
                <Rating
                    name="simple-controlled"
                    value={book.rating}
                    className="mb-4"
                />
            </Grid>
        </Card>
    );
}