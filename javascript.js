const canvas = document.getElementById("etch-a-sketch");
// create a single div
function createDiv() {
  const div = document.createElement("div");
  div.className = "grid";
  div.innerText = "test";

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
// function to activate the hover effect
canvas.addEventListener("mouseover", function (e){
    if (e.target.matches(".grid")) {
        e.target.classList.add("paint");
    }
})