/*Setting up a basic HTTP server: Create a Node.js application that listens for incoming HTTP
requests and responds with a simple message. */

/*
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

*/

/*
//----------------Task-X----------------------------
const http = require('http');
const fs = require('fs');
const path = require('path');

//create http server
const server = http.createServer((req,res)=>{
    //parse the query string from the req url
    const urlParts = new URL(req.url,`http://${req.headers.host}`);
    const imageName = urlParts.searchParams.get('image');

    //check for image query paramere
    if(imageName){
        //read image file
        const imagePath = path.join(__dirname,'ironman.png');
        fs.readFile(imagePath,(err,data)=>{
            if(err){
                res.writeHead(404,{'Content-Type':'text/plain'});
                res.end('image not found');
                //console.log(err);
            }
            else{
                res.writeHead(200,{'Content-Type':'image/png'});
                res.end(data);
            }
        });
    }
    else{
        res.writeHead(400,{'Content-Type':'text/plain'});
        res.end('Missing image query parameter');
    }
});

//start server & listen on port 3000
server.listen(3000,()=>{
    console.log("Server is running and listening at port 3000...")
});

*/

//---------------Task-2---------------------

// const http = require('http');

// const server = http.createServer((req,res)=>{
//     //set respone HTTP header with a status code and content type
//     res.setHeader('Content-Type','text/plain');

//     //handle GET method
//     if(req.method === 'GET'){
//         if(req.url === '/'){
//             res.statusCode = 200;
//             res.end('This is a GET method \nParth');
//         }
//         else{
//             res.statusCode = 404;
//             res.end('404 not found');
//         }
//     }

//     //handle POST method
//     if(req.method === 'POST'){
//         if(req.url === '/'){
//             res.statusCode = 201;
//             res.end('This is a POST method');
//         }
//         else{
//             res.statusCode = 404;
//             res.end('404 not found');
//         }
//     }
// });

// server.listen(3000,()=>{
//     console.log("Server is running and listening on port 3000");
// })
