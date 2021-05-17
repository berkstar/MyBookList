import axios from 'axios';
import FormData from 'form-data'
import api_url from './api_url.json'
import StorageService from 'services/StorageService';

const API_URL = api_url.API_URL
var token = StorageService.getToken();
const ERROR = {
        status: 503
    };

if ( token ) {
    setAuthToken(token);
}

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = "http://localhost:3000";

function setAuthToken() {
    token = StorageService.getToken();
    axios.defaults.headers.common['Authorization'] = `${token}`;
}

async function login(userData) {
    return await api_post('/user/login/', userData);
}

async function signUp(userData) {
    return await api_post('/user/register/', userData);
}

async function getAllThreads() {
    return await api_get('/forum/getallthreads/', null);
}

async function getTopThreads() {
    return await api_get('/forum/gettopthreads/', null);
}

async function getPosts(threadId) {
    let request = { tid: threadId };
    return await api_get('/forum/getposts', request);
}

async function getUserPosts(uid) {
    let request = { uid: uid };
    return await api_get('/forum/getuserposts', request);
}

async function getPost(pid) {
    let request = { pid: pid };
    return await api_get('/forum/getpost', request);
}

async function getFriends() {
    let uid = { uid: StorageService.getUserId() };
    return await api_get('/user/getfriends', uid);
}

async function getUsers() {
    let uid = { uid: StorageService.getUserId() };
    return await api_get('/user/getusers', uid);
}

async function getUser() {
    let uid = { uid: StorageService.getUserId() };
    return await api_get('/user/getuser', uid);
}

async function addFriend(fid) {
    let request = {
        uid: StorageService.getUserId(),
        fid: fid
    };
    return await api_post('/user/addfriend', request);
}

async function postPost(newPost) {
    return await api_post('/forum/postpost', newPost);
}

async function getChallenges() {
    let request = { uid: StorageService.getUserId() };
    return await api_get('/book/getchallenges', request);
}

async function getChallengeBookList(challenge_id) {
    let request = { chal_id: challenge_id };
    return await api_get('/book/getchallengebooklist', request);
}

async function joinChallenge(challenge_id) {
    let request = {
        uid: StorageService.getUserId(),
        cid: challenge_id
    }
    return await api_post('/book/joinchallenge', request);
}


async function challengeProgress(challenge_id, num) {
    let request = {
        uid: StorageService.getUserId(),
        chal_id: challenge_id,
        book_read: num
    }
    return await api_put('/book/challengeprogress', request);
}

async function createChallenge(booklist_id, name, duedate) {
    let request = {
        uid: StorageService.getUserId(),
        bl_id: booklist_id,
        chal_name: name,
        due_date: duedate
    }
    return await api_post('/book/createchallenge', request);
}

async function postBook(book_name, author_id, num_of_pages, description, genre, year) {
    let request = {
        b_name: book_name,
        aid: author_id,
        page_num: num_of_pages,
        desc: description,
        genre: genre,
        year: year
    }
    return await api_post('/book/publish', request);
}

async function postBookList(list_name, bookIds) {
    let request = {
        uid: StorageService.getUserId(),
        list_name: list_name,
        book_ids: bookIds
    }
    return await api_post('/book/postbooklist', request);
}

async function getMyBookLists() {
    let request = { uid: StorageService.getUserId() };
    return await api_get('/book/getmybooklists', request);
}

async function setBio(bio) {
    let request = {
        uid: StorageService.getUserId(),
        bio: bio
    }
    return await api_put('/user/setbio', request);
}

async function likePost(pid) {
    let request = {
        uid: StorageService.getUserId(),
        pid: pid
    };
    return await api_put('/forum/likepost', request);
}

async function commentPost(text, pid) {
    let request = {
        uid: StorageService.getUserId(),
        pid: pid,
        text: text,
    };
    return await api_post('/forum/addpostcomment', request);
}

async function searchBook(keyword, date_b, date_e) {
    let request = {
        keyword: keyword,
        date_b: date_b,
        date_e: date_e
    }
    return await api_get('/book/searchbook/', request);
}

async function getMyBooks() {
    let request = {
        uid: StorageService.getUserId(),
    }
    return await api_get('/book/getmybooks/', request);
}

async function rateBook(book_id, rating) {
    let request = {
        uid: StorageService.getUserId(),
        book_id: book_id,
        rating: rating,
        review: ""
    }
    return await api_post('/book/addreview/', request);
}

async function postProgress(book_id, page_num) {
    let request = {
        uid: StorageService.getUserId(),
        book_id: book_id,
        page_num: page_num
    }
    return await api_post('/book/addprogress/', request);
}

////////////////////////////////////////////////////////////////////////

async function api_get(path, param) {
    try {
        var response = {};
        if (param != null) {
            response = await axios.get(path, {params: param});
        }
        else {
            response = await axios.get(path);
        }
        console.log(response);
        return response;
    } catch (error) {
        if ( error.response ) {
            if ( error.response.status === 401 ) {
                alert('Incorrect Credentials!');
            }
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
        console.log(error);
        return ERROR;
    }
}

async function api_post(path, param) {
    try {
        var response = {};
        if (param != null) {
            response = await axios.post(path, param);
        }
        else {
            response = await axios.post(path);
        }
        console.log(response);
        return response;
    } catch (error) {
        if ( error.response ) {
            if ( error.response.status === 401 ) {
                alert('Incorrect Credentials!');
            }
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
        console.log(error);
        return ERROR;
    }
}

async function api_put(path, param) {
    try {
        var response = {};
        if (param != null) {
            response = await axios.put(path, param);
        }
        else {
            response = await axios.put(path);
        }
        console.log(response);
        return response;
    } catch (error) {
        if ( error.response ) {
            if ( error.response.status === 401 ) {
                alert('Incorrect Credentials!');
            }
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
        console.log(error);
        return ERROR;
    }
}

async function api_delete(path, param) {
    try {
        var response = {};
        if (param != null) {
            response = await axios.delete(path, param);
        }
        else {
            response = await axios.delete(path);
        }
        console.log(response);
        return response;
    } catch (error) {
        if ( error.response ) {
            if ( error.response.status === 401 ) {
                alert('Incorrect Credentials!');
            }
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
        console.log(error);
        return ERROR;
    }
}

const Api = {
    setAuthToken,
    login,
    signUp,
    getAllThreads,
    getPosts,
    getFriends,
    getUsers,
    addFriend,
    postPost,
    getUser,
    postBook,
    getChallenges,
    joinChallenge,
    createChallenge,
    challengeProgress,
    setBio,
    likePost,
    commentPost,
    getPost,
    getUserPosts,
    searchBook,
    postBookList,
    getChallengeBookList,
    getMyBookLists,
    getMyBooks,
    rateBook,
    postProgress,
    getTopThreads
}

export default Api;