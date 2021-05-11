function getToken() {
    return JSON.parse(localStorage.getItem('Authorization'));
}

function setToken(userToken) {
    localStorage.setItem('Authorization', JSON.stringify(userToken));
}

function getUserId() {
    return JSON.parse(localStorage.getItem('uid'));
}


const StorageService = {
    getToken,
    setToken,
    getUserId
}

export default StorageService;