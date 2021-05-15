import React, { useState } from 'react';
import { Card, TextField, Button, CardMedia, Container, Grid} from "@material-ui/core";
import ProfImg from "static/img/dummy_profile_image.png"
import { Row, Col } from 'react-bootstrap';
import Post from '../posts/Post'
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import Api from 'api/Api';
import StorageService from 'services/StorageService';
import { useHistory } from "react-router-dom";

function OtherProfile() {
    const [edit, setEdit] = useState(0);
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const history = useHistory();
    var bio;

    const parseUser = async () => {
        let response = await Api.getUser(StorageService.getUserId());
        if( response.status !== 200 ) {
            history.push("/login");
        } 
        else {
            setUser(response.data);
        }
    }

    useState(parseUser);

    const parsePosts = async () => {
        let response = await Api.getUserPosts(StorageService.getUserId());
        if( response.status !== 200 ) {
            history.push("/login");
        } 
        else {
            setPosts(response.data);
        }
    }

    useState(parsePosts);

    const If = ({ condition }) => (condition ? <BiographyBox/> : <Biography/>);

    async function EditBio() {
        let response = await Api.setBio(bio);
        if( response.status !== 200 ) {
            alert("Error!");
        } 
        else {
            parseUser();
            setEdit(0);
        }
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
                            onChange={(e)=>{bio = e.target.value}}
                            >
                        </TextField>
                    </Card>
                </Col>
                <Col className="d-flex align-items-center">
                    <Button className="container-fluid col-6" onClick={() => {EditBio()}} color="primary">
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
            <h3>{user.biography}</h3>
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
                            <h3>{user.name}</h3>
                        </Row>
                        <Row className="my-4">
                            <h2>USERNAME: </h2>
                            <h3>{user.user_name}</h3>
                        </Row>
                        <Row className="my-4">
                            <h2>EMAIL: </h2>
                            <h3>{user.email}</h3>
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
                                <Post posts={posts} parsePosts={parsePosts}/>
                            </Grid>
                        </Row>
                    </Col>
                </Row>
                
            </Container>
        </Card>
    );
}
export default OtherProfile