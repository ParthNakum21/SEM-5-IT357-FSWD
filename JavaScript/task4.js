/*Write a function that takes an array of salary as an argument and returns the min/max
salary in the array.*/

var salaries = [600000,700000,10000000,2000000,100000000];

function salaryMinMax(salaries) {
    var minsal = salaries[0];
    var maxsal = salaries[0];

    for (let i = 1; i < salaries.length; i++) {
        if(salaries[i] < minsal){
            minsal = salaries[i];
        }
        if(salaries[i] > maxsal){
            maxsal = salaries[i];
        }
    }
    document.getElementById("maxsal").innerHTML=maxsal;
    document.getElementById("minsal").innerHTML=minsal;
}