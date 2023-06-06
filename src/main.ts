import "./style.css";

// make a grid-container div in your html

// grab the element from html - selector of some sort (certain type of query *wink wink*)

const gridContainer = document.getElementById("gridContainer");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

// function generate grid

function generateGrid() {
	for (let i = 1; i <= 3; i++) {
		const row = document.createElement("div");
		row.className = "row";

		for (let j = 1; j <= 3; j++) {
			const cell = document.createElement("div");
			cell.className = "cell";

			// find a way to generate and attach a grid id system for each cell
			cell.id = `${i}-${j}`;

			// console.log the id of the cell when clicked
			cell.onclick = function () {
				console.log(cell.id);
			};

			row.appendChild(cell);
		}

		gridContainer?.appendChild(row);
	}
}

generateGrid();
