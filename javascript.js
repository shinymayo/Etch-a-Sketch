// create a single div
function createDiv() {
    const div = document.createElement("div");
    div.className = "grid";
    div.innerText = "test";

    return div;
}
// create all 16 divs and put them inside the canvas
function createCanvas() {
    const canvas = document.getElementById("etch-a-sketch");
    myDivArr = [];
    // i = 0;
    // numOfDivs = 16;

    for (i = 0; i < 16; i++) {
        myDivArr.push(createDiv());
        canvas.appendChild(myDivArr[i]);
    }
    // myDivArr[5].className = "violet"; //this is a test
    // myDivArr[4].innerText = "hello"; //this is a test
}
createCanvas();