const container = document.querySelector(".container");
const button = document.querySelector("#new-grid");

function createGrid(size) {
  container.textContent = '';

  const squareSize = container.clientWidth / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);

    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "#333"
    });
  } 
}

button.addEventListener('click', () => {
  let gridSize = prompt("Enter the number of squares per side (max 100):", 16);

  gridSize = Math.min(Math.max(parseInt(gridSize), 1), 100);

  createGrid(gridSize);
});

createGrid(16);