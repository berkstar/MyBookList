import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import {Typography} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

// import AddButton from '../createform/AddButton'
import challenges from "./dummy-challenges";
function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};

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
}));



export default function Challenges() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={classes.root}>
            <Grid >
                <h2 style={{ marginLeft:30 }}>CHALLENGES</h2>
            </Grid>

            <div style={{ marginTop: 0, padding: 30 }}>
                <Grid container spacing={40} justify="center">
                    {challenges.map(chl => (
                        <Grid item key={chl.title}>
                            <Card>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {chl.title}
                                        </Typography>
                                        <Typography component="p">{chl.content}</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button component={Link} to='/test' size="small" color="primary">
                                        Join
                                    </Button>
                                    <Button component={Link} to='/test' size="small" color="primary">
                                        View
                                    </Button>
                                </CardActions>
                                <LinearProgressWithLabel value={progress} />
                            </Card>
                            <br/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}