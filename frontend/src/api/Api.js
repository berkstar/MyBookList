import axios from 'axios';
import FormData from 'form-data'
import server from 'server/Server.json'
import TokenService from 'services/TokenService';

const API_URL = server.API_URL
var token = TokenService.getToken();

if ( token ) {
    setAuthToken(token);
}

axios.defaults.baseURL = API_URL;

function setAuthToken() {
    token = TokenService.getToken();
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

async function login(userData) {
    return await axios.post('/user/login/', userData);
}

async function isAuthenticated() {
    token = TokenService.getToken();
    if ( token ) {
        return await axios.post('/user/auth/check/', {token: token});
    }
    else {
        return {
            data: {
                grant: 0
            }
        };
    }
}

async function signUp(userData) {
    return await axios.post('/user/signup/', userData);
}

async function getCities(searchText) {
    return await axios.get('/city/search/' + searchText + "/");
}

async function getAllCities() {
    return await axios.get('/city/all/');
}

async function createGroup(groupData) {
    return await axios.post('group/create/', groupData);
}

async function createEvent(eventData) {
    return await axios.post('event/create/', eventData);
}

async function getEvents(start_time, end_time, searchText) {
    if (searchText)
        return await axios.get('event/near/' + start_time + '/' + end_time + '/' + searchText + '/');
    else
        return await axios.get('event/near/' + start_time + '/' + end_time + '//');
}

async function getGroups(searchText) {
    if (searchText)
        return await axios.get('group/search/city/' + searchText + '/');
    else
        return await axios.get('group/search/city//');
}

async function getEventDetails(id) {
    return await axios.get('event/info/' + id + '/');
}

async function getGroupDetails(id) {
    return await axios.get('group/info/' + id + '/');
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

async function getProfileData(userId) {
    if (userId) {
        return await axios.get('user/profile/' + userId + '/');
    }
    return await axios.get('user/myprofile/');
}

async function getAllCategories() {
    return await axios.get('group/category/all/');
}

async function getUserAdminGroups(userId) {
    if (userId) {
        return await axios.get('group/userin/admin/' + userId + '/');
    }
    return await axios.get('group/userin/admin/self/');
}

async function getAllGroupMembers(id) {
    return await axios.get('group/members/' + id + '/');
}

async function getAllAttendees(id) {
    return await axios.get('event/attend/' + id + '/');
}

async function getImage(imagePath) {
    return API_URL + '/images/' + imagePath;
}

async function uploadProfilePicture(profilePictureURL) {
    return await axios.post('user/profile_picture/', { image_path: profilePictureURL });
}

async function attendEvent(event_id) {
    return await axios.post('event/attend/', { event_id })
}

async function sendMessage(message) {
    return await axios.post('messaging/pm/send/', message)
}

async function sendGroupMessageFromUser(group_id, message) {
    return await axios.post('messaging/gm/send/', { group_id, message })
}

async function getMessagesBetween(sender) {
    return await axios.get('messaging/pm/all/' + sender + '/');
}

async function getMessagePreviews() {
    return await axios.get('messaging/pm/list/');
}

async function sendComment(comment) {
    return await axios.post('event/comment/send/', comment);
}

async function getComments(event_id) {
    return await axios.get('event/comment/all/' + event_id + '/');
}

async function getFriends() {
    return await axios.get('user/friends/');
}

async function sendFriendRequest(request) {
    return await axios.post('user/friends/add/', request);
}

async function getFriendRequests() {
    return await axios.get('user/friends/requests/');
}

async function acceptFriendRequests(response) {
    return await axios.post('user/friends/response/', response);
}

async function checkFriend(id) {
    return await axios.get('user/friends/check/' + id + '/');
}

async function removeFriend(friend_id) {
    return await axios.post('user/friends/check/', { friend_id });
}

async function getUserEvents() {
    return await axios.get('event/attending/list/');
}

async function getMemberStatus(id) {
    return await axios.get('group/member/status/' + id + '/');
}

async function sendGroupRequest(group_id) {
    return await axios.post('group/request/join/', { group_id });
}

async function selectGroupRequest(response) {
    return await axios.post('group/member/set/', response);
}

async function getPendingRequests(id) {
    return await axios.get('group/request/list/' + id + '/');
}

async function setAsAdmin(group_id, admin_id, status, title) {
    return await axios.post('group/member/set/', { group_id, admin_id, status, title });
}

async function removeMember(group_id, member_id) {
    return await axios.post('group/member/set/', { group_id, status: -1, member_id });
}

async function sendGroupMessage(group_id, message) {
    return await axios.post('messaging/gm/send/', { group_id, message });
}

async function getGroupMessagePreviews() {
    return await axios.get('messaging/gm/list/');
}

async function getGroupMessages(group_id) {
    return await axios.get('messaging/gm/all/' + group_id + '/');
}

async function getUserGroups() {
    return await axios.get('group/mymember/list/');
}

async function updateGroup(values) {
    return await axios.post('group/update/', values);
}

async function getAllEventsOfGroup(group_id){
     return await axios.get('group/events/'+ group_id + '/');
}

const Api = {
    setAuthToken,
    login,
    isAuthenticated,
    signUp,
    getCities,
    getAllCities,
    createGroup,
    getEvents,
    getEventDetails,
    uploadImage,
    getProfileData,
    getAllCategories,
    getUserAdminGroups,
    getGroupDetails,
    getAllGroupMembers,
    getAllAttendees,
    getImage,
    createEvent,
    uploadProfilePicture,
    attendEvent,
    sendMessage,
    getMessagesBetween,
    getMessagePreviews,
    getGroups,
    sendComment,
    getComments,
    getFriends,
    sendFriendRequest,
    getFriendRequests,
    acceptFriendRequests,
    checkFriend,
    removeFriend,
    getUserEvents,
    getMemberStatus,
    sendGroupRequest,
    selectGroupRequest,
    getPendingRequests,
    setAsAdmin,
    removeMember,
    sendGroupMessage,
    getGroupMessagePreviews,
    getGroupMessages,
    getUserGroups,
    sendGroupMessageFromUser,
    updateGroup,
    getAllEventsOfGroup
}

export default Api;