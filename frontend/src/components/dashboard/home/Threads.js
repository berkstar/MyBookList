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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "24px",
    },

    media: {
      height: 140,
    },

    card: {
        display: "grid",
        gridTemplateRows: "1fr auto",
        gridGap: "8px",
        height: 345,
        minWidth: 500,
        backgroundSize: "cover"
    },
    
    actions: {
        display: "flex",
        justifyContent: "space-between"
    }
  });

function Threads() {
    const classes = useStyles();

    return (
        <div style={{ marginTop: 20, padding: 30 }}>
            <Grid container spacing={10} justify="center" className={classes.root}>
                {courses.map(course => (
                    <Grid item key={course.title}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    component="img"
                                    height="140"
                                    image={course.image}
                                />
                                <CardContent style={{ height: 150 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {course.title}
                                    </Typography>
                                    <Typography>{course.content}</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.actions}>
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