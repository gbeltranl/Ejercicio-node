const express = require('express');

const app = express();

app.get('/', function (req,res){
    res.send({name: 'Gabriel'});
});

app.listen(8081, () => console.log('Listening on port 8081'));