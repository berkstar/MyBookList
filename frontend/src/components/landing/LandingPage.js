import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import NavigationBar from 'components/landing/NavigationBar';
import Showcase from 'components/landing/Showcase';
import { Container } from '@material-ui/core';
import Footer from './Footer';
import About from './About';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 0,
        background: '#003c8f',

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function LandingPage() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <NavigationBar />
                <Container>
                    <Showcase />
                </Container>
            </div>
            <About />
            <Footer />
        </div>

    );
}

export default LandingPage;