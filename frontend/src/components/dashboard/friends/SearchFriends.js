import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import {TextField, Typography} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import { IconButton } from '@material-ui/core';
import dummy_users from "./dummy-friends";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import AddIcon from '@material-ui/icons/Add';
import Button from "@material-ui/core/Button";
import Api from 'api/Api';
import StorageService from 'services/StorageService';

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
        backgroundSize: "cover"
    },

    actions: {
        display: "flex",
        justifyContent: "space-between"
    }
}));


export default function SearchFriends() {
    const classes = useStyles();
    const initial_state = dummy_users;
    const [users, setUsers] = useState(initial_state);

    // const [users, setUsers] = useState([]);
    // const history = useHistory();

    // const parseUsers = async () => {
    //     let response = await Api.getUsers();
    //     if( response.status !== 200 ) {
    //         history.push("/login");
    //     } 
    //     else {
    //         setUsers(response.data);
    //     }
    // }

    // parseUsers();

    // const addFriend = async () => {
    //     let response = await Api.getUsers();
    //     if( response.status !== 200 ) {
    //         history.push("/login");
    //     } 
    //     else {
    //         setUsers(response.data);
    //     }
    // }

    async function addFriend(friendId) {
        const newRequest = {
            uid: StorageService.getUserId(),
            fid: friendId
        };
        const response = await Api.addFriend(newRequest);
        if(response.status === 200) {
            alert("Friend request sent!");
        }
    }

    function search(input) {
        if(input === '') {
            setUsers(initial_state);
        }
        else {
            let corres_users = []
            for(var i = 0; i < initial_state.length; i++)
            {
                if(initial_state[i].title.toLowerCase().indexOf(input.toLowerCase()) !== -1)
                {
                    corres_users.push(initial_state[i]);
                }
            }
            setUsers(corres_users);
        }
    }

    return (
        <div className={classes.root}>
            <Grid container justify="space-between">
                <h2 className="my-auto" style={{ marginLeft:30 }}> SEARCH PEOPLE</h2>
                <TextField
                    type="search"
                    variant="outlined"
                    style={{ marginRight:30, color:'#606060' }}
                    placeholder="Search for a user..."
                    onChange= {input => ( search(input.target.value) )}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                > </TextField>
            </Grid>
            <br/>

            <div style={{ marginTop: 0, padding: 30 }}>
                <Grid container spacing={10} justify="center" className={classes.grid}>
                    {users.map((user, index)  => (
                        <Grid item key={index}>
                            <Card>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {user.title}
                                        </Typography>
                                        <Typography component="p">{user.content}</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Grid container justify="space-between">
                                        <Button onClick={() => window.helloComponent.handleOtherProfile()} size="large" color="primary">
                                            View Profile
                                        </Button>
                                        <IconButton  onClick={() => addFriend(user.id)} color="primary" style={{ float:"right" }}>
                                            <AddIcon/>
                                        </IconButton>
                                    </Grid>
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