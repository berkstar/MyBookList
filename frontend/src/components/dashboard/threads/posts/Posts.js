import React, { useState } from 'react';
import { Grid, TextField, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import posts from "./dummy-posts.json";
import SendIcon from '@material-ui/icons/Send';
import CloseIcon from '@material-ui/icons/Close';
import { Col, Row } from 'react-bootstrap';

function Posts(props) {
    const [like, setLike] = useState(0);
    const [comment, setComment] = useState(-1);

    const If = ({ condition }) => (condition ? <Comment/> : <br/>);

    const Comment = () => (
        <div className="my-2">
            <Card>
                <TextField
                    className="col-10 bg-info text-light"
                    variant="outlined"
                    placeholder="Comment"
                    >
                </TextField>
                <SendIcon className="m-auto" fontSize="large" style={{color:"#606060"}}/>
                <CloseIcon className="m-auto" fontSize="large"  style={{color:"#606060"}}/>
            </Card>
        </div>
    );

    return (
        <div style={{ marginTop: 0, padding: 10 }}>
            <h1>{props.threadTitle}</h1>
            <Grid>
                {posts.map((post, index) => (
                    <Grid item key={post.title}>
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
                                <Button onClick={() => {setLike(like + 1)}} size="small" color="primary">
                                    <ThumbUpIcon style={{color:"#606060"}}/>
                                    <Typography style={{color:"#606060"}} className="mx-1">{like}</Typography>
                                </Button>
                                <Button onClick={() => {setComment(index)}} size="small" color="primary">
                                    <CommentIcon className="mt-1" style={{color:"#606060"}}/>
                                </Button>
                            </CardActions>
                        </Card>
                        <If condition={comment === index}>
                        </If>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Posts;