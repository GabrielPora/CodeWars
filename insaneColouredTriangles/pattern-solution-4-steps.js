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

	if (maxRow == 1)
		return row[0];
		
	// var modCheck = row.length % 3;
	row = row.split("");
	var tmpCol = [];
	var firstColour = '';
	var secondColour = '';
	var thirdColour = '';
	var i = 0;

	if (maxRow >= 4) {

		var checkAll = [];
		var fourthColour = '';
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
				// Rule 6
				if (secondColour == thirdColour && secondColour != fourthColour && firstColour != secondColour){
					tmpCol[i] = secondColour;
				}
				// Rule 2
				else if (firstColour == thirdColour && fourthColour != secondColour && firstColour != secondColour){
					tmpCol[i] = secondColour;
				}
				// Rule 2 opposite
				else if (firstColour != thirdColour && fourthColour == secondColour && secondColour != thirdColour){
					tmpCol[i] = thirdColour;
				}
				// Rule 5
				else if (firstColour == secondColour && fourthColour != thirdColour && secondColour != thirdColour){
					tmpCol[i] = thirdColour;
				}
				// Rule 5 opposite
				else if (firstColour != secondColour && fourthColour == thirdColour && secondColour != thirdColour){
					tmpCol[i] = secondColour;
				}
				// Rule 4 Need to find out about this
				else {
					tmpCol[i] = checkColour(checkAll);
				}
			}

			if (maxRow - 4 == i) {
				i = 0;
				row = [];
				row = tmpCol;
				tmpCol = [];
				maxRow -= 3;
			} else
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
				tmpCol[i] = checkColour(check);
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
		else 
		 return row[0] = checkColour(row);
	}

	return row[0];
}

function checkColour(checkAll) {
	if (checkAll.includes('R') && checkAll.includes('B')){
		return 'G';
	}
	else if (checkAll.includes('G') && checkAll.includes('B')){
		return 'R';
	}
	else {
		return 'B';
	}
}

// function Rule1(){

// }

//   Rules that I have in place
//   Rule 1 GRBG => G 
//   if 1st and 4th the same then answer the same as 1st

//   Rule 2 RGBG => B or RGRB => G 
//   if 2nd and 4th the same but 1st and 3rd different then answer the same as 3rd

//   Rule 3 same as Rule 2 but opposite RGRB => G 
//   if 1st and 3rd the same but 2nd and 4th different then answer the same as 2nd

//   Rule 4 RRRG => B
//   if first 3 or last 3 the same and 4th or 1st respectivly different then answer is the oposite colour to the two colours used

//   Rule 4 same as Rule 4 but opposite GBBB => R
//   if first 3 or last 3 the same and 4th or 1st respectivly different then answer is the oposite colour to the two colours used

//   Rule 5 RRGB => G or RGBB => G
//   if the 1st and 2nd the same but 3rd and 4th different then answer will be the 3rd 

//   Rule 6: GRRB => R
//   if the 2nd and 3rd are the same but 1st and 4th differnt then answer will be 2nd

//   Rule 7: BBRR => G
//   if the 1st and 2nd same and 3rd and 4th same but 2nd and 3rd differnent then answer will be the opposite of those two colours