import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import {TextField, Typography} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import { IconButton } from '@material-ui/core';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from '@material-ui/icons/Add';
import Button from "@material-ui/core/Button";
import Api from 'api/Api';

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
    const [users, setUsers] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const history = useHistory();

    const parseUsers = async () => {
        let response = await Api.getUsers();
        if( response.status !== 200 ) {
            history.push("/login");
        } 
        else {
            setUsers(response.data);
            setAllUsers(response.data);
        }
    }

    useState(parseUsers);

    async function addFriend(friendId) {
        const response = await Api.addFriend(friendId);
        if(response.status === 200) {
            alert("Friend added!");
            parseUsers();
        }
    }

    function search(input) {
        if(input === '') {
            setUsers(allUsers);
        }
        else {
            let corres_users = []
            for(var i = 0; i < allUsers.length; i++)
            {
                if(allUsers[i].name.toLowerCase().indexOf(input.toLowerCase()) !== -1)
                {
                    corres_users.push(allUsers[i]);
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
                                            {user.name}
                                        </Typography>
                                        <Typography component="p">{user.biography}</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Grid container justify="space-between">
                                        <Button onClick={() => window.helloComponent.handleOtherProfile(user)} size="large" color="primary">
                                            View Profile
                                        </Button>
                                        <IconButton  onClick={() => addFriend(user.user_id)} color="primary" style={{ float:"right" }}>
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