let divContainer = document.querySelector(".container");

/* let newDiv = document.createElement("div");
newDiv.textContent = "Test";
divContainer.appendChild(newDiv); */

for (i = 1; i <= 256; i++) {
    let newDiv = document.createElement("div");
    newDiv.textContent = `div #${i}`
    divContainer.appendChild(newDiv);
}