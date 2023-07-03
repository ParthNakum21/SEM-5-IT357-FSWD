/*Write a function that takes a number as an argument and throws an error if the number
is negative. Handle the error and display a custom error message. */

function checkPositiveNumber(number) {
    document.getElementById("number").innerHTML=number;
    if (number < 0) {
      throw new Error("Number must be positive.");
    }
    return number;
}

  try {
    var ans = checkPositiveNumber(-5);
    document.getElementById("ans").innerHTML=ans;
    console.log("Answer:", ans);
  } catch (error) {
    //document.getElementById("ans").innerHTML=ans;
    let j = error.message;
    document.getElementById("error").innerHTML=j;
    console.log("Error:", error.message);
  }