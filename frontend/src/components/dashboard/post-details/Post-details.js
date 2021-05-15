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

function PostDetails(props) {
    const [like, setLike] = useState(0);
    const [comment, setComment] = useState(-1);
    const [post, setPost] = useState([]);
    const history = useHistory();
    var text;

    const parsePost = async () => {
        let response = await Api.getPost(props.post.pid);
        if( response.status !== 200 ) {
            history.push("/login");
        } 
        else {
            setPost(response.data[0]);
        }
    }

    useState(parsePost);

    const If = ({ condition }) => (condition ? <CommentBox/> : <br/>);

    const CommentBox = () => (
        <Row className="my-2">
            <Col className="col-9">
                <Card >
                    <TextField
                        className="container-fluid bg-info text-light"
                        variant="outlined"
                        placeholder="Comment"
                        onChange={(e)=>{text = e.target.value}}
                        >
                    </TextField>
                </Card>
            </Col>
            <Col className="d-flex align-items-center">
                <Button className="container-fluid col-6" onClick={() => {sendComment()}} color="primary">
                    <SendIcon className="m-auto" fontSize="large" style={{color:"#000000"}}/>
                </Button>
                <Button className="container-fluid col-6" onClick={() => {setComment(-1)}} color="primary">
                    <CloseIcon className="m-auto" fontSize="large"  style={{color:"#000000"}}/>
                </Button>
            </Col>
        </Row>
    );

    async function sendComment() {
        let response = await Api.commentPost(text, post.pid);
        if( response.status !== 200 ) {
            alert("Error!");
        }
        else {
            setComment(-1);
            parsePost();
        }
    }

    async function handleLike() {
        let response = await Api.likePost(post.pid);
        if( response.status !== 200 ) {
            alert("Error!");
        }
        else {
            parsePost();
        }
    }

    return (
        <Grid>
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
                            <Typography component="p">{post.user_name}</Typography>
                            <br/>
                            <Typography component="p">
                                {post.text}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={() => {handleLike()}} size="small" color="primary">
                            <ThumbUpIcon style={{color:"#606060"}}/>
                            <Typography style={{color:"#606060"}} className="mx-1">{post.like_count}</Typography>
                        </Button>
                        <Button onClick={() => {setComment(1)}} size="small" color="primary">
                            <CommentIcon className="mt-1" style={{color:"#606060"}}/>
                        </Button>
                    </CardActions>
                </Card>
                <If condition={comment === 1}>
                </If>
            </Grid>
            {post.comments && post.comments.map((comment, index) => (
                    <Grid 
                        item
                        key={index}
                        className="mb-1"
                        >
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {comment.name}
                                    </Typography>
                                    <br/>
                                    <Typography component="p">
                                        {comment.text}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
        </Grid>
    );
}

export default PostDetails;