/*Create an array of your favorite books. Write a function that takes the array as an
argument and displays each book title on a separate line. */

var favBooks = ["The Alchemist", "Atomic Habits", "Man's Search for Meaning", "Foundation", "Superintelligence"];

function displayBooks(favBooks) {
    var bookListElement = document.getElementById("bookList");
    
    favBooks.forEach(function(bookTitle) {
      var listItem = document.createElement("li");
      listItem.textContent = bookTitle;
      bookListElement.appendChild(listItem);
    });
}
