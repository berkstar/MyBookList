import React from 'react'
import {CardMedia, Container, Grid} from "@material-ui/core";
import posts from "../posts/dummy-posts";
import Card from "@material-ui/core/Card";
import ProfImg from "static/img/dummy_profile_image.png"
import { Row, Col } from 'react-bootstrap';
import Post from '../posts/Post'

function OtherProfile(props){
    const user = props.user;

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
                            <h3>jhn.doe@gmail.com</h3>
                        </Row>
                        <Row className="my-4">
                            <h2>BIOGRAPHY: </h2>
                            <h3>{user.biography}</h3>
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