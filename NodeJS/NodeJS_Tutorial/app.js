// //Node JS Basic
// const tutorial = require("./tutorial");
// console.log(tutorial.sum(1,2));
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathObject());

//-----------The Events Module & EventEmmiter Class-----------
// - event driven programming to node js

/*
//built in class
const { error } = require('console');
const EventEmmiter = require('events');
const eventEmmiter = new EventEmmiter(); //object

eventEmmiter.on('tutorial',(num1,num2) => { // two arguments (listener,function) 
    console.log("tutorial event has occurred");
    console.log(num1+num2);
});

eventEmmiter.emit('tutorial',1,2);

class Person extends EventEmmiter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let elon = new Person('Elon'); // person extends event emmiter class, instance emitter class
let zuck = new Person('Zuck');
let tata = new Person('Tata');

elon.on('name',()=>{
    console.log("My name is " + elon.name);
})

zuck.on('name',() => {
    console.log("My name is " + zuck.name);
})

tata.on('name',()=>{
    console.log("My name is "+ tata.name );
});

elon.emit('name');
zuck.emit('name');
tata.emit('name');
*/

//-------------------Working with the read line module----------------------

// const readline = require('readline'); // realine module   
// const rl = readline.createInterface({input : process.stdin, output : process.stdout});

// let num1 = Math.floor((Math.random()*10)+1);
// let num2 = Math.floor((Math.random()*10)+1);

// let answer = num1 + num2;

// rl.question(`What is ${num1} + ${num2}? \n`, 
// (userInput) => {
//     if(userInput.trim() == answer){
//         rl.close();
//     }
//     else{
//         rl.setPrompt('Incorrect response, please try again \n');
//         rl.prompt();
//         rl.on('line',(userInput)=>{
//             if(userInput.trim() == answer){
//                 rl.close();
//             }
//             else{
//                 rl.setPrompt(`Your answer of ${userInput} is incorrect, try again \n`);
//                 rl.prompt();
//             }
//         })
//     }
// });

// rl.on('close',()=>{
//     console.log('Correct!!');
// });


//-------------Working with the File System Module-I   ------------

// const fs = require('fs');
// fs.writeFile('example.txt',"This is an example.",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File successfully created.");
//         fs.readFile('example.txt','utf8',(err,file)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log(file);
//             }
//         });
//     }
// });

// fs.rename('example.txt' , 'example2.txt', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File renamed successfully.")
//     }
// });

// fs.appendFile('example2.txt','Some data being appended', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else {
//         console.log("Data appened successfully");
//     }
// });

// fs.unlink('example2.txt' , (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File deleted Successfully");
//     }
// });

//---------------Working with the File System module-II   -----------------------

//const fs = require('fs');

// fs.mkdir('tut',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         fs.writeFile('./tut/example.txt','123', (err)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log("File created successfully.")
//             }
//         } )
//     }
// });


// fs.unlink('./tut/example.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         fs.rmdir('tut',(err)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log("Folder deleted.")
//             }
//         });
//     }
// });

// fs.readdir('example',(err,files)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         for(let file of files){
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 fs.unlink('./example/'+file,(err)=>{
//                     if(err){
//                         console.log(err);
//                     }
//                     else{
//                         console.log("File deleted succesfully");
//                     }
//                 });
//             }
//         }
//     }
// });


//-----------Working with readable and writeable streams-----------------

// const fs = require('fs');
// const readStream = fs.createReadStream('./example.txt','utf8');
// const writeStream = fs.createWriteStream('example2.txt');
// readStream.on('data',(chunk)=>{ //no need to wait for whole file to load.
//     writeStream.write(chunk);
// });

/*
//-------------Why you should use streams----------------


1. What happens when we try to read large file by readFile system?
--> we get an error "File size is greater than Buffer" 
read file uses a full buffer. (i need the buffer as same size as file size).
but if we use readStream (as expmple above for large file) it uses buffer too but,
it uses very very small buffer. in that case we are reading a file in chunks.
when event occur we are getting a chunk of the file (not attempting to read entire file at once).
stream uses smaller buffer size which is memory efficient. data to be read and written in chunks.

*/

//------------------------Pipes and Pipe Chaining--------------------------
/**send readable string to its destination */

//example of compressing the file
// const fs = require('fs');
// const zlib = require('zlib'); //compressing file
// const gzip = zlib.createGzip(); //transformed string
// const readStream = fs.createReadStream('./example.txt','utf8');
// const writeStream = fs.createWriteStream('./example3.txt.gz');
// readStream.pipe(gzip).pipe(writeStream); // gzip manuplates data and compress it


//example og uncompress the file
// const fs = require('fs');
// const zlib = require('zlib');
// const gunzip = zlib.createGunzip();
// const readStream = fs.createReadStream('./example3.txt.gz');
// const writeStream = fs.createWriteStream('uncompressed.txt');
// readStream.pipe(gunzip).pipe(writeStream);

//------------------------Creating a HTTP server usiing HTTP module----------------------------
// const http = require('http');
// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.write('Hello World!, \nThis is Parth Nakum');
//         res.end(); // send back to user
//     }
//     else{
//         res.write('Using some other domain');
//         res.end();
//     }  
// });

// server.listen(3000);

/*
//---------Serving static files with HTTP and File System Modules-----------

const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    //for html file
    // const readStreamHTML = fs.createReadStream('./static/index.html');
    // res.writeHead(200,{'Content-Type' : 'text/html'}); //expected data
    // readStreamHTML.pipe(res);

    // //for json file
    // const readStreamJSON = fs.createReadStream('./static/stat.json');
    // res.writeHead(200,{'Content-Type' : 'application/json'});
    // readStreamJSON.pipe(res);

    //for image
    const readStreamIMAGE = fs.createReadStream('./static/ironman2.jpg');
    res.writeHead(200,{'Content-Type': 'image/jpg'});
    readStreamIMAGE.pipe(res);

}).listen(3000);


*/
//---------------------Create package.json Using npm init----------------------
//paackage.json to hold all meta data (name of project, version no, etc)
//npm init

//---------------------install packges using npm---------------------------
//package: reusable code that we can include within our own application
// npm install lodash         (i - install | lodash - package name)
// npm uninstall lodash

// const _ = require('lodash');
// let example = _.fill([1,2,3,4,5],"parth", 1, 4);

// console.log(example);

/*
//------------------Semantic Versioning--------------------
// standard that lot of Node JS packages follows & allows what kind of changes have occcured
// "^4.17.11" // major.minor.patch  
//patch - bug fixes
//minor - minor update, adds new functionality (Non breacking change update)
//major - major update, breacking change (not competable with old version)
// ^ - 4.x.x  --  go ahead and download x.x new updates (minor.patch)
// ~ - 4.17.x  --  do not update that package
// no sign - only version we have

*/