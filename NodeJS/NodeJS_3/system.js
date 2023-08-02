//---------------------WEEK 3--------------------------------


//---------------------Task 1-------------------------------
/*
OS Information:

Write a program that uses the os module to display the current user's username, home directory, and operating system platform.

*/

// const os = require('os');

// function osInfo(){
//     //username
//     const username = os.userInfo().username;

//     //directory of current user
//     const homeDirectory = os.homedir();

//     //operating system platform
//     const platform = os.platform();

//     return {username, homeDirectory, platform};
// }

// const {username, homeDirectory, platform} = osInfo();
// console.log("User Name: ", username);
// console.log("Home Directory: ", homeDirectory);
// console.log("Opearating System Platform: ", platform);


/*
Create a function that utilizes the os module to display the total system memory, free memory, and the percentage of free memory available
*/

// const os = require('os');

// function memoryInfo(){
//     const totalMemory = os.totalmem();
//     const freeMemory = os.freemem();
//     const percentageFree = ((freeMemory/totalMemory)*100);

//     return {totalMemory,freeMemory,percentageFree};
// }

// const {totalMemory, freeMemory, percentageFree} = memoryInfo();

// console.log("Total System Memory: ",totalMemory, "bytes");
// console.log("Free Memory: ",freeMemory, "bytes");
// console.log("Percentage of Free Memory: ", (percentageFree).toFixed(2), "%");


/*
//-----------------------Task 2-------------------------------
//Experiment with chalk, upper-case any other External modules
*/




/*
//-----------------------Task 3----------------------------
//create your own custom module and import/export it to main module

 */

const myModule = require('./myModule');

const sum = myModule.addNumbers(21,21);
const product = myModule.multiplyNumbers(21,21);

console.log("Sum: ", sum);
console.log("Product: ", product);