import React, {useState} from 'react';
import {Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import Post from './Post';
import Api from 'api/Api';

function Posts(props) {
    const history = useHistory();
    const [posts, setPosts] = useState([]);

    const parsePosts = async () => {
        let response = await Api.getPosts(props.thread.tid);
        if (response.status !== 200) {
            history.push("/login");
        } else {
            setPosts(response.data);
        }
    }

    useState(parsePosts);

    return (
        <div style={{marginTop: 0, padding: 10}}>
            <Grid className="mb-4" container justify="space-between">
                <h1>{props.thread.name}</h1>
                <Button
                    style={{marginRight: 30}}
                    variant="contained"
                    color="default"
                    size="medium"
                    onClick={() => {
                        window.helloComponent.handleEditPost(props.thread)
                    }}>
                    <b>NEW POST</b>
                </Button>
            </Grid>
            <Post posts={posts} parsePosts={parsePosts}/>
        </div>
    );
}

export default Posts;