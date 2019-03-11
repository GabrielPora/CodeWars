// When RGB => G will be the colour in the middle for this
// When RRB => B will be the end colour
// When BRR => B will be the start colour
// When RBR => G will be the colour not in it 
// When RRR => R will be the same colour

// using the above create a soltion to solve 

function triangle(row) {
	// first need to check if length is mod 3 = 0 
	// this is to ensure that the solution can work for it.
	// will need a seperate solution for less than 3.
	// once lenght is 2, do a normal solve.

	var maxRow = row.length;
	var modCheck = row.length % 2;
	row = row.split("");
	var tmpCol = [];
	var firstColour = '';
	var secondColour = '';
	var thirdColour = '';
	var i = 0;

	if (maxRow == 1)
		return row[0];
    
 
	if (maxRow > 2) {

		while (3 <= maxRow  && 2 <= maxRow - 1) {
			firstColour = row[i];
			secondColour = row[i + 1];
			thirdColour = row[i + 2];
			var check = [firstColour, secondColour, thirdColour];

			if (secondColour == firstColour && secondColour != thirdColour)
				tmpCol[i] = thirdColour;
			if (secondColour == thirdColour && secondColour != firstColour)
				tmpCol[i] = firstColour;
			if (firstColour != secondColour && firstColour != thirdColour && secondColour != thirdColour)
				tmpCol[i] = secondColour;
			if (secondColour == thirdColour && secondColour == firstColour)
				tmpCol[i] = firstColour;
			if (firstColour == thirdColour && secondColour != firstColour) {
				if (check.includes('R') && check.includes('B'))
					tmpCol[i] = 'G';
				else if (check.includes('G') && check.includes('B'))
					tmpCol[i] = 'R';
				else
					tmpCol[i] = 'B';
			}

			if (maxRow - 3 == i) {
				i = 0;
				row = [];
				row = tmpCol;
				tmpCol = [];
				maxRow -= 2;
			} else {
				i++;
			}
		}
	}

	if (row.length == 2) {
		if (row[0] == row[1])
			return row [0];
		if (row.includes('R') && row.includes('B'))
			row[0] = 'G';
		else if (row.includes('G') && row.includes('B'))
			row[0] = 'R';
		else
			row[0] = 'B';
	}

	return row[0];
}