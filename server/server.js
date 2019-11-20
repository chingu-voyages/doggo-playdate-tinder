const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');


//Mock Database
const database = {
    users: [
        {
            id:'123',
            name: 'john',
            email: 'john@gmail.com',
            password: 'cookies',
            joined: new Date()
        },
        {
            id:'124',
            name: 'sally',
            email: 'sally@gmail.com',
            password: 'bananas',
            joined: new Date()
        },
    ]
}
//------------

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

app.post('/signin', (req, res) => {
    const { email, password } = req.body;

//DB-ORM will be replaced
    if (email === database.users[0].email &&
        password === database.users[0].password) {
            res.json('success')
        } else {
            res.status(400).json('error logging in')
        }
//------------
})


app.post('/register', (req, res) => {
    const {email, name, password} = req.body
//DB-ORM will be replaced
    database.users.push({
        id:'125',
        name: name,
        email: email,
        password: password,
        joined: new Date()
    })
    res.json(database.users[database.users.length-1])
//--------------
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
//DB-ORM will be replaced
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            return res.json(user);
        }
    })
    if (!found) {
        res.status(400).json('not found')
    }
//----------------
})

app.listen(port, error => {
    if (error) throw error;
    console.log('server is running on port' + port);
})
