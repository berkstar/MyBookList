import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Threads from "./Threads";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}));

export default function Home() {
    const classes = useStyles();
    // const [values, setValues] = React.useState({
    //     amount: '',
    //     password: '',
    //     weight: '',
    //     weightRange: '',
    //     showPassword: false,
    // });

    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };
    //
    // const handleClickShowPassword = () => {
    //     setValues({ ...values, showPassword: !values.showPassword });
    // };
    //
    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };

    return (
        <div className={classes.root}>
            <Grid>
                <h2 style={{ marginLeft:30 }}>THREADS</h2>
                <Threads/>
            </Grid>
        </div>
    );
}