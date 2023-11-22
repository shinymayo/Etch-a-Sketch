let color = "black";
// to check that everything on the page is loaded
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");
  createBoard(16); //the default size of the board
})
// takes user input in getSize and passes it to createBoard to change the size of the board
let buttonSize = document.querySelector(".size");
buttonSize.addEventListener("click", function () {
  let size = getSize();
  createBoard(size);
})
//function to create the board with divs
function createBoard(size) {
  let board = document.querySelector(".board");

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let divs = size * size;

  for(i = 0; i < divs; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", colorDiv);
    board.insertAdjacentElement("beforeend", div);
  }
}
//function to take user's input for the desired board size
function getSize() {
  let input = prompt("What will be the size of the board?");
  let message = document.querySelector(".message");
  if(input == "") {
    alert("Please provide a number between 2-100");
  } else if (input < 2 || input > 100) {
    alert("The number must be between 2-100");
  } else {
    message.innerHTML = "Thank you. Now you can play";
    return input;
  }
}
// works with event listener, paints the divs
function colorDiv() {
  if(color == "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
  } else {
    this.style.backgroundColor = "black";
  }
    
}
// works with buttons black&random 
function setColor(colorChoice) {
  color = colorChoice;
}