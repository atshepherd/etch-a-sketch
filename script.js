function createGrid() {
    let divContainer = document.querySelector(".container");

    for (i = 1; i <= input; i++) {
     let newDiv = document.createElement("div");
     newDiv.setAttribute("class", "square");
     divContainer.appendChild(newDiv);
    }
}

function clearGrid() {
    let allSquares = document.getElementsByClassName('square');
    let gridtoClear = Array.from(allSquares);
    gridtoClear.forEach((square) => square.remove());
}

function colorGrid() {
    let selectDiv = document.querySelectorAll(".square");

    selectDiv.forEach(div => {
    div.addEventListener("mouseover", colorDiv);
    });

    function colorDiv(div) {
    div.target.style.backgroundColor = "gray";
    }

}

function getNewGridInput() {
    input = prompt("How many squares per side do you want on your new grid?");

    while (input > 100 || input < 1) {
        input = prompt("Please enter a number between 1 and 100:");
    }
}

let input = 256;

createGrid();

colorGrid();

let clearButton = document.querySelector(".button");

clearButton.addEventListener("click", () => {
    
    getNewGridInput();

    clearGrid();

    createGrid();

    colorGrid();
});