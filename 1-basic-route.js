const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.status(200).send('Hello from dungeon');
})

app.listen(
    3000,
        () => console.log('Web server running on port 3000'),
)