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

user.addFriend = (user_id, friend_id) =>    {
    return new Promise((resolve, reject) => {
        
        // pool.query("INSERT INTO friend_of (user_id, friend_id) VALUES (?,?)",[user_id, friend_id], (err, results) => {
        //     if (err &&err.code != "ER_DUP_ENTRY") {
        //         return reject(err);
        //     }
        //     console.log(results)
        //     return resolve(results);
        // })


        pool.query("INSERT INTO friend_of (user_id , friend_id) (SELECT ? , ? FROM dual WHERE NOT EXISTS (SELECT * FROM friend_of WHERE friend_id = ? and user_id = ?))",[user_id, friend_id, user_id, friend_id], (err, results) => {
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

//For listing all users that are non-friend expect itself
user.getUsers = (user_id) => {
    return new Promise((resolve, reject) => {


        pool.query("SELECT u2.user_id, u2.user_name, u2.name, u2.biography FROM User u1, User u2 WHERE NOT EXISTS ("+
        "SELECT 1 FROM friend_of f WHERE f.user_id = u1.user_id AND f.accepted = 1 AND f.friend_id = u2.user_id) AND NOT EXISTS"+
        "(SELECT 1 FROM friend_of f WHERE f.user_id = u2.user_id AND f.accepted = 1 AND f.friend_id = u1.user_id) AND u1.user_id <> u2.user_id "+
        "AND u1.user_id = ?;",[user_id], (err, results) => {
            if (err) {

                return reject(err);
            }
            return resolve(results);
        })
    })
}


//For Checking Auth token.
user.checkUser= (username,password) => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM User WHERE user_name = ? and password = ?",[username, password], (err, results) => {
            if (err) {

                return reject(err);
            }
            return resolve(results);
        })
    })
}

//Deletes old auth tokens.
user.deleteOldAuth = () => {
    return new Promise((resolve, reject) => {

        let date = new Date();

        pool.query("DELETE FROM auth WHERE date < ?",[date], (err, results) => {
            if (err) {

                return reject(err);
            }
            console.log("Old Auth Deleted=>" + results.affectedRows);
            return resolve(results);
        })
    })
}


//For Checking Auth token validity.
user.checkAuth = (authCode) => {
    return new Promise((resolve, reject) => {

        user.deleteOldAuth() // Calls delete Auth Function for old auths.

        pool.query("SELECT * FROM auth WHERE token = ?",[authCode], (err, results) => {
            if (err) {

                return reject(err);
            }
            console.log("Auth Found=>" + results.length);
            return resolve(results);
            
        })
    })
}

//Adds new Auth Token.
user.addAuth = (date,authCode) => {
    return new Promise((resolve, reject) => {
        pool.query("INSERT INTO auth VALUES (?,?)",[date,authCode], (err, results) => {
            if (err) {

                return reject(err);
            }
            return resolve(results);
        })
    })
}





module.exports = user;