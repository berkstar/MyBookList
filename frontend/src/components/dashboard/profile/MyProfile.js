import React, { useState } from 'react';
import { Card, TextField, Button, CardMedia, Container, Grid} from "@material-ui/core";
import posts from "../threads/posts/dummy-posts";
import ProfImg from "static/img/dummy_profile_image.png"
import { Row, Col } from 'react-bootstrap';
import Post from '../threads/posts/Post'
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';

function OtherProfile() {
    const [edit, setEdit] = useState(0);

    const If = ({ condition }) => (condition ? <BiographyBox/> : <Biography/>);

    function EditBio(text) {
        // send api edit request
    }

    const BiographyBox = () => (
        <div>
            <h2>BIOGRAPHY: </h2>
            <Row className="my-2">
                <Col className="col-9">
                    <Card >
                        <TextField
                            className="container-fluid bg-light text-dark"
                            variant="outlined"
                            placeholder="Biography"
                            >
                        </TextField>
                    </Card>
                </Col>
                <Col className="d-flex align-items-center">
                    <Button className="container-fluid col-6" onClick={() => {setEdit(0)}} color="primary">
                        <CheckIcon className="m-auto" fontSize="large" style={{color:"#ffffff"}}/>
                    </Button>
                    <Button className="container-fluid col-6" onClick={() => {setEdit(0)}} color="primary">
                        <CloseIcon className="m-auto" fontSize="large"  style={{color:"#ffffff"}}/>
                    </Button>
                </Col>
            </Row>
        </div>
    );

    const Biography = () => (
        <div>
            <h2>BIOGRAPHY: </h2>
            <Button onClick={() => {setEdit(1)}} color="primary">
                <EditIcon className="m-auto" fontSize="large"  style={{color:"#ffffff"}}/>
            </Button>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
        </div>
    );
    
    return (
        <Card className="bg-secondary text-white my-4 mx-5" style={{ maxHeight:'1900px'}} variant="outlined" >
            <Container className="justify-content-center">
                <Row className="justify-content-center">
                    <CardMedia 
                        className="my-2"
                        style={{ maxWidth:'220px', maxHeight:'220px'}}
                        src={ProfImg}
                        component='img'
                        >
                    </CardMedia>
                </Row>
                <Row>
                    <Col xs={6} className="justify-content-center  text-center">
                        <Row className="my-5">
                            <h1>INFORMATION</h1>
                        </Row>
                        <Row className="mb-4">
                            <h2>NAME: </h2>
                            <h3>John Doe</h3>
                        </Row>
                        <Row className="my-4">
                            <h2>USERNAME: </h2>
                            <h3>jhndoe8776</h3>
                        </Row>
                        <Row className="my-4">
                            <h2>EMAIL: </h2>
                            <h3>jhn.doe@gmail.com</h3>
                        </Row>
                        <Row className="my-4">
                            <If condition={edit}></If>
                        </Row>
                    </Col>
                    <Col xs={6} className="justify-content-center">
                        <Row className="my-5 text-center">
                            <h1>TOP POSTS</h1>
                        </Row>
                        <Row className="justify-content-center">
                            <Grid>
                                <Post posts={posts}/>
                            </Grid>
                        </Row>
                    </Col>
                </Row>
                
            </Container>
        </Card>
    );
}
export default OtherProfile