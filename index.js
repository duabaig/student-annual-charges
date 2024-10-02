// Ensure h1 is in quotes
var heading1 = document.getElementById('h1');

var student = {
    name: "hira", 
    fname: "anam", 
    fees: 3000, 
    transfer: 1000,
    // Adjusted for 0-indexing (June is 5, August is 7)
    discountMonths: [5, 7], 
    calcAnnual: function(percentIfDisc) {
        var bestPrice = this.fees; // Use 'this' to reference the current object
        var currDate = new Date();
        var stud = currDate.getMonth(); // Get the current month (0-11)

        for (var i = 0; i < this.discountMonths.length; i++) {
            if (this.discountMonths[i] === stud) {
                bestPrice = this.fees * percentIfDisc; // Apply discount
                break;
            }
        }
        return bestPrice * 12; // Return annual charges
    }
};

// Specify the discount percentage
var discountPercent = 0.9; // Example: 10% discount
var calcAnnual = student.calcAnnual(discountPercent); // Call with discount

// Use template literals correctly
console.log(`${student.name} ${student.fname} annual charges are ${calcAnnual}`);


var student = {
    name: "hareem", 
    fname: "baig", 
    fees: 4000, 
    transfer: 2000,
    // Adjusted for 0-indexing (October is 9, December is 11)
    discountMonths: [9, 11], 
    calcAnnual: function(percentIfDisc) {
        var bestPrice = this.fees; // Use 'this' to reference the current object
        var currDate = new Date();
        var stud = currDate.getMonth(); // Get the current month (0-11)

        for (var i = 0; i < this.discountMonths.length; i++) {
            if (this.discountMonths[i] === stud) {
                bestPrice = this.fees * percentIfDisc; // Apply discount
                break;
            }
        }
        return bestPrice * 12; // Return annual charges
    }
};

// Specify the discount percentage
var discountPercent = 0.9; // Example: 10% discount
var calcAnnual = student.calcAnnual(discountPercent); // Call with discount

// Use template literals correctly
console.log(`${student.name} ${student.fname} annual charges are ${calcAnnual}`);


var student = {
    name: "reem",  
    fname: "khokar",  
    fees: 7000,  
    transfer: 3000, 
    // Adjusted for 0-indexing (April is 3, July is 6)
    discountMonths: [3, 6],  
    calcAnnual: function(percentIfDisc) {
        var bestPrice = this.fees; // Use 'this' to reference the current object
        var currDate = new Date();
        var stud = currDate.getMonth(); // Get the current month (0-11)

        // Check if the current month is a discount month
        for (var i = 0; i < this.discountMonths.length; i++) {
            if (this.discountMonths[i] === stud) {
                bestPrice = this.fees * percentIfDisc; // Apply discount
                break;
            }
        }
        return bestPrice * 12; // Return annual charges
    }
};

// Specify the discount percentage
var discountPercent = 0.9; // Example: 10% discount
var calcAnnual = student.calcAnnual(discountPercent); // Call with discount

// Use template literals correctly
console.log(`${student.name} ${student.fname} annual charges are ${calcAnnual}`);























































































































































































































































































































































































































































































































































































































































































// var gridElement = document.getElementById('grid');
// var wordInput = document.getElementById('wordInput');
// var submitButton = document.getElementById('submit');
// var messageElement = document.getElementById('message');
// var scoreElement = document.getElementById('score');

// // Create a container for the game
// var container = document.createElement('div');
// container.style.textAlign = 'center';
// container.style.backgroundColor = 'grey';
// container.style.padding = '20px';
// container.style.borderRadius = '40px';
// container.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.3)';
// container.style.display = 'flex';
// container.style.flexDirection = 'column';
// container.style.alignItems = 'center';
// document.body.appendChild(container);

// // // Append title and other elements to the container
// var title = document.getElementById('title');
// // title.textContent = 'Word Hunter';
// // container.appendChild(title);

// container.appendChild(gridElement);
// container.appendChild(wordInput);
// container.appendChild(submitButton);
// container.appendChild(messageElement);
// container.appendChild(scoreElement);

// // Define words and score
// const words = ['APPLE', 'BANANA', 'GRAPE', 'PEAR', 'MANGO'];
// let score = 0;

// // Function to generate grid
// function generateGrid(size) {
//     var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let grid = [];

//     for (let i = 0; i < size; i++) {
//         let row = [];
//         for (let j = 0; j < size; j++) {
//             row.push(letters.charAt(Math.floor(Math.random() * letters.length)));
//         }
//         grid.push(row);
//     }

//     return grid;
// }

// // Function to display grid
// function displayGrid(grid) {
//     gridElement.innerHTML = '';
//     gridElement.style.display = 'grid';
//     gridElement.style.gridTemplateColumns = 'repeat(5, 50px)';
//     gridElement.style.gridGap = '5px';
//     gridElement.style.margin = '20px auto';

//     grid.forEach(row => {
//         row.forEach(letter => {
//             const cell = document.createElement('div');
//             cell.classList.add('cell');
//             cell.textContent = letter;
//             cell.style.width = '50px';
//             cell.style.height = '50px';
//             cell.style.display = 'flex';
//             cell.style.alignItems = 'center';
//             cell.style.justifyContent = 'center';
//             cell.style.border = '1px solid #000';
//             cell.style.fontSize = '24px';
//             cell.style.backgroundColor = '#eaeaea';
//             cell.style.transition = 'background-color 0.3s';
//             cell.onmouseover = () => {
//                 cell.style.backgroundColor = '#d1d1d1'; // Change color on hover
//             };
//             cell.onmouseout = () => {
//                 cell.style.backgroundColor = '#eaeaea'; // Reset color
//             };
//             gridElement.appendChild(cell);
//         });
//     });
// }

// // Function to check the word
// function checkWord(word) {
//     if (words.includes(word)) {
//         score++;
//         scoreElement.textContent = `Score: ${score}`;
//         messageElement.textContent = 'Correct!';
//     } else {
//         messageElement.textContent = 'Try again!';
//     }
//     wordInput.value = '';
// }

// // Initialize the game
// const gridSize = 5;
// const grid = generateGrid(gridSize);
// displayGrid(grid);

// // Event listener for the submit button
// submitButton.addEventListener('click', () => {
//     const userInput = wordInput.value.toUpperCase();
//     checkWord(userInput);
// });






























// <!-- var numberToGuess = Math.floor(Math.random() * 100) + 1;
// var score = 0;

// function makeGuess() {
//     var guessInput = document.getElementById("guessInput");
//     var feedback = document.getElementById("feedback");
//     var scoreDisplay = document.getElementById("score");
//     var guess = parseInt(guessInput.value);

//     // Validate input
//     if (isNaN(guess) || guess < 1 || guess > 100) {
//         feedback.textContent = "Please enter a number between 1 and 100.";
//         return;
//     }

//     // Provide feedback based on the guess
//     if (guess < numberToGuess) {
//         feedback.textContent = "Too low!";
//     } else if (guess > numberToGuess) {
//         feedback.textContent = "Too high!";
//     } else {
//         feedback.textContent = "Correct! You've guessed the number!";
//         alert("Congratulations! You guessed it right!");
//         score += 1; // Increase score on correct guess
//         scoreDisplay.textContent = "Score: " + score;
//         resetGame(); // Reset the game after a correct guess
//     }

//     // Clear the input field for the next guess
//     guessInput.value = '';
// }

// function resetGame() {
//     numberToGuess = Math.floor(Math.random() * 100) + 1; // Reset number
//     document.getElementById("feedback").textContent = ''; // Clear feedback message
// }
// </script> -->





