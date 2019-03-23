function triangle(row) {
	let rowLen = row.length;
	if (rowLen == 1) return row;
	let currentRow = [];
	for (let index = 0; index < rowLen; index++) {
	  currentRow.push(strToNum(row[index]));
	}
  
	let nextRow;
	while (true) {
	  nextRow = [];
	  for (let index = 0; index < rowLen - 1; index++) {
		const color1 = currentRow[index];
		const color2 = currentRow[index + 1];
  
		nextRow.push(nextColor(color1, color2));
	  }
	  rowLen -= 1;
	  if (rowLen == 1) {
		return numToStr(nextRow[0]);
	  }
	  currentRow = nextRow.slice();
	}
  }
  
  function nextColor(color1, color2) {
	let nextColor = color1 ^ color2;
	return nextColor == 0 ? color1 : nextColor;
  }
  
  function numToStr(number) {
	return number === 1 ? "R" : number == 2 ? "G" : "B";
  }
  
  function strToNum(color) {
	return color === "R" ? 1 : color === "G" ? 2 : 3;
  }