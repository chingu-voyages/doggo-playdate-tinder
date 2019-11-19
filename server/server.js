const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
    });
}

app.get('/', (req, res) => {
    res.send('this is working');
})

app.listen(port, error => {
    if (error) throw error;
    console.log('server is running on port' + port);
})

/*
/ --> res = this is working
/signin --> post = succss/fail
/register --> post = user
/profile/ :userId --> get = user
*/