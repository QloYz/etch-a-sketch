const container = document.querySelector(".flex-container");
const redButton = document.querySelector("#red");
const blueButton = document.querySelector("#blue")
const greenButton = document.querySelector("#green")
const purpleButton = document.querySelector("#purple")
const yellowButton = document.querySelector("#yellow")
const eraseButton = document.querySelector("#erase")
const clearButton = document.querySelector("#clear")
const smallButton = document.querySelector("#small")
let isDrawing = false;
let brushColor = "black";

function makeGrid(size) {
  container.innerHTML = "";

  const squareSize = Math.floor(container.clientWidth / size);

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("box");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
  }
}

smallButton.addEventListener('click', () => {
  makeGrid(32)
})

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
makeGrid(16);




