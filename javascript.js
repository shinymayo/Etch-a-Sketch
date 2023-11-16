const container = document.querySelector(".canvas");
// loop to create 16 div'd canvas
for (i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    container.appendChild(div);
}
