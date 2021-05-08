import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import PeopleIcon from '@material-ui/icons/People';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import Grid from '@material-ui/core/Grid';
import Home from 'components/dashboard/home/Home'
import Challenges from 'components/dashboard/challenge/Challenges'
import AllBooks from 'components/dashboard/allbooks/AllBooks'
import BookDetails from 'components/dashboard/book-details/BookDetails'
import EditBookList from 'components/dashboard/edit-book-list/EditBookList'
import Mybooks from 'components/dashboard/mybooks/Mybooks'
import Friends from 'components/dashboard/friends/Friends'
import SearchFriends from 'components/dashboard/friends/SearchFriends'

import UserProfile from 'components/dashboard/profile/UserProfile';
import OtherProfile from 'components/dashboard/profile/OtherProfile';
import { fade, makeStyles } from '@material-ui/core/styles';
import PostAddIcon from '@material-ui/icons/PostAdd';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FormatListNumbered } from '@material-ui/icons';


const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
        flexGrow: 1
    },
    fab: {
        right: 20,
        position: 'fixed'
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
    AppBar: {},
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
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
        color: 'inherit',
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

class Dashboard extends Component {
    constructor(props) {
        super(props);
        window.helloComponent = this;
        this.state = {
            home: true,
            statistics: false,
            myForms: false,
            savedList: false,
            create: false,
            userProfile: false,
            challenges: false,
            friends: false,
            AllBooks: false,
            Mybooks: false,
            BookDetails: false,
            EditBookList: false,
            SearchFriends: false,
            OtherProfile: false,
        };
    }

    handleSearchFriends() {
        this.setState({home: false});
        this.setState({statistics: false});
        this.setState({challenges: false});
        this.setState({create: false});
        this.setState({myForms: false});
        this.setState({savedList: false});
        this.setState({challenges: false});
        this.setState({userProfile: false});
        this.setState({Mybooks: false});
        this.setState({friends: false});
        this.setState({AllBooks: false});
        this.setState({BookDetails: false});
        this.setState({EditBookList: false});
        this.setState({SearchFriends: true});
        this.setState({OtherProfile: false});
    }

    handleMyFriends() {
        this.setState({home: false});
        this.setState({statistics: false});
        this.setState({challenges: false});
        this.setState({create: false});
        this.setState({myForms: false});
        this.setState({savedList: false});
        this.setState({challenges: false});
        this.setState({userProfile: false});
        this.setState({Mybooks: false});
        this.setState({friends: true});
        this.setState({AllBooks: false});
        this.setState({BookDetails: false});
        this.setState({EditBookList: false});
        this.setState({SearchFriends: false});
        this.setState({OtherProfile: false});
    }

    handleMyProfile() {
        this.setState({home: false});
        this.setState({statistics: false});
        this.setState({challenges: false});
        this.setState({create: false});
        this.setState({myForms: false});
        this.setState({savedList: false});
        this.setState({challenges: false});
        this.setState({userProfile: true});
        this.setState({Mybooks: false});
        this.setState({friends: false});
        this.setState({AllBooks: false});
        this.setState({BookDetails: false});
        this.setState({EditBookList: false});
        this.setState({SearchFriends: false});
        this.setState({OtherProfile: false});

    }

    handleOtherProfile() {
        this.setState({home: false});
        this.setState({statistics: false});
        this.setState({challenges: false});
        this.setState({create: false});
        this.setState({myForms: false});
        this.setState({savedList: false});
        this.setState({challenges: false});
        this.setState({userProfile: false});
        this.setState({Mybooks: false});
        this.setState({friends: false});
        this.setState({AllBooks: false});
        this.setState({BookDetails: false});
        this.setState({EditBookList: false});
        this.setState({SearchFriends: false});
        this.setState({OtherProfile: true});
    }

    handleMyChallenges() {
        this.setState({home: false});
        this.setState({statistics: false});
        this.setState({challenges: false});
        this.setState({create: false});
        this.setState({myForms: false});
        this.setState({savedList: false});
        this.setState({challenges: true});
        this.setState({userProfile: false});
        this.setState({Mybooks: false});
        this.setState({friends: false});
        this.setState({AllBooks: false});
        this.setState({BookDetails: false});
        this.setState({EditBookList: false});
        this.setState({SearchFriends: false});
        this.setState({OtherProfile: false});
    }

    handleHome() {
        this.setState({home: true});
        this.setState({statistics: false});
        this.setState({challenges: false});
        this.setState({create: false});
        this.setState({myForms: false});
        this.setState({savedList: false});
        this.setState({challenges: false});
        this.setState({userProfile: false});
        this.setState({Mybooks: false});
        this.setState({friends: false});
        this.setState({AllBooks: false});
        this.setState({BookDetails: false});
        this.setState({EditBookList: false});
        this.setState({SearchFriends: false});
        this.setState({OtherProfile: false});
    }

    handleStatistics() {
        this.setState({home: false});
        this.setState({statistics: true});
        this.setState({challenges: false});
        this.setState({create: false});
        this.setState({myForms: false});
        this.setState({savedList: false});
        this.setState({challenges: false});
        this.setState({userProfile: false});
        this.setState({Mybooks: false});
        this.setState({friends: false});
        this.setState({AllBooks: false});
        this.setState({BookDetails: false});
        this.setState({EditBookList: false});
        this.setState({SearchFriends: false});
        this.setState({OtherProfile: false});
    }

    handleBrowse() {
        this.setState({home: false});
        this.setState({statistics: false});
        this.setState({challenges: false});
        this.setState({create: false});
        this.setState({myForms: false});
        this.setState({savedList: false});
        this.setState({challenges: false});
        this.setState({userProfile: false});
        this.setState({Mybooks: false});
        this.setState({friends: false});
        this.setState({AllBooks: true});
        this.setState({BookDetails: false});
        this.setState({EditBookList: false});
        this.setState({SearchFriends: false});
        this.setState({OtherProfile: false});
    }

    handleBookDetails() {
        this.setState({home: false});
        this.setState({statistics: false});
        this.setState({challenges: false});
        this.setState({create: false});
        this.setState({myForms: false});
        this.setState({savedList: false});
        this.setState({challenges: false});
        this.setState({userProfile: false});
        this.setState({Mybooks: false});
        this.setState({friends: false});
        this.setState({AllBooks: false});
        this.setState({BookDetails: true});
        this.setState({EditBookList: false});
        this.setState({SearchFriends: false});
        this.setState({OtherProfile: false});
    }

    handleEditBookList() {
        this.setState({home: false});
        this.setState({statistics: false});
        this.setState({challenges: false});
        this.setState({create: false});
        this.setState({myForms: false});
        this.setState({savedList: false});
        this.setState({challenges: false});
        this.setState({userProfile: false});
        this.setState({Mybooks: false});
        this.setState({friends: false});
        this.setState({AllBooks: false});
        this.setState({BookDetails: false});
        this.setState({EditBookList: true});
        this.setState({SearchFriends: false});
        this.setState({OtherProfile: false});

    }


    render() {
        const {classes} = this.props;

        let showContent;
        if (this.state.home) {
            showContent = <Home/>;
        } else if (this.state.statistics) {
            showContent = <Mybooks/>;
        } else if (this.state.challenges) {
            showContent = <Challenges/>;
        } else if (this.state.friends) {
            showContent = <Friends/>;
        } else if (this.state.userProfile) {
            showContent = <UserProfile/>
        } else if (this.state.AllBooks) {
            showContent = <AllBooks/>
        } else if (this.state.BookDetails) {
            showContent = <BookDetails/>
        } else if (this.state.SearchFriends) {
            showContent = <SearchFriends/>
        } else if (this.state.OtherProfile) {
            showContent = <OtherProfile/>
        } else if (this.state.EditBookList) {
            showContent = <EditBookList/>
        }

        return (
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Grid justify="space-between" // Add it here :)
                              container
                              spacing={0}>
                            <Typography variant="h6" noWrap className="my-auto">
                                BOOKLAB
                            </Typography>
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
                    <Toolbar/>
                        <TextField
                            type="search"
                            variant="filled"
                            label="Search"
                            InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <SearchIcon />
                                  </InputAdornment>
                                ),
                              }}
                            >
                        </TextField>
                    <div className={classes.drawerContainer}>
                        <List>
                            <ListItem button onClick={() => this.handleHome()} key="Home">
                                <ListItemIcon><HomeIcon/></ListItemIcon>
                                <ListItemText primary="Forum"/>
                            </ListItem>
                            <ListItem button onClick={() => this.handleMyFriends()} key="Friends">
                                <ListItemIcon><PeopleIcon/></ListItemIcon>
                                <ListItemText primary="Friends"/>
                            </ListItem>
                            <ListItem button onClick={() => this.handleMyChallenges()} key="Challenges">
                                <ListItemIcon><AccessAlarmIcon/></ListItemIcon>
                                <ListItemText primary="Challenges"/>
                            </ListItem>
                            <ListItem button onClick={() => this.handleStatistics()} key="MyBooks">
                                <ListItemIcon><LibraryBooksIcon/></ListItemIcon>
                                <ListItemText primary="My Books"/>
                            </ListItem>
                            <ListItem button onClick={() => this.handleBrowse()} key="AllBooks">
                                <ListItemIcon><MenuBookIcon/></ListItemIcon>
                                <ListItemText primary="Browse"/>
                            </ListItem>
                        </List>
                        <Divider/>
                        {/* <List>
                            <ListItem button onClick={() => this.handleNewForm()} key="NewForm">
                                <ListItemIcon><AddIcon /></ListItemIcon>
                                <ListItemText primary="Create Form" />
                            </ListItem>
                        </List> */}
                    </div>
                </Drawer>
                <main className={classes.content}>
                    <Toolbar/>
                    <Grid>
                        {showContent}
                    </Grid>
                </main>
            </div>
        )

    }
}

export default (withStyles(styles)(Dashboard));