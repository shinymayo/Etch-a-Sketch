const container = document.querySelector(".canvas");
// loop to create 16 div'd canvas
// for (i = 0; i < 16; i++) {
//     const div = document.createElement("div");
//     div.classList.add("grid");
//     container.appendChild(div);
// }

function createDiv() {
    const div = document.createElement("div");
    div.className = "grid";
    div.innerText = "test";

    return div;
}
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