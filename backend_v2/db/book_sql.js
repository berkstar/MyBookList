const pool = require("../db_config");


let book = {};


book.addBook = (title, description, genre, year, pages) => {
    return new Promise((resolve, reject) => {
        
        pool.query("INSERT INTO Book (title, description, genre, year, pages) VALUES (?,?,?,?,?)",[title, description, genre, year, pages], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

book.addRecommend = (user_id, book_id, friend_id) => {
    return new Promise((resolve, reject) => {
        
        pool.query("INSERT INTO recommend (user_id, book_id, friend_id) VALUES (?,?,?)",[user_id, book_id, friend_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

book.deleteRecommend= (user_id, book_id, friend_id) => {
    return new Promise((resolve, reject) => {
        pool.query("DELETE FROM recommend WHERE user_id = ? and book_id = ? and friend_id = ?",[user_id, book_id, friend_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

book.getIncomingRecommends = (user_id) => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT b.book_id, r.user_id, u.name as friend_name, b.title, b.genre FROM recommend r JOIN User u USING(user_id) JOIN Book b USING (book_id) WHERE r.friend_id = ? ORDER BY b.title",[ user_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

book.getOutgoingRecommends = (user_id) => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT b.book_id, r.friend_id, u.name as friend_name, b.title, b.genre FROM recommend r JOIN User u ON u.user_id = r.friend_id JOIN Book b USING (book_id) WHERE r.user_id = ? ORDER BY b.title",[ user_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}


book.updateBook = (book_id, title, description, genre, year, pages, user_id) => {
    return new Promise((resolve, reject) => {
        pool.query("UPDATE book_publishes_view SET title = ?, description = ?, genre = ?, year = ?, pages = ? WHERE book_id = ? and author_id = ?",[title, description, genre, year, pages, book_id, user_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

book.delBook = (book_id) => {
    return new Promise((resolve, reject) => {
        pool.query("DELETE FROM Book WHERE book_id = ?",[book_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}


book.checkBook = (user_id, book_id) => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT book_id FROM Book WHERE book_id = ? AND author_id = ?",[book_id, user_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}


book.searchBookTitle = (keyword) => {
    return new Promise((resolve, reject) => {
        console.log(keyword)
        pool.query("SELECT * FROM book_series_rating_view WHERE title LIKE ?",[keyword], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}


book.getMyBooks = (user_id) => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM book_publishes_view WHERE author_id = ? ORDER BY title",[user_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

book.linkPublisher = (user_id, book_id) => {
    return new Promise((resolve, reject) => {
        
        pool.query("INSERT INTO publishes (author_id, book_id) VALUES (?,?)",[user_id, book_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}







module.exports = book;