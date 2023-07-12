// //Node JS Basic
// const tutorial = require("./tutorial");
// console.log(tutorial.sum(1,2));
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathObject());

//-----------The Events Module & EventEmmiter Class-----------
// - event driven programming to node js

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

const fs = require('fs');

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

fs.readdir('example',(err,files)=>{
    if(err){
        console.log(err);
    }
    else{
        for(let file of files){
            if(err){
                console.log(err);
            }
            else{
                fs.unlink('./example/'+file,(err)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log("File deleted succesfully");
                    }
                });
            }
        }
    }
})