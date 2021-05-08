import React from 'react'
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import coverimg from "./cover.jpeg";
import {makeStyles} from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";

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


export default function BookDetails() {
        const [value, setValue] = React.useState(2);
        const classes = useStyles();
        return (
            <div id='about' >
                <Grid style={{ marginLeft:30, marginRight:30 }}>
                    <Grid container justify="space-between">
                    <Typography component="h4" variant="h4">
                        Book Details: The Hitchhiker's Guide to the Galaxy
                    </Typography>
                    <Button
                        style={{ marginRight:30 }}
                        variant="contained"
                        color="default"
                        size="medium"
                        onClick={() => { alert('clicked') }}>
                        <b>Recommend to a friend</b>
                    </Button>
                    </Grid>
                    <CardMedia
                        className={classes.cover}
                        src={coverimg}
                        component='img'
                        title="Image"
                    />
                    <br/>
                    <Typography component="h4" variant="h4">
                        Author: Douglas Adams
                        <br/>
                        Number of Pages: 334
                    </Typography>
                    <br/>
                    <Typography component="h4" variant="h4" xs={10}>
                        Preface
                    </Typography>
                    <Typography component="h6" variant="h6" xs={10}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </Typography>
                    <br/>
                    <Typography component="h4" variant="h4" xs={10}>
                        Progress
                    </Typography>
                    <br/>
                    <Typography component="h6" variant="h6" xs={10}>
                        Date 02.04.2021 - Page Number: 241<br/>
                        Date 01.01.2021 - Page Number: 211<br/>
                        Date 23.12.2020 - Page Number: 177<br/>
                        Date 27.10.2020 - Page Number: 123
                        </Typography>
                    <br/>
                    <Typography component="h4" variant="h4" xs={10}>
                        Rating
                    </Typography>
                    <br/>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </Grid>
            </div>
        );
    }