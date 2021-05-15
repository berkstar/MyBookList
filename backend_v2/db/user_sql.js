const pool = require("../db_config");


let user = {};

user.addUser = (username, name, email, password) => {
    return new Promise((resolve, reject) => {
        
        pool.query("INSERT INTO User (user_name, email, name, password) VALUES (?,?,?,?)",[username, email, name, password], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

user.addLibrarian = (user_id) => {
    return new Promise((resolve, reject) => {
        
        pool.query("INSERT INTO Librarian (user_id) VALUES (?)",[user_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

user.addAuthor = (user_id) => {
    return new Promise((resolve, reject) => {
        
        pool.query("INSERT INTO Author (user_id) VALUES (?)",[user_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

user.addFriend = (user_id, friend_id) =>    {
    return new Promise((resolve, reject) => {
        
        // pool.query("INSERT INTO friend_of (user_id, friend_id) VALUES (?,?)",[user_id, friend_id], (err, results) => {
        //     if (err &&err.code != "ER_DUP_ENTRY") {
        //         return reject(err);
        //     }
        //     console.log(results)
        //     return resolve(results);
        // })


        pool.query("INSERT INTO friend_of (user_id , friend_id, accepted) (SELECT ? , ?, 1 FROM dual WHERE NOT EXISTS (SELECT * FROM friend_of WHERE friend_id = ? and user_id = ?))",[user_id, friend_id, user_id, friend_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })


    })
}

user.delFriend = (user_id, friend_id) =>    {
    return new Promise((resolve, reject) => {
        
        pool.query("DELETE FROM friend_of WHERE (user_id = ? AND friend_id = ?) OR (friend_id = ? AND user_id = ?)",[user_id, friend_id, user_id, friend_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })


    })
}

user.getFriends = (user_id) => {
    return new Promise((resolve, reject) => {



        pool.query("(SELECT u.user_id, u.user_name, u.name, u.biography FROM friend_of f, User u WHERE f.user_id = ? and u.user_id = f.friend_id and  f.accepted = 1) UNION "+
        "(SELECT u.user_id, u.user_name, u.name, u.biography FROM friend_of f, User u WHERE f.friend_id = ? and u.user_id = f.user_id and f.accepted = 1)",[user_id, user_id], (err, results) => {
            if (err) {

                return reject(err);
            }
            return resolve(results);
        })
    })
}

user.getIncomingRequests = (user_id) => {
    return new Promise((resolve, reject) => {

        pool.query("SELECT * FROM incoming_request_view WHERE receiver_id = ?",[user_id], (err, results) => {
            if (err) {

                return reject(err);
            }
            return resolve(results);
        })
    })
}

user.getOutgoingRequests = (user_id) => {
    return new Promise((resolve, reject) => {

        pool.query("SELECT * FROM outgoing_request_view WHERE sender_id = ?",[user_id], (err, results) => {
            if (err) {

                return reject(err);
            }
            return resolve(results);
        })
    })
}

user.acceptRequest = (user_id, friend_id) => {
    return new Promise((resolve, reject) => {
        
        pool.query("UPDATE friend_of SET accepted = 1 WHERE user_id = ? AND friend_id = ?",[friend_id, user_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}



user.getUserInfo = (user_id) => {
    return new Promise((resolve, reject) => {

        pool.query("SELECT * FROM User u JOIN UserType_View ut USING (user_id) WHERE user_id = ?",[user_id], (err, results) => {
            if (err) {

                return reject(err);
            }
            return resolve(results);
        })
    })
}

user.verifyAuthor = (user_id, author_id) => {
    return new Promise((resolve, reject) => {
        
        pool.query("UPDATE Author SET is_verified = 1, verifier_id = ? WHERE user_id = ?",[user_id, author_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

user.getUnverifiedAuthors = () => {
    return new Promise((resolve, reject) => {

        pool.query("SELECT user_id, user_name, name, email, biography FROM Author a JOIN User u USING(user_id) WHERE is_verified = 0", (err, results) => {
            if (err) {

                return reject(err);
            }
            return resolve(results);
        })
    })
}

user.getVerifiedAuthors = () => {
    return new Promise((resolve, reject) => {

        pool.query("SELECT user_id, user_name, name, email, biography FROM Author a JOIN User u USING(user_id) WHERE is_verified = 1", (err, results) => {
            if (err) {

                return reject(err);
            }
            return resolve(results);
        })
    })
}

user.setBiography = (user_id, biography) => {
    return new Promise((resolve, reject) => {
        
        pool.query("UPDATE User SET biography = ? WHERE user_id = ?",[biography, user_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

user.setEmail = (user_id, email) => {
    return new Promise((resolve, reject) => {
        
        pool.query("UPDATE User SET email = ? WHERE user_id = ?",[email, user_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

user.setName = (user_id, name) => {
    return new Promise((resolve, reject) => {
        
        pool.query("UPDATE User SET name = ? WHERE user_id = ?",[name, user_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

user.setPassword = (user_id, password) => {
    return new Promise((resolve, reject) => {
        
        pool.query("UPDATE User SET password = ? WHERE user_id = ?",[password, user_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

user.setUsername = (user_id, username) => {
    return new Promise((resolve, reject) => {
        
        pool.query("UPDATE User SET user_name = ? WHERE user_id = ?",[username, user_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

//For listing all users that are non-friend expect itself
user.getNonFriends = (user_id) => {
    return new Promise((resolve, reject) => {

        pool.query("SELECT user_id, user_name, name, email, biography FROM nonFriend_view WHERE check_user = ?;",[user_id], (err, results) => {
            if (err) {

                return reject(err);
            }
            return resolve(results);
        })
    })
}


//For Login
user.loginUser= (username,password) => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM User WHERE user_name = ? and password = ?;",[username, password], (err, results) => {
            if (err) {

                return reject(err);
            }
            return resolve(results);
        })
    })
}

user.checkUserType= (user_id) => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM UserType_View WHERE user_id = ?;",[user_id], (err, results) => {
            if (err) {

                return reject(err);
            }
            return resolve(results);
        })
    })
}


// Task is used instead of this.
// //Deletes old auth tokens.
// user.deleteOldAuth = () => {
//     return new Promise((resolve, reject) => {

//         let date = new Date();

//         pool.query("DELETE FROM auth WHERE date < ?",[date], (err, results) => {
//             if (err) {

//                 return reject(err);
//             }
//             console.log("Old Auth Deleted=>" + results.affectedRows);
//             return resolve(results);
//         })
//     })
// }


//For Checking Auth token validity.
user.checkAuth = (authCode) => {
    return new Promise((resolve, reject) => {

        // user.deleteOldAuth() // Calls delete Auth Function for old auths.

        pool.query("SELECT * FROM auth WHERE token = ?",[authCode], (err, results) => {
            if (err) {

                return reject(err);
            }
            console.log("Auth Found=>" + results.length);
            return resolve(results);
            
        })
    })
}


user.checkAuthType = (authCode, user_id) => {
    return new Promise((resolve, reject) => {


        pool.query("SELECT * FROM auth WHERE token = ? and user_id = ?",[authCode, user_id], (err, results) => {
            if (err) {

                return reject(err);
            }
            console.log("Auth with uid Found=>" + results.length);
            return resolve(results);
            
        })
    })
}


user.checkAuthLibrarian = (authCode, user_id) => {
    return new Promise((resolve, reject) => {


        pool.query("SELECT * FROM auth a JOIN Librarian l USING(user_id) WHERE token = ? and user_id = ?",[authCode, user_id], (err, results) => {
            if (err) {

                return reject(err);
            }
            console.log("AuthLibrarian with uid Found=>" + results.length);
            return resolve(results);
            
        })
    })
}

user.checkAuthAuthor = (authCode, user_id) => {
    return new Promise((resolve, reject) => {


        pool.query("SELECT * FROM auth a JOIN Author l USING(user_id) WHERE token = ? and user_id = ? and is_verified = 1",[authCode, user_id], (err, results) => {
            if (err) {

                return reject(err);
            }
            console.log("AuthAuthor with uid Found=>" + results.length);
            return resolve(results);
            
        })
    })
}

//Adds new Auth Token.
user.addAuth = (authCode, user_id) => {
    return new Promise((resolve, reject) => {


        pool.query("INSERT INTO auth VALUES (ADDDATE(CURRENT_TIMESTAMP(), INTERVAL 1 HOUR),?,?)",[authCode, user_id], (err, results) => {
            if (err) {

                return reject(err);
            }
            return resolve(results);
        })
    })
}





module.exports = user;