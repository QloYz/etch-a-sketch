const container = document.querySelector(".flex-container");
const redButton = document.querySelector("#red");
const blueButton = document.querySelector("#blue")
const greenButton = document.querySelector("#green")
const purpleButton = document.querySelector("#purple")
const yellowButton = document.querySelector("#yellow")
const eraseButton = document.querySelector("#erase")
const clearButton = document.querySelector("#clear")
const smallButton = document.querySelector("#small")

const size = 16;
let isDrawing = false;
let brushColor = "black";

for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div")
    square.classList.add("box")
    container.appendChild(square)
}

function makeGrid(squareSize) {
  container.innerHTML = "";

  const cols = container.clientWidth / squareSize;
  const rows = container.clientHeight / squareSize;

  for (let i = 0; i < cols * rows; i++) {
    const square = document.createElement("div");
    square.classList.add("box");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
  }
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

container.addEventListener("click", (e) => {
    if (e.target.classList.contains("box")) {
        isDrawing = !isDrawing;
    }
})

container.addEventListener("mouseover", (e) => {
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





