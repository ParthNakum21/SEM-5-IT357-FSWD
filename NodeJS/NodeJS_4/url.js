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

/**
Query String Operation:
● Write a Node.js program that takes a URL with a query string as input and extracts the
key-value pairs from the query string using the querystring module. The program should
display the extracted key-value pairs as output.
 */


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

