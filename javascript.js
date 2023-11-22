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
    div.style.backgroundColor = "green";
    // div.addEventListener("mouseover", colorDiv);
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

function colorDiv() {

}


// const canvas = document.getElementById("etch-a-sketch");
// const bigCanvas = document.querySelector(".big-canvas");
// const smallCanvas = document.querySelector(".small-canvas");
// const clearBtn = document.querySelector(".clear")

// // create a single div
// function createDiv() {
//   const div = document.createElement("div");
//   div.className = "grid";

//   return div;
// }

// // create all 16 divs and put them inside the canvas
// function createCanvas() {
//   myDivArr = [];
 
//   for (i = 0; i < 256; i++) {
//     myDivArr.push(createDiv());
//     canvas.appendChild(myDivArr[i]);
//   }
// }
// createCanvas();

// // function to create a canvas with more pixels
// function createBigCanvas() {
//     clear();
//     myDivArr=[];
//     for (i = 0; i < 1024; i++) {
//         myDivArr.push(createDiv());
//         canvas.appendChild(myDivArr[i]);
//     }
//     bigCanvas.removeEventListener("click", createBigCanvas);
// }
// bigCanvas.addEventListener("click", createBigCanvas);

// // function to activate the hover effect
// canvas.addEventListener("mouseover", function (e){
//     if (e.target.matches(".grid")) {
//         e.target.classList.add("paint");
//     }
// })

// // function to clear/reset the grid
// clearBtn.addEventListener("click", clear);
// function clear() {
//     canvas.childNodes.forEach((child) => child.style.backgroundColor = "white");
// }
