import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
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
import Threads from 'components/dashboard/threads/Threads';
import Challenges from 'components/dashboard/challenge/Challenges';
import ChallengeDetails from 'components/dashboard/challenge/ChallengeDetails';
import AllBooks from 'components/dashboard/allbooks/AllBooks';
import BookDetails from 'components/dashboard/book-details/BookDetails';
import EditBookList from 'components/dashboard/edit-book-list/EditBookList';
import Mybooks from 'components/dashboard/mybooks/Mybooks';
import Friends from 'components/dashboard/friends/Friends';
import SearchFriends from 'components/dashboard/friends/SearchFriends';
import CreateChallenge from 'components/dashboard/challenge/CreateChallenge';
import Posts from 'components/dashboard/posts/Posts';
import UserProfile from 'components/dashboard/profile/MyProfile';
import OtherProfile from 'components/dashboard/profile/OtherProfile';
import {fade} from '@material-ui/core/styles';
import PostAddIcon from '@material-ui/icons/PostAdd';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import PostDetails from './post-details/Post-details';
import EditPost from './edit-post/EditPost';
import EditBook from './edit-book/EditBook';


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
        color: 'white',
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
        this.handlePosts = this.handlePosts.bind(this);
        this.thread = {};
        this.post = {};
        this.profile_user = {};
        this.editPost_thread = {};
        this.book = {};
        this.states = {
            threads: false,
            myBooks: false,
            myForms: false,
            savedList: false,
            create: false,
            userProfile: false,
            challenges: false,
            friends: false,
            allBooks: false,
            bookDetails: false,
            challengeDetails: false,
            editBookList: false,
            searchFriends: false,
            createChallenge: false,
            otherProfile: false,
            posts: false,
            postDetails: false,
            editPost: false,
            editBook: false,
        };
        this.state = {
            threads: true,
            myBooks: false,
            myForms: false,
            savedList: false,
            create: false,
            userProfile: false,
            challenges: false,
            friends: false,
            allBooks: false,
            mybooks: false,
            bookDetails: false,
            challengeDetails: false,
            editBookList: false,
            searchFriends: false,
            createChallenge: false,
            otherProfile: false,
            posts: false,
            postDetails: false,
            editPost: false,
            editBook: false,
        };
    }

    handleMyFriends() {
        this.setState(this.states);
        this.setState({friends: true});
    }

    handleMyProfile() {
        this.setState(this.states);
        this.setState({userProfile: true});
    }

    handleOtherProfile(user) {
        this.profile_user = user;
        this.setState(this.states);
        this.setState({otherProfile: true});
    }

    handleMyChallenges() {
        this.setState(this.states);
        this.setState({challenges: true});
    }

    handleThreads() {
        this.setState(this.states);
        this.setState({threads: true});
    }

    handleMyBooks() {
        this.setState(this.states);
        this.setState({myBooks: true});
    }

    handleBrowse() {
        this.setState(this.states);
        this.setState({allBooks: true});
    }

    handleBookDetails(book) {
        this.book = book;
        this.setState(this.states);
        this.setState({bookDetails: true});
    }

    handleChallengeDetails(challenge) {
        this.challenge = challenge;
        this.setState(this.states);
        this.setState({challengeDetails: true});
    }

    handleEditBookList() {
        this.setState(this.states);
        this.setState({editBookList: true});
    }

    handlePosts(thread) {
        this.thread = thread;
        this.setState(this.states);
        this.setState({posts: true});
    }

    handlePostDetails(post) {
        this.post = post;
        this.setState(this.states);
        this.setState({postDetails: true});
    }

    handleSearchFriends() {
        this.setState(this.states);
        this.setState({searchFriends: true});
    }

    handleCreateChallenge() {
        this.setState(this.states);
        this.setState({createChallenge: true});
    }

    handleEditPost(editPost_thread) {
        this.editPost_thread = editPost_thread;
        this.setState(this.states);
        this.setState({editPost: true});
    }

    handleEditBook() {
        this.setState(this.states);
        this.setState({editBook: true});
    }

    render() {
        const {classes} = this.props;

        let showContent;
        if (this.state.threads) {
            showContent = <Threads handlePosts={this.handlePosts}/>;
        } else if (this.state.myBooks) {
            showContent = <Mybooks/>;
        } else if (this.state.challenges) {
            showContent = <Challenges/>;
        } else if (this.state.friends) {
            showContent = <Friends/>;
        } else if (this.state.userProfile) {
            showContent = <UserProfile/>
        } else if (this.state.allBooks) {
            showContent = <AllBooks/>
        } else if (this.state.bookDetails) {
            showContent = <BookDetails book={this.book}/>
        } else if (this.state.challengeDetails) {
            showContent = <ChallengeDetails challenge={this.challenge}/>
        } else if (this.state.searchFriends) {
            showContent = <SearchFriends/>
        } else if (this.state.createChallenge) {
            showContent = <CreateChallenge/>
        } else if (this.state.otherProfile) {
            showContent = <OtherProfile user={this.profile_user}/>
        } else if (this.state.editBookList) {
            showContent = <EditBookList/>
        } else if (this.state.posts) {
            showContent = <Posts thread={this.thread}/>
        } else if (this.state.postDetails) {
            showContent = <PostDetails post={this.post}/>
        } else if (this.state.editPost) {
            showContent = <EditPost thread={this.editPost_thread}/>
        } else if (this.state.editBook) {
            showContent = <EditBook/>
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
                    <div className={"container-fluid h-100 " + classes.drawerContainer}>
                        <List>
                            <ListItem button onClick={() => this.handleThreads()} key="Threads">
                                <ListItemIcon><HomeIcon style={{color: '#fff'}}/></ListItemIcon>
                                <ListItemText
                                    primary={<Typography type="body2" style={{color: '#FFFFFF'}}>Forum</Typography>}/>
                            </ListItem>
                            <ListItem button onClick={() => this.handleMyFriends()} key="Friends">
                                <ListItemIcon><PeopleIcon style={{color: '#fff'}}/></ListItemIcon>
                                <ListItemText
                                    primary={<Typography type="body2" style={{color: '#FFFFFF'}}>Friends</Typography>}/>
                            </ListItem>
                            <ListItem button onClick={() => this.handleMyChallenges()} key="Challenges">
                                <ListItemIcon><AccessAlarmIcon style={{color: '#fff'}}/></ListItemIcon>
                                <ListItemText primary={<Typography type="body2"
                                                                   style={{color: '#FFFFFF'}}>Challenges</Typography>}/>
                            </ListItem>
                            <ListItem button onClick={() => this.handleMyBooks()} key="MyBooks">
                                <ListItemIcon><LibraryBooksIcon style={{color: '#fff'}}/></ListItemIcon>
                                <ListItemText primary={<Typography type="body2" style={{color: '#FFFFFF'}}>My
                                    Books</Typography>}/>
                            </ListItem>
                            <ListItem button onClick={() => this.handleBrowse()} key="AllBooks">
                                <ListItemIcon><MenuBookIcon style={{color: '#fff'}}/></ListItemIcon>
                                <ListItemText
                                    primary={<Typography type="body2" style={{color: '#FFFFFF'}}>Browse</Typography>}/>
                            </ListItem>
                            <ListItem button onClick={() => this.props.history.push("/login")} key="SignOut">
                                <ListItemIcon><ExitToAppIcon style={{color: '#fff'}}/></ListItemIcon>
                                <ListItemText primary={<Typography type="body2" style={{color: '#FFFFFF'}}>Sign
                                    Out</Typography>}/>
                            </ListItem>
                        </List>
                        <Divider/>
                    </div>
                </Drawer>
                <main className={classes.content}>
                    <Toolbar/>
                    <Grid className="container-fluid">
                        {showContent}
                    </Grid>
                </main>
            </div>
        )

    }
}

export default (withStyles(styles)(Dashboard));