import React from "react";
import "./auth.css";
import {
    Button,
    TextField,
    Grid,
    Paper,
    Typography,
    Link,
} from "@material-ui/core";
import NavigationBar from "./NavigationBar";
import Api from "api/Api";
import StorageService from "services/StorageService"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class Register extends React.Component {


    constructor(props) {
        super(props);
        this.state = { username: "", name: "", password: "", email: "", author: false };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        let type = "0";
        if(this.state.author) {
            type = "1";
        }
        let userData = {
            username: this.state.username,
            name: this.state.name,
            password: this.state.password,
            email: this.state.email,
            type: type
        }
        const response = await Api.signUp(userData);
        if(response.status === 200) {
            StorageService.setToken(response.data.token);
            StorageService.setUserId(response.data.user_id);
            StorageService.setUserType(response.data.type);
            Api.setAuthToken();
            this.props.history.push("/dashboard");
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.checked });
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
                                        Sign Up
                                    </Typography>
                                </Grid>
                                <br/>
                                <Grid item>
                                    <form onSubmit={this.handleSubmit}>
                                        <Grid container direction="column" spacing={2}>
                                            <Grid item>
                                                <TextField
                                                    type="text"
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
                                                    type="text"
                                                    placeholder="Name"
                                                    fullWidth
                                                    name="name"
                                                    variant="outlined"
                                                    value={this.state.name}
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
                                                    type="email"
                                                    placeholder="Email"
                                                    fullWidth
                                                    name="email"
                                                    variant="outlined"
                                                    value={this.state.email}
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
                                            <FormControlLabel
                                                control={
                                                <Checkbox
                                                    checked={this.state.author}
                                                    onChange={this.handleChange}
                                                    name="author"
                                                    color="primary"
                                                    disabled={this.state.librarian}
                                                />
                                                }
                                                label="Are you an author?"
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
                                        </Grid>
                                    </form>
                                </Grid>
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        <br/>Already have an account?
                                    </Link>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Register;