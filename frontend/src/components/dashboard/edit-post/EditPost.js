import React, { useState } from 'react';
import { Grid, TextField, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';
import StorageService from 'services/StorageService';
import Api from 'api/Api';


function EditPost(props) {
    const tid = props.thread.tid;
    const uid = StorageService.getUserId();
    const [name, setName] = useState("");
    const [text, setText] = useState("");

    const createPost = () => {
        const new_post = {
            tid: tid,
            uid: uid,
            name: name,
            text: text
        }
        Api.postPost(new_post);
        window.helloComponent.handlePosts(props.thread);
    }

    return (
        <div id='about' >
            <Grid style={{ marginLeft: 50, marginTop: 50}}>
                    <Grid>
                        <Typography component="h4" variant="h4" xs={10}>
                            Create New Post
                        </Typography>
                        <br/>
                        <h3>Post Name <EditIcon/></h3> 
                        <TextField
                            variant="filled"
                            label="Name"
                            onChange={(e)=>{setName(e.target.value)}}
                            required
                            >
                        </TextField> 
                        <br/>
                        <h3>Post Content <EditIcon/></h3> 
                        <TextField
                            variant="filled"
                            label="Name"
                            className="col-6"
                            onChange={(e)=>{setText(e.target.value)}}
                            required
                            >
                        </TextField>
                        <br/>
                        <br/>
                        <Button
                            variant="contained"
                            color="default"
                            size="medium"
                            onClick={() => { createPost() }}>
                            <b>CREATE</b>
                        </Button> 
                    </Grid>
            </Grid>
        </div>
    );
}

export default EditPost;