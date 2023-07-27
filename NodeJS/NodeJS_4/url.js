/*URL Parsing and Manipulation:
*/

/*
● Write a program that accepts a URL as user input and uses the url module to parse it.
Display the protocol, host, path, and query parameters separately.

*/

/*
const url = require('url');
const readline  = require('readline');

//readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//prompt user to enter url
rl.question('Enter URL: ', (inputURL)=>{
    const parsedURL = new URL(inputURL);

    //display the parse component
    console.log('Protocol: ', parsedURL.protocol);
    console.log('Host: ', parsedURL.host);
    console.log('Path: ', parsedURL.path);
    console.log('Query Parameter: ');
    parsedURL.searchParams.forEach((value,key) => {
        console.log(`\t${key}: ${value}`);
    });
    rl.close();
});

*/

/**
 * Implement a function that takes a base URL and a relative path as input, and uses the
url module to resolve and display the absolute URL.
 */
/*

const url = require('url');
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function resolveAbsoluteURL(baseURL,relativePath){
    const absoluteURL = url.resolve(baseURL,relativePath);
    return absoluteURL;
}

function userInput(){
    rl.question('Enter Base URL: ',(baseURL)=>{
        rl.question('Enter Relative Path: ', (relativePath)=>{
            const absoluteURL = resolveAbsoluteURL(baseURL,relativePath);
            console.log('Absolute URL: ', absoluteURL);
            rl.close()
        });
    })
}

userInput();

*/

/*

/*
// Query String Operation:
// ● Write a Node.js program that takes a URL with a query string as input and extracts the
// key-value pairs from the query string using the querystring module. The program should
// display the extracted key-value pairs as output.

const url = require('url');
const querystring = require('querystring');
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function extractQueryParams(inputURL){
    const parsedURL = url.parse(inputURL);
    const queryParams = querystring.parse(parsedURL.query);
    return queryParams;
}

function userInput(){
    rl.question('Enter URL with query string: ',(inputURL)=>{
        const queryParams = extractQueryParams(inputURL);

        console.log('Extracted key-value pairs: ');
        for(const key in queryParams){
            console.log(`${key} : ${queryParams[key]}`);
        }
        rl.close();
    });
}

userInput();

*/

/**
 * Path Operations:
● Create a program that accepts two file paths as input and uses the path module to
determine if they refer to the same file.
 */

/*
const path = require('path');
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})


function arePathEqual(filePath1,filePath2){
    const resolvePath1 = path.resolve(filePath1);
    const resolvePath2 = path.resolve(filePath2);

    return resolvePath1 === resolvePath2;
}
function userInput(){
    rl.question('Enter the First file Path: ',(filePath1)=>{
        rl.question('Enter the Second file Path: ', (filePath2)=>{
            const pathEqual = arePathEqual(filePath1,filePath2);

            if(pathEqual){
                console.log('Both file paths refer to same files');
            }
            else {
                console.log('The file paths refers to different files');
            }
            rl.close();
        });
    })

}

userInput();
*/

/**
 * ● Implement a function that accepts a file path as input and uses the path module to
extract the file extension. Display the extracted extension to the user.
 */
/*
const path = require('path');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function extractFileExtention(filePath){
    const fileExtention = path.extname(filePath);
    return fileExtention;
}

function userInput(){
    rl.question('Enter file path: ',(filePath)=>{
        const fileExtension = extractFileExtention(filePath);
        console.log('Extracted file extention: ', fileExtension);
        rl.close()
    })
}

userInput();
*/


/**
 * File Paths and Operations:
● Implement a program that accepts a file path as input and uses the path module to
extract the directory name and base name. Display the extracted values separately.
*/
/*
const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function extractDirectoryAndBase(filePath){
    const directoryName = path.dirname(filePath);
    const baseName = path.basename(filePath);
    return {directoryName,baseName};
}

function userInput(){
    rl.question('Enter file path: ',(filePath) =>{
        const {directoryName, baseName} = extractDirectoryAndBase(filePath);
        console.log("Extracted Directory Name is ", directoryName);
        console.log("Extracted Base Name is ",baseName);
        rl.close();
    })
}

userInput();
*/
/*
● Write a function that uses the fs module to check if a given file path exists. Display a
success message if the file exists, or an error message if it doesn't.
 */


const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function checkFileExisit(filePath) {
    fs.access(filePath,fs.constants.F_OK,(err) =>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Success: File Exist!");
        }
    });
}
function userInput(){
    rl.question('Enter file path: ', (filePath)=>{
        const pathExist = checkFileExisit(filePath);
        rl.close();
    });
}

userInput();
