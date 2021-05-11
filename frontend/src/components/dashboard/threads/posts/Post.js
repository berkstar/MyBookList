import React, { useState } from 'react';
import { Grid, TextField, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import SendIcon from '@material-ui/icons/Send';
import CloseIcon from '@material-ui/icons/Close';
import Api from 'api/Api';
import { useHistory } from "react-router-dom";
import { Col, Row } from 'react-bootstrap';

function Post(props) {
    const [like, setLike] = useState(0);
    const [comment, setComment] = useState(-1);
    const posts = props.posts
    // const [posts, setPosts] = useState([]);
    // const history = useHistory();

    // const parsePosts = async () => {
    //     let response = await Api.getPosts(props.threadTitle);
    //     if( response.status !== "200" ) {
    //         history.push("/login");
    //     } 
    //     else {
    //         setPosts(response.body);
    //     }
    // }

    // parsePosts();

    const If = ({ condition }) => (condition ? <CommentBox/> : <br/>);

    const CommentBox = () => (
        <Row className="my-2">
            <Col className="col-9">
                <Card >
                    <TextField
                        className="container-fluid bg-info text-light"
                        variant="outlined"
                        placeholder="Comment"
                        >
                    </TextField>
                </Card>
            </Col>
            <Col className="d-flex align-items-center">
                <Button className="container-fluid col-6" onClick={() => {setComment(-1)}} color="primary">
                    <SendIcon className="m-auto" fontSize="large" style={{color:"#000000"}}/>
                </Button>
                <Button className="container-fluid col-6" onClick={() => {setComment(-1)}} color="primary">
                    <CloseIcon className="m-auto" fontSize="large"  style={{color:"#000000"}}/>
                </Button>
            </Col>
        </Row>
    );

    function handleComment(pid, postIndex) {
        setComment(postIndex);
    }

    function handleLike(pid) {
        setLike(like + 1);
    }

    return (
            <Grid>
                {posts.map((post, index) => (
                    <Grid 
                        item
                        key={post.title}
                        >
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {post.title}
                                    </Typography>
                                    <Typography component="p">{post.excerpt}</Typography>
                                    <br/>
                                    <Typography component="p">
                                        {post.content}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button onClick={() => {handleLike(post.id)}} size="small" color="primary">
                                    <ThumbUpIcon style={{color:"#606060"}}/>
                                    <Typography style={{color:"#606060"}} className="mx-1">{like}</Typography>
                                </Button>
                                <Button onClick={() => {handleComment(post.id, index)}} size="small" color="primary">
                                    <CommentIcon className="mt-1" style={{color:"#606060"}}/>
                                </Button>
                            </CardActions>
                        </Card>
                        <If condition={comment === index}>
                        </If>
                    </Grid>
                ))}
            </Grid>
    );
}

export default Post;