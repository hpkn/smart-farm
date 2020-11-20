'use strict';
var express = require('express');
var server = express();
var axios = require('axios')
var path = require('path');





/************* view engine setup **************/
server.set('views', path.join(__dirname, '/web'));
server.set('view engine', 'ejs');
server.engine('html', require('ejs').renderFile);


server.get('/', (req, res, next) => {
    axios.get('http://192.168.10.215/api').then((Response)=>{
      

        var arrData = {
            "data" : Response.data
        }
        res.render('clientList.html', arrData);
        
    }).catch((Error)=>{
        console.log(Error)
    })
   
})

module.exports = server