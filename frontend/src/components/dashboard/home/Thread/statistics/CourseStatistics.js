import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
// import AddButton from '../createform/AddButton'

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

export default function CourseStatistics() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

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
            <Grid /*xs={12}*/>
                <h1>Course Statistics</h1>

            </Grid>


        </div>
    );
}