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


book.addProgress = (page_num, book_id) => {
    return new Promise((resolve, reject) => {
        
        pool.query("INSERT INTO Progress (page_number) SELECT ? FROM DUAL WHERE EXISTS (SELECT b.book_id FROM Book b WHERE b.pages >= ? AND b.book_id = ?)",[page_num, page_num, book_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}


book.addProgressMark = (user_id, book_id, pro_id) => {
    return new Promise((resolve, reject) => {
        
        pool.query("INSERT INTO mark_progress (user_id, book_id, pro_id) VALUES (?,?,?)",[user_id, book_id, pro_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}   


book.getMyProgressBooks = (user_id) => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM book_progress_rating_user_view WHERE user_id = ?",[user_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}



book.updateProgress = (page_num,pro_id,user_id) => {
    return new Promise((resolve, reject) => {
        pool.query("UPDATE Progress SET page_number = ?, date = CURRENT_TIMESTAMP() WHERE EXISTS( SELECT book_id FROM mark_progress join Book USING (book_id) WHERE pro_id = ? and pages >= ? and user_id = ? ) AND pro_id = ?",[page_num, pro_id, page_num, user_id, pro_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}


book.deleteProgress = (user_id, pro_id) => {
    return new Promise((resolve, reject) => {
        pool.query("DELETE FROM Progress WHERE EXISTS( SELECT pro_id FROM mark_progress WHERE pro_id = ? and user_id = ? ) AND pro_id = ?",[pro_id ,user_id, pro_id], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}


book.addBookReview = (user_id, book_id,rating,review) => {
    return new Promise((resolve, reject) => {
        
        pool.query("INSERT INTO review (user_id, book_id, rating, comment) VALUES (?,?,?,?)",[user_id, book_id, rating, review], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}   



book.createBookList = (user_id, list_name) => {
    return new Promise((resolve, reject) => {
        
        pool.query("INSERT INTO Book_list (user_id, name) VALUES (?,?)",[user_id, list_name], (err, results) => {
            if (err &&err.code != "ER_DUP_ENTRY") {
                return reject(err);
            }
            return resolve(results);
        })
    })
}   

module.exports = book;