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

	if (maxRow >= 4) {

		var checkAll = [];
		while (4 <= maxRow) {
			firstColour = row[i];
			secondColour = row[i + 1];
			thirdColour = row[i + 2];
			fourthColour = row[i + 3];
			checkAll = [firstColour, secondColour, thirdColour, fourthColour];

			// Rule 1
			if (firstColour == fourthColour) {
				tmpCol[i] = firstColour;
			} else {
				if (secondColour == thirdColour && fourthColour != firstColour && (secondColour != fourthColour && firstColour != secondColour))
					tmpCol[i] = secondColour;
				if (firstColour == thirdColour && fourthColour != secondColour)
					tmpCol[i] = secondColour;
				if (firstColour != thirdColour && fourthColour == secondColour)
					tmpCol[i] = thirdColour;
				if (firstColour == secondColour && fourthColour != thirdColour)
					tmpCol[i] = thirdColour;
				if (firstColour != secondColour && fourthColour == thirdColour)
					tmpCol[i] = secondColour;

				if (firstColour == secondColour && firstColour == thirdColour) {
					if (checkAll.includes('R') && checkAll.includes('B'))
						tmpCol[i] = 'G';
					else if (checkAll.includes('G') && checkAll.includes('B'))
						tmpCol[i] = 'R';
					else
						tmpCol[i] = 'B';
				}

				if (secondColour == fourthColour && secondColour == thirdColour && secondColour != firstColour) {
					if (checkAll.includes('R') && checkAll.includes('B'))
						tmpCol[i] = 'G';
					else if (checkAll.includes('G') && checkAll.includes('B'))
						tmpCol[i] = 'R';
					else
						tmpCol[i] = 'B';
				}

				if (secondColour == fourthColour && firstColour == thirdColour && secondColour != firstColour) {
					if (checkAll.includes('R') && checkAll.includes('B'))
						tmpCol[i] = 'G';
					else if (checkAll.includes('G') && checkAll.includes('B'))
						tmpCol[i] = 'R';
					else
						tmpCol[i] = 'B';
				}

				if (secondColour == firstColour && fourthColour == thirdColour && secondColour != fourthColour) {
					if (checkAll.includes('R') && checkAll.includes('B'))
						tmpCol[i] = 'G';
					else if (checkAll.includes('G') && checkAll.includes('B'))
						tmpCol[i] = 'R';
					else
						tmpCol[i] = 'B';
				}
			}

			if (maxRow - 4 == i) {
				i = 0;
				row = [];
				row = tmpCol;
				tmpCol = [];
				maxRow -= 3;
			} 
			else
				i++;
		}
	}

	if (maxRow == 3) {

		while (3 <= maxRow) {
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
			return row[0];
		if (row.includes('R') && row.includes('B'))
			row[0] = 'G';
		else if (row.includes('G') && row.includes('B'))
			row[0] = 'R';
		else
			row[0] = 'B';
	}

	return row[0];
}

// function Rule1(){
	
// }

//   Rules that I have in place
//   Rule 1:
//   if 1st and 4th the same then answer the same as 1st

//   Rule 2:
//   if 2nd and 4th the same but 1st and 3rd different then answer the same as 3rd

//   Rule 3:
//   if 1st and 3rd the same but 2nd and 4th different then answer the same as 2nd

//   Rule 4:
//   if first 3 or last 3 the same and 4th or 1st respectivly different then answer is the oposite colour to the two colours used

//   Rule 5:
//   if the 1st and 2nd the same but 3rd and 4th different then answer will be the 3rd 

//   Rule 6: 
//   if the 2nd and 3rd are the same but 1st and 4th differnt then answer will be 2nd
