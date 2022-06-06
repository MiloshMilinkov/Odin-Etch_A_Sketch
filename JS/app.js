const DEFAULT_SIZE = 16;

const container = document.querySelector(".gridContainer");
const buttons = document.querySelectorAll("button");
const colorWheel = document.querySelector("#color");
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
let size = DEFAULT_SIZE;
let mod = "";

function setSize(num) {
    size = num;
    return size;
}

function setMod(value) {
    mod = value;
    return mod;
}

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (c = 0; c < (size * size); c++) {
        const cell = document.createElement("div");
        cell.addEventListener('mouseover', changeColor)
        cell.addEventListener('mousedown', changeColor)
        container.appendChild(cell).className = "grid-item";
    };
};

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) { return 0 }

    if (mod == "rgb") {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (mod == "color") {
        e.target.style.background = colorWheel.value;
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == "btnSize1") {
            reloadGrid();
            setSize(16);
            createGrid(size);
        } else if (button.id == "btnSize2") {
            reloadGrid();
            setSize(32);
            createGrid(size);
        } else if (button.id == "btnSize3") {
            reloadGrid();
            setSize(64);
            createGrid(size);
        } else if (button.id == "btnControl2") {
            reloadGrid();
            createGrid(size);
        } else if (button.id == "btnControl1") {
            setMod("rgb");
        } else if (button.id == "btnControl3") {
            setMod("color");
        }
    })
})

function clearGrid() {
    container.innerHTML = '';
}

function reloadGrid() {
    clearGrid()
}

window.onload = () => {
    createGrid(DEFAULT_SIZE, DEFAULT_SIZE)
}