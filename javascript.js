const canvas = document.getElementById("etch-a-sketch");
const bigCanvas = document.querySelector(".big-canvas");
const smallCanvas = document.querySelector(".small-canvas");
const clearBtn = document.querySelector(".clear")

// create a single div
function createDiv() {
  const div = document.createElement("div");
  div.className = "grid";

  return div;
}

// create all 16 divs and put them inside the canvas
function createCanvas() {
  myDivArr = [];
 
  for (i = 0; i < 256; i++) {
    myDivArr.push(createDiv());
    canvas.appendChild(myDivArr[i]);
  }
}
createCanvas();

// function to create a canvas with more pixels
function createBigCanvas() {
    clear();
    myDivArr=[];
    for (i = 0; i < 1024; i++) {
        myDivArr.push(createDiv());
        canvas.appendChild(myDivArr[i]);
    }
    bigCanvas.removeEventListener("click", createBigCanvas);
} // but previous drawing is still there
bigCanvas.addEventListener("click", createBigCanvas);

// function to activate the hover effect
canvas.addEventListener("mouseover", function (e){
    if (e.target.matches(".grid")) {
        e.target.classList.add("paint");
    }
})
// function to clear/reset the grid
clearBtn.addEventListener("click", clear);
function clear() {
    canvas.childNodes.forEach((child) => child.style.backgroundColor = "white");
}
// function clear() {
//     clearBtn.addEventListener("click", () => {
//         canvas.childNodes.forEach((child) => 
//         child.style.backgroundColor = "white")
//     })
// }
// clear(); // but can't paint anymore