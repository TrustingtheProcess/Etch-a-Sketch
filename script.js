const container = document.querySelector(".container");
const newGridButton = document.querySelector("#new-grid");
const clearButton = document.querySelector("#clear");

function createGrid(size) {
  // Clear the existing grid 
  container.textContent = '';
  
  const squareSize = container.clientWidth / size ;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.backgroundColor =`rbga(0, 0, 0, 0)`;
    square.dataset.opacity = 0; //This sets the initial opacity value to 0

    container.appendChild(square);

    // Add hover effect with random color and darkening effect
    square.addEventListener("mouseenter", () => {
      if (square.dataset.opacity == 0) {
        // Generate random RGB color
         const randomR = Math.floor(Math.random() * 256);
         const randomG = Math.floor(Math.random() * 256);
         const randomB = Math.floor(Math.random() * 256);
         square.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
      }

      // Increases opacity by 10% on each interaction
      let currentOpacity = parseFloat(square.dataset.opacity);
      currentOpacity = Math.min(currentOpacity + 0.1, 1); //Ensure compacity doesn't exceed 1
      square.dataset.opacity = currentOpacity;
      square.style.opacity = currentOpacity; // Apply new opacity
    });
  } 
}

newGridButton.addEventListener('click', () => {
  let gridSize = prompt("Enter the number of squares per side (max 100):", 16);

  gridSize = Math.min(Math.max(parseInt(gridSize), 1), 100);

  createGrid(gridSize);
});

function clearGrid() {
  const squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Reset background color
    square.dataset.opacity = 0;
  });
}

clearButton.addEventListener('click', clearGrid);
