Test.describe('Insane Coloured Triangles', _ => {
	triangle('GGRG');
	let basicCases = [
	  ['B', 'B'],
	  ['GB', 'R'],
	  ['GR', 'B'],
	  ['RB', 'G'],
	  ['RR', 'R'],
	  ['RRR', 'R'],
	  ['BGBB', 'B'], // Rule 1: if 1st and 4th the same then answer the same as 1st 
	  ['RGBG', 'B'], // Rule 2: if 2nd and 4th the same but 1st and 3rd different then answer the same as 3rd
	  ['RBRGBRB', 'G'],
	  ['RGRB', 'G'], // Rule 3: if 1st and 3rd the same but 2nd and 4th different then answer the same as 2nd
	  ['RGBR', 'R'], // Rule 1
	  ['RRGB', 'G'], // Rule 5: if the 1st and 2nd or 3rd and 4th the same but 3rd and 4th different then answer will be the 3rd 
	  ['RGBB', 'G'], // Rule 5: but opposite 
	  ['RGBG', 'B'],
	  ['RRRG', 'B'], // Rule 4: if first 3 or last 3 the same and 4th or 1st respectivly different then answer is the oposite colour to the two colours used.
	  ['GBBB', 'R'], // if first 3 or last 3 the same and 4th or 1st respectivly different then answer is the oposite colour to the two colours used.
	  ['GRRR', 'B'], // Rule 4: but opposite
	  ['RGRR', 'R'],
	  ['RGGR', 'R'],
	  ['GRRB', 'R'], // Rule 6: if the 2nd and 3rd are  the same but 1st and 4th differnt then answer will be 2nd
	  ['BBRR', 'G'],
	  ['RBBR', 'R'],
	  ['GGRG', 'G'],
	  ['RRGBRGBB', 'G'],
	  ['RRGBBRGBBBBR', 'B'],
	  ['GRGRBBGRGRRRBGBBBG', 'G'],
	  ['GRGRBBGRGRRRBGBBBGRBRGBRBGGRRRBGBBBGG', 'B'],
	  ['GRGRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRBGBBBGGGRGRRBRGBRBGRBBGRGRRRBGBBRBRGBRBBGRBRGBRBGGRRRBGBBBGGGRBBGRGRRRBGBBBGRBRGBRBGGRRRBGBBBGG', 'B'],
	  ['RBRGBRBGGRRRBGBBBGG', 'G']
	]
	let doTest = tests => tests.map(
	  ([input, output]) => Test.assertEquals(triangle(input), output)
	)
	Test.it('Basic Test', _ => doTest(basicCases))
  })

//   Rules that I have in place
//   Rule 1
//   if 1st and 4th the same then answer the same as 1st

//   Rule 2
//   if 2nd and 4th the same but 1st and 3rd different then answer the same as 3rd

//   Rule 3
//   if 1st and 3rd the same but 2nd and 4th different then answer the same as 2nd

//   Rule 4
//   if first 3 or last 3 the same and 4th or 1st respectivly different then answer is the oposite colour to the two colours used

//   Rule 5
//   if the 1st and 2nd the same but 3rd and 4th different then answer will be the 3rd 

//   Rule 6: 
//   if the 2nd and 3rd are the same but 1st and 4th differnt then answer will be 2nd
