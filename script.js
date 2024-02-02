// Create a webpage with a 16x16 grid of square divs. The size should be a fixed height and width in pixels.
const container = document.querySelector('.container');
let gridSize = 16;
let isMouseDown = false; // Track whether the mouse is pressed down

// Function to clear grid
function clearGrid() {
    container.innerHTML = '';
}

// Function to create grid
function createGrid(gridSize) {
    clearGrid();
    const squareSize = container.offsetWidth / gridSize;
    for (let i = 0; i < gridSize * gridSize; i++) {
        let square = document.createElement('div');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.classList.add('square');
        // Make the grid the child of the container
        container.appendChild(square);
    }
    const squares = document.querySelectorAll('.square');
    // Event listener for mouse down on any square
    squares.forEach((square) => {
        square.addEventListener('mousedown', (e) => {
            isMouseDown = true; // Set the flag to true
            square.style.backgroundColor = 'black'; // Color the square on click as well
            e.preventDefault(); // Prevents default text selection behavior
        });
    });    

    // Event listener for mouse over on any square
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            // Only color the square if the mouse is down
            if (isMouseDown) {
                square.style.backgroundColor = 'black';
            }
        });
    });
}

// Initial creation of grid
createGrid(gridSize);

// Add a button
const btn = document.querySelector('button');

// Add an event listener to the button: When clicked, prompt the user
btn.addEventListener('click', () => {
    // The prompt asks for the number of squares per side for the new grid (height and width). Limit: 100
    let answer = parseInt(prompt('Please enter grid size (max. 100 squares)'));
    while (isNaN(answer) || answer < 1 || answer > 100) {
        answer = parseInt(prompt('Please enter grid size (max. 100 squares)'));
    }
    gridSize = answer;
    createGrid(gridSize);
});

// Event listener for mouse up on the document
document.addEventListener('mouseup', () => {
    isMouseDown = false; // Reset the flag when the mouse is released
});