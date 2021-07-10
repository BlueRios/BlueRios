const { SSL_OP_SINGLE_DH_USE } = require('constants');
const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/index.html')); 
 });
 
 app.use(express.static(path.resolve(__dirname, './public')));

app.listen(3000, () => {
    console.log("Servidor corriendo");
});