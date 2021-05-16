import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Api from 'api/Api';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import {Typography} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Row } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        flexGrow: 1
    },

    margin: {
        margin: theme.spacing(1),
    },

    textField: {
        width: '25ch',
    },

    grid: {
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
        maxWidth: 500,
        backgroundSize: "cover"
    },
    
    actions: {
        display: "flex",
        justifyContent: "space-between"
    }
}));


export default function Friends() {
    const classes = useStyles();
    const [friends, setFriends] = useState([]);
    const history = useHistory();

    const parseFriends = async () => {
        let response = await Api.getFriends();
        if( response.status !== 200 ) {
            history.push("/login");
        } 
        else {
            setFriends(response.data);
        }
    }

    useState(parseFriends);

    return (
        <div className={classes.root}>
            <Row className="container-fluid row-cols-auto">
                <h2 className="col my-auto" style={{ marginLeft:10 }}>FRIENDS - </h2>
                <Button className="col my-auto" onClick={() => window.helloComponent.handleSearchFriends()} size="medium" color="primary" style={{marginLeft: 10, float: 'right'}}>
                    Add Friend
                </Button>
            </Row>
                
            <div style={{ marginTop: 0, padding: 30 }}>
                <Grid container spacing={10} justify="center" className={classes.grid}>
                    {friends.map((friend,index)  => (
                        <Grid item key={index}>
                            <Card>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {friend.name}
                                        </Typography>
                                        <Typography component="p">{friend.biography}</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button onClick={() => window.helloComponent.handleOtherProfile(friend)} size="large" color="primary">
                                        View Profile
                                    </Button>
                                </CardActions>
                            </Card>
                            <br/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}