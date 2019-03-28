// When RGB => G will be the colour in the middle for this
// When RRB => B will be the end colour
// When BRR => B will be the start colour
// When RBR => G will be the colour not in it
// When RRR => R will be the same colour

// using the above create a soltion to solve
public class Kata {

    public static char triangle(final String row) {
        // first need to check if length is mod 3 = 0
        // this is to ensure that the solution can work for it.
        // will need a seperate solution for less than 3.
        // once lenght is 2, do a normal solve.

        int maxRow = row.length();
        // var modCheck = row.length % 3;
        String newRow = row;
        char[] tmpCol = new char[0];
        char firstColour;
        char secondColour;
        char thirdColour;
        int i = 0;

        if (maxRow == 1)
            return newRow.charAt(0);

        if (maxRow >= 4) {

            char checkAll[] = new char[maxRow];
            char fourthColour;
            while (4 <= maxRow) {
                firstColour = newRow.charAt(i);
                secondColour = newRow.charAt(i + 1);
                thirdColour = newRow.charAt(i + 2);
                fourthColour = newRow.charAt(i + 3);
                checkAll[0] = firstColour;
                checkAll[1] = secondColour;
                checkAll[2] = thirdColour;
                checkAll[3] = fourthColour;

                // Rule 1
                if (firstColour == fourthColour) {
                    tmpCol[i] = firstColour;
                } else {
                    // Rule 6
                    if (secondColour == thirdColour && secondColour != fourthColour && firstColour != secondColour) {
                        tmpCol[i] = secondColour;
                    }
                    // Rule 2
                    else if (firstColour == thirdColour && fourthColour != secondColour && firstColour != secondColour) {
                        tmpCol[i] = secondColour;
                    }
                    // Rule 2 opposite
                    else if (firstColour != thirdColour && fourthColour == secondColour && secondColour != thirdColour) {
                        tmpCol[i] = thirdColour;
                    }
                    // Rule 5
                    else if (firstColour == secondColour && fourthColour != thirdColour && secondColour != thirdColour) {
                        tmpCol[i] = thirdColour;
                    }
                    // Rule 5 opposite
                    else if (firstColour != secondColour && fourthColour == thirdColour && secondColour != thirdColour) {
                        tmpCol[i] = secondColour;
                    }
                    // Rule 4 Need to find out about this
                    else {
                        tmpCol[i] = checkColour(checkAll);
                    }
                }

                if (maxRow - 4 == i) {
                    i = 0;
                    newRow = new String(tmpCol);
                    maxRow -= 3;
                    tmpCol = new char[maxRow];
                } else
                    i++;
            }
        }

        if (maxRow == 3) {

            char checkAll[] = new char[maxRow];
            while (3 <= maxRow) {
                firstColour = newRow.charAt(i);
                secondColour = newRow.charAt(i + 1);
                thirdColour = newRow.charAt(i + 2);
                checkAll[0] = firstColour;
                checkAll[1] = secondColour;
                checkAll[2] = thirdColour;

                if (secondColour == firstColour && secondColour != thirdColour)
                    tmpCol[i] = thirdColour;
                if (secondColour == thirdColour && secondColour != firstColour)
                    tmpCol[i] = firstColour;
                if (firstColour != secondColour && firstColour != thirdColour && secondColour != thirdColour)
                    tmpCol[i] = secondColour;
                if (secondColour == thirdColour && secondColour == firstColour)
                    tmpCol[i] = firstColour;
                if (firstColour == thirdColour && secondColour != firstColour) {
                    tmpCol[i] = checkColour(checkAll);
                }

                if (maxRow - 3 == i) {
                    i = 0;
                    maxRow -= 2;
                    newRow = new String(tmpCol);
                    tmpCol = new char[maxRow];
                } else {
                    i++;
                }
            }
        }

        if (newRow.length() == 2) {
            if (newRow.charAt(0) == newRow.charAt(1))
                return newRow.charAt(0);
            else
                return checkColour(newRow.toCharArray());
        }

        return newRow.charAt(0);
    }

    public static char checkColour(char[] checkAll) {
        String checkValue = checkAll.toString();
        if (checkValue.contains("R") && checkValue.contains("B")) {
            return 'G';
        } else if (checkValue.contains("G") && checkValue.contains("B")) {
            return 'R';
        } else {
            return 'B';
        }
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