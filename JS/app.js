const DEFAULT_SIZE = 16;

const container = document.querySelector(".gridContainer");
const buttons = document.querySelectorAll(".btnSize");

function createGrid(rows, cols) {
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == "btnSize1") {
            reloadGrid();
            createGrid(16, 16);
        } else if (button.id == "btnSize2") {
            reloadGrid();
            createGrid(32, 32);
        } else if (button.id == "btnSize3") {
            reloadGrid();
            createGrid(64, 64);
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