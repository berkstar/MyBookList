const pool = require("../db_config");


let user = {};

user.getAll = () => {

    return new Promise((resolve, reject) => {

        pool.query("SELECT * FROM auth", (err, results) => {
            if (err) {

                return reject(err);
            }
            return resolve(results);
        })
    })

}