function triangle(row) {
	let rowLen = row.length;
	if (rowLen == 1) return row;
	let currentRow = [];
	for (let index = 0; index < rowLen; index++) {
	  currentRow.push(strToNum(row[index])); //This section of the code looks at what the colour is and gives it a number. adds this to a array.
	}
  
	let nextRow;
	while (true) { //This will continue while it is possible to do the below, once it fails it becomes false.
	  nextRow = []; //The next colour row
	  for (let index = 0; index < rowLen - 1; index++) { //The next row will always be one row length less.
		const color1 = currentRow[index]; //First colour
		const color2 = currentRow[index + 1]; //Next colour
  
		nextRow.push(nextColor(color1, color2)); //Add to array for the next row of colours.
	  }
	  rowLen -= 1; //Reduce row length by one.
	  if (rowLen == 1) { //If the Row length is one then return reseult. 
		return numToStr(nextRow[0]); //Convert the number to the correct colour.
	  }
	  currentRow = nextRow.slice(); //Replace the current row with the completed nextRow
	}
  }
  
  function nextColor(color1, color2) {
	let nextColor = color1 ^ color2; //This runs an XOR which will give the resulting next colour equaliant number.
	//If 1 ^ 2 = 3 will always give the number that is not there but only works with 3's
	//If 2 ^ 3 = 1 will always give the number that is not there but only works with 3's
	//If 1 ^ 1 = 0 same colour/number will give a 0
	return nextColor == 0 ? color1 : nextColor; //This compares that number and if it is 0 then it was the same colour else it will be the resulting colour.
  }
  
  function numToStr(number) {
	return number === 1 ? "R" : number == 2 ? "G" : "B"; //Will take the number and change it to a letter for that Colour.
  }
  
  function strToNum(color) {
	return color === "R" ? 1 : color === "G" ? 2 : 3; //Will take the Colour and change it to a number.
  }