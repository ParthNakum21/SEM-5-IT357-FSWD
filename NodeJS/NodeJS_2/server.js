/*Setting up a basic HTTP server: Create a Node.js application that listens for incoming HTTP
requests and responds with a simple message. */


//--------------------Task 1-------------------------------
const http = require('http');

//create http server
const server = http.createServer((req,res)=>{
    //set response http header with status code and content type
    res.writeHead(200,{'Content-type':'text/plain'});

    //send message as response
    res.end("Hello, World! \nThis is Parth Nakum");

});

//start server and listen on port 3000
server.listen(3000, ()=>{
    console.log('Server is running and listening on port 3000');
});



// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// //create http server
// const server = http.createServer((req,res)=>{

// });

