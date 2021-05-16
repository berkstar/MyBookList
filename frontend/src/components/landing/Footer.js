import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 0,
        background: '#5e92f3',
        minHeight: '200px',
        width: '100vw',
        paddingTop: '20px',
        backgroundColor: '#606060',
        color: 'white'
    },
    divider: {
        marginTop: '0px',
        marginbottom: '20px',
    }
}));

function Footer() {
    const classes = useStyles();
    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={2}>
                    Aybars Altinisik
                </Grid>
                <Grid item xs={2}>
                    Bulut Gozubuyuk
                </Grid>
                <Grid item xs={2}>
                    Berk Yildiz
                </Grid>
                <Grid item xs={2}>
                    Denizhan Kemeroz
                </Grid>
                <Grid item xs={4}>
                    <Typography component="h6" variant="h6">
                        BOOKLAB
                    </Typography>
                    <Typography variant="subtitle2" color="white">
                        All rights reserved &copy; 2021
                    </Typography>
                </Grid>
            </React.Fragment>
        );
    }
    return (
        <div className={classes.root}>
            <Container>
                <Divider className={classes.divider} />
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={5}>
                        <FormRow />
                    </Grid>
                </Grid>
            </Container>
        </div>


    );
}

export default Footer;