// Create a webpage with a 16x16 grid of square divs. The size should be a fixed height and width in pixels.
const container = document.querySelector('.container');
// Use flexbox to make the grid

// Each div is a square, whose size can change depending on how many there are within the grid
// To distribute these, in CS50 we'd have heigh and width. Here we don't.
// We have to ensure that the number given by the user is exactly that number of squares across and down.
const square = document.createElement('div');

// Make the grid the child of the container
container.appendChild(square);
// Set up even listeners for when the user hovers over each square of the grid when your
// mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
// While the user not hovering over the grid
// Keep it blank
// Else make it black, either by:
    // adding a new class to the div.
    // changing the div’s background color using JavaScript.
// Add a button 
// Put the button to the top of the screen 
// Add an event listener to the button: When clicked, prompt the user
// The prompt asks for the number of squares per side for the new grid (height and width). Limit: 100
// Once entered:
    // The existing grid is removed
    // A new grid is made in the same total space as before (e.g. whether 4 grids or 100, the total space is e.g. 960x960px) 
    // so that you’ve got a new sketch pad.