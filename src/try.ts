import "./style.css";

const gridContainer = document.getElementById("gridContainer");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

//initial symbol state
let currentPlayer = "x";

let scores: { [key: string]: number } = { x: 0, o: 0 };

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
	// Remove children

	while (gridContainer?.firstChild) {
		gridContainer.removeChild(gridContainer.firstChild);
	}

	for (let i = 0; i < 3; i++) {
		const row = document.createElement("div");
		row.className = "row";

		for (let j = 0; j < 3; j++) {
			const cell = document.createElement("div");
			cell.className = "cell";

			cell.id = `${i}-${j}`;

			cell.onclick = function () {
				if (!cell.textContent && !checkWin()) {
					cell.textContent = currentPlayer;

					// set the gameboard with the symbol of the current player
					gameBoard[i][j] = currentPlayer;

					console.log(gameBoard);
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
	return winningConditions.some((condition) => {
		const allCellMarkedByCurrentPlayer = condition.every(([row, col]) => {
			return gameBoard[row][col] === currentPlayer;
		});
		return allCellMarkedByCurrentPlayer;
	});
}
