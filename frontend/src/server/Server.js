const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json())

app.use('/user/login', (req, res) => {
    var response;
    if(req.body.username == 'admin' && req.body.password == '1') {
        response = {
            token: 'test123',
            grant: 1
        }
    }
    else {
        response = {
            token: '',
            grant: 0
        }
    }
    res.send(response);
});

app.use('/user/auth/check', (req, res) => {
    var response;
    if(req.body.token == 'test123') {
        response = {
            grant: 1
        }
    }
    else {
        response = {
            grant: 0
        }
    }
    res.send(response);
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/user/login'));