const canvas = document.getElementById("etch-a-sketch");
const bigCanvas = document.querySelector(".big-canvas");
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
    myDivArr=[];

    for (i = 0; i < 1024; i++) {
        myDivArr.push(createDiv());
        canvas.appendChild(myDivArr[i]);
    }
    const grid = document.querySelector(".grid"); //doesnt work, how to access the div element?
    grid.setAttribute("style", "width: 18.5px"); //doesnt work
}
bigCanvas.addEventListener("click", createBigCanvas);
// function to activate the hover effect
canvas.addEventListener("mouseover", function (e){
    if (e.target.matches(".grid")) {
        e.target.classList.add("paint");
    }
})
