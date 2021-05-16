import React, {useState} from 'react';
import {CardMedia, Container, Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import ProfImg from "static/img/dummy_profile_image.png"
import {Row, Col} from 'react-bootstrap';
import Post from '../posts/Post';
import Api from 'api/Api';
import {useHistory} from 'react-router';

function OtherProfile(props) {
    const user = props.user;
    const history = useHistory();
    const [posts, setPosts] = useState([]);

    const parsePosts = async () => {
        let response = await Api.getUserPosts(props.user.user_id);
        if (response.status !== 200) {
            history.push("/login");
        } else {
            setPosts(response.data);
        }
    }

    useState(parsePosts);

    return (
        <Card className="bg-secondary text-white my-4 mx-5" style={{maxHeight: '1900px'}} variant="outlined">
            <Container className="justify-content-center">
                <Row className="justify-content-center">
                    <CardMedia
                        className="my-2"
                        style={{maxWidth: '220px', maxHeight: '220px'}}
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