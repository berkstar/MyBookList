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
forum.listPosts = (threadTitle) => {
    return new Promise((resolve, reject) => {



        pool.query("SELECT p.pid, u.user_name, p.title, p.text FROM Post p, Thread t, User u WHERE t.tid = p.tid and u.user_id = p.user_id and t.name = ?",[threadTitle], (err, results) => {
            if (err) {

                return reject(err);
            }
            return resolve(results);
        })
    })
}



module.exports = forum;