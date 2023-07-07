// //Node JS Basic
// const tutorial = require("./tutorial");
// console.log(tutorial.sum(1,2));
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathObject());

//-----------The Events Module & EventEmmiter Class-----------
// - event driven programming to node js

//built in class
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

let elon = new Person('Elon'); // persom extends event emmiter class, instance emitter class
let zuck = new Person('Zuck');

elon.on('name',()=>{
    console.log("My name is " + elon.name);
})

zuck.on('name',() => {
    console.log("My name is " + zuck.name);
})

elon.emit('name');
zuck.emit('name');