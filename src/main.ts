import "./style.css";

// make a grid-container div in your html

// grab the element from html - selector of some sort (certain type of query *wink wink*)

const gridContainer = document.getElementById("gridContainer");

// function generate grid

// function generateGrid(){
for (let index = 1; index <= 3; index++) {
	const row = document.createElement("div");
	row.className = "row";

	for (let j = 1; j <= 3; j++) {
		const cell = document.createElement("div");
		cell.className = "cell";

		row.appendChild(cell);
	}

	gridContainer?.appendChild(row);
}

// you need a loop
// with each loop you creating a div element
// and for now you appending that div to the dom (appendChild)
//}
