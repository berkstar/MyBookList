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



export default function BookDetails() {
    const [rating, setRating] = useState(2);
    const [progress, setProgress] = useState(0);
    const classes = useStyles();

    const If = ({ condition }) => (condition ? <ProgressBox/> : <br/>);

    function EditBio(text) {
        // send api edit request
    }

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
                    <h1 className="ml-4">The Hitchhiker's Guide to the Galaxy</h1>
                    <Button
                        variant="contained"
                        color="default"
                        size="medium"
                        className="mr-4"
                        onClick={() => { alert('clicked') }}>
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
                    Author: Douglas Adams
                    <br/>
                    Number of Pages: 334
                </Typography>
                <br/>
                <Typography component="h4" variant="h4" xs={10}>
                    Description
                </Typography>
                <br/>
                <Typography component="h6" variant="h6" xs={10}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue);
                    }}
                    className="mb-4"
                />
            </Grid>
        </Card>
    );
}