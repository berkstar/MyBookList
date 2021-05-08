function getToken() {
    return JSON.parse(localStorage.getItem('Authorization'));
}

function setToken(userToken) {
    localStorage.setItem('Authorization', JSON.stringify(userToken));
}


const TokenService = {
    getToken,
    setToken
}

export default TokenService;