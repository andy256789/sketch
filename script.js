const container = document.querySelector(".container");
const changeSize = document.querySelector(".size");
const resetSketch = document.querySelector(".reset");

const rainbow = document.querySelector(".rainbow");
const color = document.querySelector(".color");
const colorInput = document.querySelector("#colorInput");

let mouseClicked = false;
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = "color";
const DEFAULT_COLOR = "aliceblue";
let lastColor = DEFAULT_COLOR;
let lastSize = DEFAULT_SIZE;
let lastMode = DEFAULT_MODE;

createLayout(DEFAULT_SIZE);

document.addEventListener("mousedown", () => {mouseClicked = true});
document.addEventListener("mouseup", () => {mouseClicked = false});

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
        box.addEventListener("mouseover", (e) => changeColor(e,lastMode));
        box.addEventListener("mousedown", (e) => changeColor(e,lastMode));
    });
}

function getRandomColor() {
    return "#"+Math.floor(Math.random()*16777215).toString(16);
}

function changeColor(event,mode){
    switch(mode){
        case "color":
            if(event.type=="mousedown"){event.target.style.backgroundColor = lastColor;}
            if(mouseClicked===true){event.target.style.backgroundColor = lastColor;}
            break;
        case "rainbow":
            if(event.type=="mousedown"){event.target.style.backgroundColor = getRandomColor();}
            if(mouseClicked===true){event.target.style.backgroundColor = getRandomColor();}
            break;
    }
}

changeSize.addEventListener("click", () => {
    let size;
    do {
        size = prompt("Enter size: ",DEFAULT_SIZE);
    } while (size > 100);

    lastSize = size;
    createLayout(size);
});

resetSketch.addEventListener("click", () => {
    createLayout(lastSize);
});

rainbow.addEventListener("click", () => {
    lastMode = "rainbow";
});

color.addEventListener("click", () => {
    lastMode = "color";
});

colorInput.addEventListener("input", () => {
    lastColor = colorInput.value;
})