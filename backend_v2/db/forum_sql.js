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



        pool.query("SELECT pid, user_name, title, text FROM Post_Preview WHERE tid = ?",[threadId], (err, results) => {
            if (err) {

                return reject(err);
            }
            return resolve(results);
        })
    })
}



module.exports = forum;