const express = require('express');
const app = express();

app
    .route('/home')
    .get((req, res, next) => {
        res.type('text/html');
        res.write('<!DOCTYPE html>');
        next();
    })
    .get((req, res, next) => {
        res.end(`
            <html lang="en">
                <head>
                <meta charset="utf-8">
                <title>Dungeon App</title>
                </head>
                <body role="application">
                    <form method="post" action="/home">
                        <input type="text" />
                        <button type="submit">Send</button>
                    </form>
                </body>
            </html>
        `)
    })
    .post((req, res, next) => {
        res.send('Got it!');
    })

app.listen(
    1337,
        () => console.log('webServer running on port 1337'),
)