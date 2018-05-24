const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo app'
    });
});

app.get('/users', (req, res) => {
    res.send([{
        name: 'a',
        age: 1
    },{
        name: 'b',
        age: 2
    }]);
});


app.listen(3001, () => {
    console.log('server is up');
});

module.exports.app = app;