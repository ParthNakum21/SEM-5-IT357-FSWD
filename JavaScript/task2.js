/*Write a function that takes two numbers as arguments and returns their sum, difference, product, and quotient using arithmetic operators.*/

var num1 = 94;
var num2 = 4;

function arithmetic(num1,num2) {
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

    return {
        sum : sum,
        diff : diff,
        mul : mul,
        div : div
    };
}

var results = arithmetic(num1,num2);
console.log(results.sum);
console.log(results.diff);
console.log(results.mul);
console.log(results.div);