import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';


import ShowcaseImg from 'static/img/ShowcaseImg.jpeg';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        borderRadius: 0,
        background: '#1565c0',
        width: '100%',
        height: '50%',
        marginTop: '1%',
        marginBottom: '1%'
    },
    details: {
        flexDirection: 'column',
        margin: 'auto',
        width: '50%',
        padding: 'auto'
    },
    content: {
        flex: '1 0 auto',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

    },
    cover: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%',
        padding: '20px',
    }
}));

export default function Showcase() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                src={ShowcaseImg}
                component='img'
                title="Image"

            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h1" variant="h1">BOOKLAB</Typography>
                </CardContent>
            </div>
        </Card>
    );
}