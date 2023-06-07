import "./style.css";

// grab the elements from the dom

const gridContainer = document.getElementById("gridContainer");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

//initial symbol state
let currentPlayer = "x";

let scores: { [key: string]: number } = { x: 0, o: 0 };

// boardgame state which at the start of the game is sort of like null: this is where we will track our x and o

// [
//     [o, x, 0],
//     [x, o, x],
//     [x, o, x],
// ]

let gameBoard: string[][] = Array(3)
	.fill(null)
	.map(() => Array(3).fill(null));

// winning conditions
const winningConditions = [
	[
		[0, 0],
		[0, 1],
		[0, 2],
	],
	[
		[1, 0],
		[1, 1],
		[1, 2],
	],
	[
		[2, 0],
		[2, 1],
		[2, 2],
	],
	[
		[0, 0],
		[1, 0],
		[2, 0],
	],
	[
		[0, 1],
		[1, 1],
		[2, 1],
	],
	[
		[0, 2],
		[1, 2],
		[2, 2],
	],
	[
		[0, 0],
		[1, 1],
		[2, 2],
	],
	[
		[2, 0],
		[1, 1],
		[0, 2],
	],
];

// function generate grid

function generateGrid() {
	while (gridContainer?.firstChild) {
		gridContainer.removeChild(gridContainer.firstChild);
	}

	for (let i = 0; i < 3; i++) {
		const row = document.createElement("div");
		row.className = "row";

		for (let j = 0; j < 3; j++) {
			const cell = document.createElement("div");
			cell.className = "cell";

			// attach id to cells
			cell.id = `${i}-${j}`;

			// on click handler for the cell
			cell.onclick = function () {
				if (!cell.textContent && !checkWin()) {
					cell.textContent = currentPlayer;

					// set the gameboard with the symbol of the current player
					gameBoard[i][j] = currentPlayer;

					if (checkWin()) {
						return; // If the current player has won, stop here
					}

					currentPlayer = currentPlayer === "x" ? "o" : "x";
					player1?.classList.toggle("active");
					player2?.classList.toggle("active");
				}
			};

			row.appendChild(cell);
		}

		gridContainer?.appendChild(row);
	}
}

function checkWin() {
	const hasWon = winningConditions.some((condition) => {
		const allCellMarkedByCurrentPlayer = condition.every(([row, col]) => {
			return gameBoard[row][col] === currentPlayer;
		});
		return allCellMarkedByCurrentPlayer;
	});

	if (hasWon) {
		updateScoreAndDisplayWinner();
	}

	return hasWon;
}

function resetGame() {
	gameBoard = Array(3)
		.fill(null)
		.map(() => Array(3).fill(null));
	currentPlayer = "x";
	generateGrid();
}

function updateScoreAndDisplayWinner() {
	setTimeout(() => {
		scores[currentPlayer]++;
		alert(`Player ${currentPlayer.toUpperCase()} won the game!`);

		// Update player scores in the DOM

		const currentPlayerElement = currentPlayer === "x" ? player1 : player2;
		const scoreElement = currentPlayerElement?.querySelector(".score");
		if (scoreElement) {
			scoreElement.textContent = scores[currentPlayer].toString();
		}
		// if (currentPlayer === "x") {
		// 	const scoreElement = player1?.querySelector(".score");
		// 	if (scoreElement) {
		// 		scoreElement.textContent = scores[currentPlayer].toString();
		// 	}
		// } else {
		// 	const scoreElement = player2?.querySelector(".score");
		// 	if (scoreElement) {
		// 		scoreElement.textContent = scores[currentPlayer].toString();
		// 	}
		// }

		// Reset the game
		resetGame();
	}, 100);
}

generateGrid();
