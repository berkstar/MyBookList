import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import assignments from "./dummy-assignments";
import {Link} from "react-router-dom";

function Assignments() {
    return (
        <div style={{ marginTop: 0, padding: 10 }}>
            <h1>Assignments</h1>
            <Grid>
                {assignments.map(assignment => (
                    <Grid item key={assignment.title}>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {assignment.title}
                                    </Typography>
                                    <Typography component="p">{assignment.excerpt}</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button component={Link} to='/test' size="small" color="primary">
                                    Details
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Assignments;