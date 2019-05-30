const express = require('express');
const app = express();

app.get('/one', (req, res, next) => {
    res.type('text/plain');
    res.write('Hello ');
    next();
})

app.get('/one', (req, res, next) => {
    res.status(200).end('dead adventurer');
})

app.get('/two', (req, res, next) => {
    res.type('text/plain');
    res.write('Hello ');
    next();
},
    (req, res, next) => {
        res.status(200).end('Soon to be dead adventurer!');
    }
)

app.listen(
    1337,
    () => console.log('Web Server running on port 1337'),
)