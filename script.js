let divContainer = document.querySelector(".container");

for (i = 1; i <= 256; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "square");
    divContainer.appendChild(newDiv);
}

let selectDiv = document.querySelectorAll(".square");

selectDiv.forEach(div => {
    div.addEventListener("mouseover", colorDiv);
});

function colorDiv(div) {
    div.target.style.backgroundColor = "gray";
}

let clearButton = document.querySelector(".button");

clearButton.addEventListener("click", () => {
    let input; 
    do {
        input = prompt("How many squares per side do you want on your new grid?");
    }
    while (input > 100)

    console.log(input);
});