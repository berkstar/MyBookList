import React, {useState} from 'react';
import {Grid, TextField, Typography} from "@material-ui/core";
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
import {useHistory} from "react-router-dom";
import {Col, Row} from 'react-bootstrap';

function Post(props) {
    const [comment, setComment] = useState(-1);
    const [commentId, setCommentId] = useState(-1);

    const [liked, updateLiked] = useState(false);


    var text;
    const posts = props.posts;
    const history = useHistory();

    const If = ({condition}) => (condition ? <CommentBox/> : <br/>);

    const CommentBox = () => (
        <Row className="my-2">
            <Col className="col-9">
                <Card>
                    <TextField
                        className="container-fluid bg-info text-light"
                        variant="outlined"
                        placeholder="Comment"
                        onChange={(e) => {
                            text = e.target.value
                        }}
                    >
                    </TextField>
                </Card>
            </Col>
            <Col className="d-flex align-items-center">
                <Button className="container-fluid col-6" onClick={() => {
                    sendComment()
                }} color="primary">
                    <SendIcon className="m-auto" fontSize="large" style={{color: "#000000"}}/>
                </Button>
                <Button className="container-fluid col-6" onClick={() => {
                    setComment(-1)
                }} color="primary">
                    <CloseIcon className="m-auto" fontSize="large" style={{color: "#000000"}}/>
                </Button>
            </Col>
        </Row>
    );

    function handleComment(pid, postIndex) {
        setComment(postIndex);
        setCommentId(pid);
    }

    async function sendComment() {
        let response = await Api.commentPost(text, commentId);
        if (response.status !== 200) {
            alert("Error!");
        } else {
            setComment(-1);
            props.parsePosts();
        }
    }

    async function handleLike(pid) {
        if (liked) alert("You have already liked this post!");
        else {
            let response = await Api.likePost(pid);
            if (response.status !== 200) {
                alert("Error!");
            } else {
                updateLiked(true);
                props.parsePosts();
            }
        }
    }

    return (
        <Grid>
            {posts.map((post, index) => (
                <Grid
                    item
                    key={post.title}
                >
                    <Card>
                        <CardActionArea onClick={() => {
                            window.helloComponent.handlePostDetails(post)
                        }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {post.title}
                                </Typography>
                                <Typography variant="body1" component="p">{post.user_name}</Typography>
                                <br/>
                                <Typography component="p">
                                    {post.text}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button onClick={() => {
                                handleLike(post.pid)
                            }} size="small" color="primary">
                                <ThumbUpIcon style={{color: "#606060"}}/>
                                <Typography style={{color: "#606060"}} className="mx-1">{post.like_count}</Typography>
                            </Button>
                            <Button onClick={() => {
                                handleComment(post.pid, index)
                            }} size="small" color="primary">
                                <CommentIcon className="mt-1" style={{color: "#606060"}}/>
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