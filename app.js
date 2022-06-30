// includes framework of js --Express--
const express = require('express');

// Creating an object instance.
const server = express();

// Setting Up the port Address.
server.listen('5000',()=>{console.log('Server is conected!!');});

server.use(express.static(__dirname));