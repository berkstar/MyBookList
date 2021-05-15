import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import coverimg from "./cover.jpeg";
import {makeStyles} from "@material-ui/core/styles";
import { Row, Col } from 'react-bootstrap';
import { Card, TextField, Button, CardMedia, Container, Grid} from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
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



export default function EditBook() {
    const classes = useStyles();
    const[numOfPages, setNumOfPages] = useState(100);
    const[description, setDescription] = useState("Lorem ipsum sit amed...");
    const[bookName, setBookName] = useState("Lord of the Rings");
    const[genre, setGenre] = useState("Science Fiction");
    const[year, setYear] = useState("2000");
    const [user, setUser] = useState([]);
    const history = useHistory();
    const [edit, setEdit] = useState(0);
    var content = "";
    var contentIndex = 0;

    const If = ({ condition, index }) => {
        if(condition) {
            return <EditBox index={index}/>;    
        }
        else {
            return item(index);
        }
    }

    async function postBook() {
        let response = await Api.postBook(bookName, user.user_id, numOfPages, description, genre, year);
        if( response.status !== 200 ) {
            history.push("/login");
        } 
        else {
            window.helloComponent.handleBrowse();
        }
    }

    function omitChange() {
        if(contentIndex == 1) {
            setBookName(content);    
        }
        else if(contentIndex == 3) {
            setNumOfPages(content);
        }
        else if(contentIndex == 5) {
            setGenre(content);
        }
        else if(contentIndex == 6) {
            setYear(content);
        }
        else {
            setDescription(content);
        }
    }

    const EditBox = ({index}) => (
        <div>
            <Row className="my-2">
                <Col className="col-9">
                    <Card >
                        <TextField
                            className="container-fluid bg-light text-dark"
                            variant="outlined"
                            label="Content"
                            onChange = {(e)=>{
                                content=e.target.value;
                                contentIndex=index;    
                            }}
                            >
                        </TextField>
                    </Card>
                </Col>
                <Col className="d-flex align-items-center">
                    <Button className="container-fluid col-6" onClick={() => {omitChange(); setEdit(0);}} color="primary">
                        <CheckIcon className="m-auto" fontSize="large" style={{color:"#ffffff"}}/>
                    </Button>
                    <Button className="container-fluid col-6" onClick={() => {setEdit(0);}} color="primary">
                        <CloseIcon className="m-auto" fontSize="large"  style={{color:"#ffffff"}}/>
                    </Button>
                </Col>
            </Row>
        </div>
    );

    const item = ( index ) => {
        if(index == 1) {
            return bookName;    
        }
        else if(index == 3) {
            return numOfPages;
        }
        else if(index == 5) {
            return genre;
        }
        else if(index == 6) {
            return year;
        }
        else {
            return description;
        }
    }


    const parseAuthor = async () => {
        let response = await Api.getUser();
        if( response.status !== 200 ) {
            history.push("/login");
        } 
        else {
            setUser(response.data);
        }
    }

    useState(parseAuthor);

    return (
        <div>
            <Card className="bg-secondary text-light">
                <Grid style={{ marginLeft:30, marginRight:30 }}>
                    <Grid className="my-4" >
                        <h1 className="ml-4">Book Name: <If condition={edit==1} index={1}/>
                            <Button onClick={() => {setEdit(1)}} color="primary">
                                <EditIcon className="m-auto" fontSize="large"  style={{color:"#ffffff"}}/>
                            </Button>
                        </h1>
                    </Grid>
                    <CardMedia
                        className={classes.cover}
                        src={coverimg}
                        component='img'
                        title="Image"
                    />
                    <br/>
                    <Typography component="h4" variant="h4">
                        Author: {user.name}
                        <br/>
                        Number of Pages: <If condition={edit==3} index={3}/>
                        <Button onClick={() => {setEdit(3)}} color="primary">
                            <EditIcon className="m-auto" fontSize="large"  style={{color:"#ffffff"}}/>
                        </Button>
                        <br/>
                        Genre: <If condition={edit==5} index={5}/>
                        <Button onClick={() => {setEdit(5)}} color="primary">
                            <EditIcon className="m-auto" fontSize="large"  style={{color:"#ffffff"}}/>
                        </Button>
                        <br/>
                        Year: <If condition={edit==6} index={6}/>
                        <Button onClick={() => {setEdit(6)}} color="primary">
                            <EditIcon className="m-auto" fontSize="large"  style={{color:"#ffffff"}}/>
                        </Button>
                    </Typography>
                    <br/>
                    <Typography component="h4" variant="h4" xs={10}>
                        Description
                        <Button onClick={() => {setEdit(4)}} color="primary">
                            <EditIcon className="m-auto" fontSize="large"  style={{color:"#ffffff"}}/>
                        </Button>
                    </Typography>
                    <br/>
                    <Typography component="h6" variant="h6" xs={10}>
                        <If condition={edit==4} index={4}/>
                    </Typography>
                    <br/>
                </Grid>
            </Card>
            <Button 
                style={{ marginRight:30, marginTop:30 }}
                variant="contained"
                color="primary"
                size="medium"
                onClick={() => { postBook() }}>
                    <b>Publish</b>
            </Button>
        </div>
    );
}