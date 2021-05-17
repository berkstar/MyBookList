import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import {Typography} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {Link, useHistory} from "react-router-dom";
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Api from "api/Api";
import {Row} from "react-bootstrap";
import StorageService from 'services/StorageService';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";

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
    card: {
        display: "grid",
        gridTemplateRows: "1fr auto",
        gridGap: "8px",
        height: 345,
        maxWidth: 500,
        minWidth: 400,
        backgroundSize: "cover"
    },
}));




export default function Challenges() {
    const classes = useStyles();

    const [challenges, setChallenges] = useState([]);
    const history = useHistory();


    const parseChallenges = async () => {
        let response = await Api.getChallenges();
        if (response.status !== 200) {
            history.push("/login");
        } else {
            setChallenges(response.data);
        }
    }

    const joinChallenge = async (id) => {
        let response = await Api.joinChallenge(id);
        if (response.status !== 200) {
            history.push("/login");
        } else {

            await parseChallenges();
            alert("Joined to challenge!");
        }
    }

    const updateProgress = async (id) => {
        const book_read = prompt('Please enter how many books you have read');
        if (book_read !== null) {
            let response = await Api.challengeProgress(id, book_read);
            if (response.status !== 200) {
                history.push("/login");
            } else {
                await parseChallenges();
            }
        }
    }

    useState(parseChallenges);

    return (
        <div className={classes.root}>

            <Row className="container-fluid row-cols-auto">
                <h2 className="col my-auto" style={{marginLeft: 10}}>CHALLENGES </h2>
                {StorageService.getUserType() === 2 &&
                <Button className="col my-auto" onClick={() => window.helloComponent.handleCreateChallenge()}
                        size="medium" color="primary" style={{marginLeft: 10, float: 'right'}}>
                    Create Challenge
                </Button>}
            </Row>

            <div style={{marginTop: 0, padding: 30}}>
                <Grid container spacing={10} justify="center">
                    {challenges.map(chl => (
                        <Grid item key={chl.chal_id} className={classes.card}>
                            <Card>
                                <CardActionArea className="mb-5">
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {chl.challenge_name}
                                        </Typography>
                                        <Typography component="p">Book list: {chl.book_listname}</Typography>
                                        <Typography component="p">Book count: {chl.book_count}</Typography>

                                    </CardContent>
                                </CardActionArea>
                                <CardActions className="mt-2">
                                    <Button size="small"
                                            color="primary"
                                            onClick={() => window.helloComponent.handleChallengeDetails(chl)}
                                    >
                                        Details
                                    </Button>
                                    {chl.isJoined !== 1 && <Button
                                        size="small"
                                        color="primary"
                                        onClick={() => joinChallenge(chl.chal_id)}>
                                        Join
                                    </Button>}
                                    {chl.isJoined === 1 && <Button size="small"
                                                                   color="primary"
                                                                   onClick={() => updateProgress(chl.chal_id)}>
                                        Update Progress
                                    </Button>}
                                </CardActions>
                                { chl.percent && <LinearProgressWithLabel value={chl.percent}/>}
                            </Card>
                            <br/>

                        </Grid>
                    ))}
                </Grid>

            </div>
        </div>
    );
}