function getToken() {
    return JSON.parse(localStorage.getItem('Authorization'));
}

function setToken(userToken) {
    localStorage.setItem('Authorization', JSON.stringify(userToken));
}

function getUserId() {
    return JSON.parse(localStorage.getItem('uid'));
}

function setUserId(userId) {
    localStorage.setItem('uid', JSON.stringify(userId));
}

const StorageService = {
    getToken,
    setToken,
    getUserId,
    setUserId
}

export default StorageService;