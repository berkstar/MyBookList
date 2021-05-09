import React, { Component } from 'react';
import {fade, withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import ForumIcon from '@material-ui/icons/Forum';
import NoteIcon from '@material-ui/icons/Note';


import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';

import NotificationsIcon from '@material-ui/icons/Notifications';
import EqualizerIcon from '@material-ui/icons/Equalizer';

import Grid from '@material-ui/core/Grid';

import CourseStatistics from 'components/dashboard/home/Thread/statistics/CourseStatistics'
import Posts from 'components/dashboard/home/Thread/Posts'
import Assignments from "./Assignments";
import PostAddIcon from "@material-ui/icons/PostAdd";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import InputBase from "@material-ui/core/InputBase";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
        flexGrow: 1
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#303030',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: '#595959',
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#595959',
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    AppBar: {

    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'White',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
});
class SearchIcon extends Component {
    render() {
        return null;
    }
}

class ForumBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roster: true,
            assignments: false,
            statistics: false,
            myForms: false,
            savedList: false,
            create: false,
        };
    }

    handleStatistics() {
        this.setState({ roster: false });
        this.setState({ assignments: false });
        this.setState({ create: false });
        this.setState({ statistics: true });
        this.setState({ myForms: false });
        this.setState({ savedList: false });
    }

    handleRoster() {
        this.setState({ roster: true });
        this.setState({ assignments: false });
        this.setState({ create: false });
        this.setState({ statistics: false });
        this.setState({ myForms: false });
        this.setState({ savedList: false });
    }

    handleAssignments() {
        this.setState({ roster: false });
        this.setState({ assignments: true });
        this.setState({ create: false });
        this.setState({ statistics: false });
        this.setState({ myForms: false });
        this.setState({ savedList: false });
    }



    render() {
        const { classes } = this.props;

        let showContent;
        if (this.state.statistics) {
            showContent = <CourseStatistics />;
        } else if (this.state.assignments) {
            showContent = <Assignments />
        }else if (this.state.roster) {
        showContent = <Posts />
}

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Grid justify="space-between" // Add it here :)
                            container
                            spacing={0}>
                            <Link href="/" variant="h6" className="my-auto" style={{color: "white"}}>
                                BOOKLAB
                            </Link>
                            <Grid>
                                <div className={classes.sectionDesktop}>
                                    <IconButton
                                        edge="end"
                                        aria-label="create thread"
                                        aria-controls={1}
                                        aria-haspopup="true"
                                        onClick={() => this.handleMyProfile()}
                                        color="inherit"
                                    >
                                        <PostAddIcon/>
                                    </IconButton>
                                    <IconButton
                                        edge="end"
                                        aria-label="account of current user"
                                        aria-controls={1}
                                        aria-haspopup="true"
                                        onClick={() => this.handleMyProfile()}
                                        color="inherit"
                                    >
                                        <AccountCircle/>
                                    </IconButton>
                                </div>
                            </Grid>
                        </Grid>

                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Toolbar />
                    <div className={classes.drawerContainer}>
                        <List>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search Post…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>
                            <ListItem button onClick={() => this.handleRoster()} key="Posts">
                                <ListItemIcon><NoteIcon style={{ color: '#fff' }}/></ListItemIcon>
                                <ListItemText primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Posts</Typography>}/>
                            </ListItem>
                            <ListItem button onClick={() => this.handleStatistics()} key="Friends">
                                <ListItemIcon><PeopleIcon style={{ color: '#fff' }}/></ListItemIcon>
                                <ListItemText primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Friends</Typography>}/>
                            </ListItem>
                            <ListItem button onClick={() => this.handleStatistics()} key="MyBooks">
                                <ListItemIcon><LibraryBooksIcon style={{ color: '#fff' }}/></ListItemIcon>
                                <ListItemText primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>MyBooks</Typography>}/>
                            </ListItem>
                            <ListItem button onClick={() => this.handleHome()} key="Home">
                                <ListItemIcon><ForumIcon style={{ color: '#fff' }}/></ListItemIcon>
                                <ListItemText primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Home</Typography>}/>
                            </ListItem>
                        </List>
                        <Divider />
                        {/* <List>
                            <ListItem button onClick={() => this.handleNewForm()} key="NewForm">
                                <ListItemIcon><AddIcon /></ListItemIcon>
                                <ListItemText primary="Create Form" />
                            </ListItem>
                        </List> */}
                    </div>
                </Drawer>
                <main className={classes.content}>
                    <Toolbar />
                    <Grid>
                        {showContent}
                    </Grid>
                </main>
            </div>
        )

    }
}

export default (withStyles(styles)(ForumBoard));