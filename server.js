const express = require('express');
const app = express();
const bp = require('body-parser');
app.use(bp.urlencoded({extended:false}));
app.use(express.static('client'));



app.listen('3006',()=>{console.log('server 3006 is on!')});