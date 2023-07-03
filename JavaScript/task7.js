/*Create an HTML page with a button. Write JavaScript code that adds an event listener to
the button and changes its text when clicked. */

var button = document.getElementById("myButton");

button.addEventListener("click",function(){
    button.textContent = "Button Clicked";
})