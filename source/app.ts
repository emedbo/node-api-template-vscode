/// <reference path="../typings/browser.d.ts" />
import express = require('express');
import bodyParser = require('body-parser');



var app = express();
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.send('API says time is ' + new Date());
});

// Routes
import fib = require('./routes/fib.route');

app.use('/fib', fib);

var server = app.listen(3000, () =>{
    var add = server.address().address;
    
    console.log(`Listening to http://${server.address().address}:${server.address().port}`);    
})
