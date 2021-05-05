import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollableLink } from 'react-scroll';



import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#1565c0',

    },
    menu: {

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function NavigationBar() {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Container maxWidth="lg" className={classes.menu}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        BOOKLAB
                    </Typography>
                    <Button component={ScrollableLink} color="inherit" spy={true} smooth={true} to='about'>About</Button>
                    <Button component={Link} to='/register' color="inherit">
                        Register
                    </Button>
                    <Button component={Link} to='/login' color="inherit">
                        Login
                    </Button>
                </Toolbar>
            </Container>

        </AppBar>
    );
}