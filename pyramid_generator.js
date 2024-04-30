// Function Generates a Pyramid of Characters
const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
	return (
		" ".repeat(rowCount - rowNumber) +
		character.repeat(2 * rowNumber - 1) +
		" ".repeat(rowCount - rowNumber)
	);
}

// TODO: use a different type of loop
for (let i = 1; i <= count; i++) {
	if (inverted) {
		rows.unshift(padRow(i, count));
	} else {
		rows.push(padRow(i, count));
	}
}

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

let result = "";

for (const row of rows) {
	result = result + "\n" + row;
}

console.log(result);

// BEFORE FUNCTION padROW CREATION
// const character = "#";
// const count = 8;
// const rows = [];

// for (let i = 0; i < count; i = i + 1) {
// 	rows.push(character.repeat(i + 1));
// }

// let result = "";

// for (const row of rows) {
// 	result = result + "\n" + row;
// }

// console.log(result);
