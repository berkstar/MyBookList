import axios from 'axios';
import FormData from 'form-data'
import api_url from './api_url.json'
import TokenService from 'services/TokenService';

const API_URL = api_url.API_URL
var token = TokenService.getToken();
const UNAUTHORIZED = {
        data: {
            grant: 0
        }
    };

if ( token ) {
    setAuthToken(token);
}

axios.defaults.baseURL = API_URL;

function setAuthToken() {
    token = TokenService.getToken();
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

async function login(userData) {
    return await axios.post('/user/login/', userData)
    .catch(function (error) {
        console.log(error);
        throw error;
    });
}

async function isAuthenticated() {
    token = TokenService.getToken();
    if ( token ) {
        let response = await axios.post('/user/auth/check/', {token: token})
        .catch(function (error) {
            console.log(error);
            throw error;
        });
        if ( response.status == '200' ) {
            return 1;
        } 
        else if ( response.status == '401' ) {
            return 0;
        }
        else {
            return -1;
        }
    }
    else {
        return -1;
    }
}

async function signUp(userData) {
    return await axios.post('/user/signup/', userData)
    .catch(function (error) {
        console.log(error);
        throw error;
    });
}

async function getAllThreads() {
    return await axios.get('/forum/getallthreads/')
    .catch(function (error) {
        console.log(error);
        throw error;
    });
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

const Api = {
    setAuthToken,
    login,
    isAuthenticated,
    signUp,
    uploadImage,
}

export default Api;