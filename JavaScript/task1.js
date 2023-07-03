/*Declare a variable using var, let, and const. Assign different data types to each variable
and print their values.*/

function task1(){

    //using var
    var myVar = prompt("Enter myVar: ")
    //console.log("var = ",myVar)
    document.getElementById("myVar").innerHTML=myVar;

    //using let
    let myLet = prompt("Enter myLet: ")
    //console.log("let = ",myLet)
    document.getElementById("myLet").innerHTML=myLet;

    //using const
    const myConst = prompt("Enter myConst: ")
    //console.log("const = ",myConst)
    document.getElementById("myConst").innerHTML=myConst;
}

