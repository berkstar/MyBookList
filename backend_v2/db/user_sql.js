const pool = require("../db_config");


let user = {};

user.addUser = (username, email, password) => {
    return new Promise((resolve, reject) => {
        pool.query("INSERT INTO User (user_name, email, name, password) VALUES (?,?,?,?)",[username,email,username,password], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
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