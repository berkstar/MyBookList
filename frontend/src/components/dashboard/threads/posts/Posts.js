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
import posts from './dummy-posts.json'
import { Col, Row } from 'react-bootstrap';
import Post from './Post';

function Posts(props) {
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

    return (
        <div style={{ marginTop: 0, padding: 10 }}>
            <h1>{props.threadTitle}</h1>
            <Post posts={posts}/>
        </div>
    );
}

export default Posts;