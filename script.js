const container = document.querySelector(".container");
const button = document.querySelector(".size");

const DEFAULT_SIZE = 16;

createLayout(DEFAULT_SIZE);

let mouseClicked = false;
document.addEventListener("mousedown", () => {
    mouseClicked = true;
});
document.addEventListener("mouseup", () => {
    mouseClicked = false;
});

let lastSize = DEFAULT_SIZE;

button.addEventListener("click", () => {
    let size;
    do {
        size = prompt("Enter size: ",DEFAULT_SIZE);
    } while (size > 100);

    createLayout(size);
});

function changeColor(event){
    if(event.type=="mousedown"){
        event.target.classList.add("over");
    }

    if(mouseClicked===true){
        event.target.classList.add("over");
    }
}

function createLayout(size) {
    container.replaceChildren();
    let heightAndWidth = 960 / size;

    for (let i = 0; i < (size ** 2); i++) {
        const div = document.createElement("div");
        div.classList.add("box");
        div.style.cssText = `min-height: ${heightAndWidth}px; min-width: ${heightAndWidth}px;`;
        container.appendChild(div);
    }

    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.addEventListener("mouseover", (e) => changeColor(e));
        box.addEventListener("mousedown", (e) => changeColor(e));
    });
}