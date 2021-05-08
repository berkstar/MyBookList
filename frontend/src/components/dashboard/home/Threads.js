import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import courses from "./dummy-threads";
import {Link} from "react-router-dom";

function Threads() {
    return (
        <div>
            <Grid container>
                {courses.map(course => (
                    <Grid item key={course.title} className="col-sm-4">
                        <Card className="m-2">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={course.image}
                                />
                                <CardContent style={{ height: 150}}>
                                    <Typography className="mb-3" variant="h6">
                                        {course.title}
                                    </Typography>
                                    <Typography>{course.content}</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions >
                                <Button size="small" color="primary">
                                    Like
                                </Button>
                                <Button component={Link} to='/test' size="small" color="primary" marginbottom="3">
                                    Learn More
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



export default Threads;