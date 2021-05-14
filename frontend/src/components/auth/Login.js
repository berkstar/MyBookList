import React, { useState, useEffect } from 'react';
import "./auth.css";
import {
    Button,
    TextField,
    Grid,
    Paper,
    Typography,
    Link,
} from "@material-ui/core";
import StorageService from "../../services/StorageService";
import Api from "api/Api"
import NavigationBar from './NavigationBar';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: "", password: "", authflag: 1 };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ username: event.state.username, password: event.state.password });
    }

    async handleSubmit(event) {
        event.preventDefault();
        let userData = {
            username: this.state.username,
            password: this.state.password
        }
        const response = await Api.login(userData);
        if(response.status === 200) {
            StorageService.setToken(response.data.token);
            StorageService.setUserId(response.data.user_id);
            StorageService.setUserType(response.data.type);
            Api.setAuthToken();
            this.props.history.push("/dashboard");
        }
    }
    
    render() {
        return (
            <div>
                <NavigationBar/>
                <Grid container spacing={0} justify="center" direction="row">
                    <Grid item>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            spacing={2}
                            className="login-form"
                        >
                            <Paper
                                variant="elevation"
                                elevation={2}
                                className="login-background"
                            >
                                <Grid item>
                                    <Typography component="h1" variant="h5">
                                        Sign in
                                    </Typography>
                                </Grid>
                                <br/>
                                <Grid item>
                                    <form onSubmit={this.handleSubmit}>
                                        <Grid container direction="column" spacing={2}>
                                            <Grid item>
                                                <TextField
                                                    type="username"
                                                    placeholder="Username"
                                                    fullWidth
                                                    name="username"
                                                    variant="outlined"
                                                    value={this.state.username}
                                                    onChange={(event) =>
                                                        this.setState({
                                                            [event.target.name]: event.target.value,
                                                        })
                                                    }
                                                    required
                                                    autoFocus
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    type="password"
                                                    placeholder="Password"
                                                    fullWidth
                                                    name="password"
                                                    variant="outlined"
                                                    value={this.state.password}
                                                    onChange={(event) =>
                                                        this.setState({
                                                            [event.target.name]: event.target.value,
                                                        })
                                                    }
                                                    required
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    type="submit"
                                                    className="button-block"
                                                    style={{background: '#1564bf'}}
                                                >
                                                    Submit
                                                </Button>
                                            </Grid>
                                            <Grid item>
                                                <Link href="register" variant="body2">
                                                    <br/>Don't you have an account?
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Login;