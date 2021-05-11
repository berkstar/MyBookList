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

async function getPosts(threadId) {
    let tid = { tid: threadId };
    return await api_get('/forum/getposts', tid);
}

async function getFriends() {
    let uid = { uid: StorageService.getUserId() };
    return await api_get('/user/getfriends', uid);
}

async function getUsers() {
    return await api_get('/user/getusers', null);
}

async function addFriend(friendId) {
    let newFriends = { uid: StorageService.getUserId(), fid: friendId};
    return await api_post('/user/addfriend', newFriends);
}


async function uploadImage(img) {
    let data = new FormData();
    data.append('imgFile', img, img.fileName);
    return await axios.post('upload/', data, {
        headers: {
            'accept': 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        }
    });
}

async function api_get(path, param) {
    try {
        const response = {};
        if (param != null) {
            response = await axios.get(path, {params: param});
        }
        else {
            response = await axios.get(path);
        }
        console.log(response);
        return response;
    } catch (error) {
        if ( error.response.status === 401 ) {
            alert('Incorrect Credentials!');
        } else if ( error.response ) {
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
        const response = {};
        if (param != null) {
            response = await axios.put(path, param);
        }
        else {
            response = await axios.put(path);
        }
        console.log(response);
        return response;
    } catch (error) {
        if ( error.response.status === 401 ) {
            alert('Incorrect Credentials!');
        } else if ( error.response ) {
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
        const response = {};
        if (param != null) {
            response = await axios.delete(path, param);
        }
        else {
            response = await axios.delete(path);
        }
        console.log(response);
        return response;
    } catch (error) {
        if ( error.response.status === 401 ) {
            alert('Incorrect Credentials!');
        } else if ( error.response ) {
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
    uploadImage,
    getFriends,
    getUsers,
    addFriend,
}

export default Api;