import React from 'react'
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import EditIcon from '@material-ui/icons/Edit';
import AccountCircle from "@material-ui/icons/AccountCircle";
import posts from "../threads/posts/dummy-posts";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

class OtherProfile extends React.Component {
    render() {
        return (
            <div id='about' >
                <Container >
                    <Typography component="h4" variant="h4" xs={10}>
                        Profile
                    </Typography>
                    <br/>
                    <Typography component="h6" variant="h6" xs={10}>
                        Mehmet Can
                    </Typography>
                    <br/>
                    <Typography component="h5" variant="h5" xs={10}>
                        E-mail
                    </Typography>
                    <Typography component="h6" variant="h6" xs={10}>
                        mehmetcan@mybooklist.com
                    </Typography>
                    <br/>

                    <Typography component="h5" variant="h5" xs={10}>
                        Biography
                    </Typography>
                    <Typography component="h6" variant="h6" xs={10}>
                        Challenges Won: 3 (Progress)
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do edolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi um dolore eu fugiat nurum.

                    </Typography>
                    <br/>
                    <Typography component="h5" variant="h5" xs={10}>
                        Posts
                    </Typography>
                    <br/>
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
                </Container>


            </div>
        );
    }
}
export default OtherProfile