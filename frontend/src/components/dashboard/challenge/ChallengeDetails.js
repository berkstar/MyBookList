import {Button, Card, CardMedia, Grid, IconButton} from "@material-ui/core";
import coverimg from "../book-details/cover.jpeg";
import Typography from "@material-ui/core/Typography";
import {Row} from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
import Rating from "@material-ui/lab/Rating";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import {useHistory} from "react-router-dom";
import Api from "../../../api/Api";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        borderRadius: 0,
        background: '#1565c0',
        width: '100%',
        height: '50%',
        marginTop: '1%',
        marginbottom: '1%'
    },
    cover: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '15%',
        padding: '20px',
    }
}));

export default function ChallengeDetails(props) {
    const classes = useStyles();
    const [challenge, setChallenge] = useState(props.challenge);
    const [booklist, setBooklist] = useState([]);
    const history = useHistory();

    const parseBookList = async () => {
        let response = await Api.getChallengeBookList(challenge.chal_id);
        if (response.status !== 200) {
            history.push("/login");
        } else {
            setBooklist(response.data);
        }
    }

    useState(parseBookList);

    return (
        <Card className="bg-secondary text-light">
            <Grid style={{ marginLeft:30, marginRight:30 }}>
                <br/>
                <br/>
                <Typography component="h4" variant="h4">
                    Challenge Name: {challenge.challenge_name}
                    <br/>
                    <br/>
                    Book list: {challenge.book_listname}
                    <br/>
                    Book count: {challenge.book_count}
                </Typography>
                <br/>
                <br/>
                <br/>
                <Typography component="h4" variant="h4" xs={10}>
                    Books:
                </Typography>
                <br/>
                <Grid container spacing={10}>
                    {booklist.map(book => (
                        <Grid item xs={12}>
                            <Card>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {book.title}
                                        </Typography>
                                        <Typography component="p">Description: {book.description}</Typography>
                                        <Typography component="p">Genre: {book.genre}</Typography>
                                        <Typography component="p">Year: {book.year}</Typography>
                                        <Typography component="p">Pages: {book.pages}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <br/>
            <br/>
        </Card>
    );
}