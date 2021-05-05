import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import posts from "./dummy-posts";
import {Link} from "react-router-dom";

function Posts() {
    return (
        <div style={{ marginTop: 0, padding: 10 }}>
            <h1>Posts</h1>
            <Grid>
                {posts.map(post => (
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
                                <Button component={Link} to='/test' size="small" color="primary">
                                    Like
                                </Button>
                                <Button component={Link} to='/test' size="small" color="primary">
                                    Comment
                                </Button>
                            </CardActions>
                        </Card>
                        <br/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Posts;