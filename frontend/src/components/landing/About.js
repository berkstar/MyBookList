import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        margin: 0,
        flex: '1 0 auto',
        marginTop: '2%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

}));

function About() {
    const classes = useStyles();

    return (
        <div id='about' >
            <Container >
                <Grid container spacing={1} className={classes.root}>
                    <Typography component="h5" variant="h5" xs={10}>
                        BOOKLAB
                    </Typography>
                </Grid>
            </Container>
        </div>
    );
}

export default About;