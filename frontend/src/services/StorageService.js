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

function setUserType(userType) {
    localStorage.setItem('u_type', JSON.stringify(userType));
}

function getUserType() {
    return JSON.parse(localStorage.getItem('u_type'));
}

const StorageService = {
    getToken,
    setToken,
    getUserId,
    setUserId,
    getUserType,
    setUserType,
}

export default StorageService;