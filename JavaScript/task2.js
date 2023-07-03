/*Write a function that takes two numbers as arguments and returns their sum, difference, product, and quotient using arithmetic operators.*/

function arithmetic() {
    var num1 = prompt("Enter Number1: ")
    var num2 = prompt("Enter Number2: ")
    document.getElementById("num1").innerHTML=num1
    document.getElementById("num2").innerHTML=num2

    var sum = parseFloat(num1)+parseFloat(num2);
    var diff = num1-num2;
    var mul = num1*num2;
    var div = num1/num2;
    document.getElementById("sum").innerHTML=sum
    document.getElementById("diff").innerHTML=diff
    document.getElementById("mul").innerHTML=mul
    document.getElementById("div").innerHTML=div
}