import React from 'react'
import {CardMedia, Container, Grid} from "@material-ui/core";
import posts from "../threads/posts/dummy-posts";
import Card from "@material-ui/core/Card";
import ProfImg from "static/img/dummy_profile_image.png"
import { Row, Col } from 'react-bootstrap';
import Post from '../threads/posts/Post'

class OtherProfile extends React.Component {
    render() {
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
                                <h2>BIOGRAPHY: </h2>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
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
}
export default OtherProfile