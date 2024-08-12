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
    square.style.backgroundColor = `rgba(0, 0, 0 ,0)`;
    square.dataset.opacity = 0;

    container.appendChild(square);

    square.addEventListener("mouseenter", () => {
      if (square.dataset.opacity == 0) {
         const randomR = Math.floor(Math.random() * 256);
         const randomG = Math.floor(Math.random() * 256);
         const randomB = Math.floor(Math.random() * 256);
         square.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
      }

      let currentOpacity = parseFloat(square.dataset.opacity);
      currentOpacity = Math.min(currentOpacity + 0.1, 1);
      square.dataset.opacity = currentOpacity;
      square.style.opacity = currentOpacity;
    });
  } 
}

button.addEventListener('click', () => {
  let gridSize = prompt("Enter the number of squares per side (max 100):", 16);

  gridSize = Math.min(Math.max(parseInt(gridSize), 1), 100);

  createGrid(gridSize);
});

createGrid(16);