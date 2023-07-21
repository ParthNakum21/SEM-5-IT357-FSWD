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



