const express = require ('express');
const server = express();

server.get('/olha', (req, res) => {
    res.send('Vc entrou');
});

server.listen(3000, ()=>{
    console.log('API ONLINE');
});