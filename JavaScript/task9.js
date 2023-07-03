/*Write a function that uses setTimeout to simulate an asynchronous operation. Use a
callback function to handle the result. */

function asynchronousOperation(callback) {
    setTimeout(function(){
        var results = "Operation Completed";
        callback(results);
    }, 2000);
    
}

function handleResult(results) {
    console.log("Results: ", results);
    document.getElementById("results").innerHTML=results;
}

let k = console.log("Starting Asynchronous Operation...");
asynchronousOperation(handleResult);
console.log("Asynchronous Operation initiated.")