/*Write a program that prompts the user to enter their age. Based on their age, display
different messages:
○ If the age is less than 18, display "You are a minor."
○ If the age is between 18 and 65, display "You are an adult."
○ If the age is 65 or older, display "You are a senior citizen." */

function ageCriteria(){
    var age = prompt("Enter age: ")
    let x;
    document.getElementById("age").innerHTML=age;

    if(age<18){
        x = "You are a minor."
        console.log("You are a minor.")
    }
    else if(age>=18 && age<65){
        x = "You are an adult."
        console.log("You are an adult.")
    }
    else{
        x = "You are a senior citizen."
        console.log("You are a senior citizen.")
    } 
    document.getElementById("x").innerHTML=x
}