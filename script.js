const container = document.querySelector(".flex-container");
const redButton = document.querySelector("#red");
const blueButton = document.querySelector("#blue")
const greenButton = document.querySelector("#green")
const purpleButton = document.querySelector("#purple")
const yellowButton = document.querySelector("#yellow")
const eraseButton = document.querySelector("#erase")
const clearButton = document.querySelector("#clear")
let isDrawing = false;
let brushColor = "black";
const INITIAL_SIZE = 16;

makeNewGrid(INITIAL_SIZE);

function clearGrid() {
    container.replaceChildren();
}

function makeNewGrid(size) {
    clearGrid();
    let numberOfBoxes = size * size;
    for (let i = 0; i < numberOfBoxes; i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('box');
        container.appendChild(newDiv);
    }
    let newHeight = newWidth = 512 / size ;
    console.log(newHeight);
    const newDivs = document.querySelectorAll('.box');
    newDivs.forEach(element => {
        element.style.height = newHeight.toString() + "px";
        element.style.width = newWidth.toString() + "px";
      
    })

};

function changeGridSize(size){
    switch(size){
        case '1': gridSize = 64;
        break;
        case '2': gridSize = 32;
        break;
        case '3': gridSize = 16;
        break;
        case '4': gridSize = 8;
        break;
        default: gridSize = 8;
    }
  makeNewGrid(gridSize);
}

redButton.addEventListener('click', () => {
    brushColor = "red"
})

blueButton.addEventListener('click', () => {
    brushColor = "blue"
})

greenButton.addEventListener('click', () => {
    brushColor = "green"
})

purpleButton.addEventListener('click', () => {
    brushColor = "purple"
})

yellowButton.addEventListener("click", () => {
    brushColor = "yellow"
})

eraseButton.addEventListener("click", () => {
    brushColor = "white"
})

clearButton.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach(box => {
    box.style.backgroundColor = "white";
  });
});

container.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains("box")) {
        isDrawing = true;
        e.target.style.backgroundColor = brushColor
    }
})

container.addEventListener("mouseup", () => {
  isDrawing = false;
});

container.addEventListener("mousemove", (e) => {
    if (isDrawing && (e.target.classList.contains("box"))) {
        e.target.style.backgroundColor = brushColor
    }
})

function titleRainbow() {
  const title = document.getElementById("title");
  const text = title.textContent;
  title.textContent = "";

  const colors = [
    "red", "orange", "yellow", "green", 
    "blue", "indigo", "violet"
  ];

  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.textContent = text[i];
    span.style.color = colors[i % colors.length];
    title.appendChild(span);
  }
}

titleRainbow();




