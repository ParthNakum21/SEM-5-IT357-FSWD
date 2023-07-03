/*Declare a variable inside a function and try to access it outside the function. Observe the
scope behavior and explain the results. [var vs let vs const] */

function myVariables() {
    var innerVar = "Elon Musk";
    var outerVar = "Mark Zukerberg"
    
    let innerLet = 21;
    let outerLet = 22;
    
    const innerConst = true;
    const outerConst = false;
    
    document.getElementById("innerVar").innerHTML=innerVar;
    document.getElementById("innerLet").innerHTML=innerLet;
    document.getElementById("innerConst").innerHTML=innerConst;
    
}
document.getElementById("outerVar").innerHTML=outerVar;
document.getElementById("outerLet").innerHTML=outerLet;
document.getElementById("outerConst").innerHTML=outerConst;

