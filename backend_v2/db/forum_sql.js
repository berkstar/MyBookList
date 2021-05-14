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

forum.followThread = (thread_id, user_id) =>    {
    return new Promise((resolve, reject) => {

        pool.query("INSERT INTO follows VALUES (?,?)",[user_id, thread_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

forum.unFollowThread = (thread_id, user_id) =>    {
    return new Promise((resolve, reject) => {

        pool.query("DELETE FROM follows WHERE user_id = ? AND tid = ?",[user_id, thread_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

forum.listFollowedThreads = (user_id) => {
    return new Promise((resolve, reject) => {


        pool.query("SELECT tid, name, context FROM follows JOIN Thread USING(tid) WHERE user_id = ? ORDER BY name",[user_id], (err, results) => {
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

forum.getPost = (post_id) => {
    return new Promise((resolve, reject) => {


        pool.query("SELECT pid, user_name, title, text, like_count, DATE_FORMAT(date, '%e %M %Y') as date FROM Post_Preview WHERE pid = ?",[post_id], (err, results) => {
            if (err) {

                return reject(err);
            }
            return resolve(results);
        })
    })
}

forum.deletePost = (pid, user_id) =>    {
    return new Promise((resolve, reject) => {

        pool.query("DELETE FROM Post WHERE user_id = ? AND pid = ?",[user_id, pid], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

forum.addPost = (thread_id, user_id, post_title, post_text) =>    {
    return new Promise((resolve, reject) => {


        pool.query("INSERT INTO Post (tid, user_id, title, text) VALUES (?,?,?,?)",[thread_id, user_id, post_title, post_text], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })


    })
}

forum.updatePost = (user_id, pid, title, text) => {
    return new Promise((resolve, reject) => {
        
        pool.query("UPDATE Post SET title = ?, text = ? WHERE pid = ? and user_id = ?",[title,text,pid, user_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

forum.likePost = (pid) => {
    return new Promise((resolve, reject) => {
        
        pool.query("UPDATE Post SET like_count = like_count + 1 WHERE pid = ?",[pid], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

forum.getComments = (post_id) => {
    return new Promise((resolve, reject) => {


        pool.query("CALL PostComments_procedure(?)",[post_id], (err, results) => {
            if (err) {

                return reject(err);
            }
            console.log(results[0]);
            return resolve(results[0]);
        })
    })
}


module.exports = forum;