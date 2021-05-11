const pool = require("../db_config");


let forum = {};


//Listing all threads.
forum.listThreads = () => {
    return new Promise((resolve, reject) => {

        pool.query("SELECT * FROM Thread", (err, results) => {
            if (err) {

                return reject(err);
            }
            return resolve(results);
        })
    })
}

//
forum.listPosts = (threadId) => {
    return new Promise((resolve, reject) => {



        pool.query("SELECT p.pid, u.user_name, p.title, p.text FROM Post p, User u WHERE p.tid = ? and u.user_id = p.user_id",[threadId], (err, results) => {
            if (err) {

                return reject(err);
            }
            return resolve(results);
        })
    })
}



module.exports = forum;