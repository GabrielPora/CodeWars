function triangle(row) {
	return row.length == 1 ? row : triangle(processedRow(row))
  }
  
  function processedRow(row) {
	return row.split('').map((el, i) => i == row.length-1 ? null : sumLetters(row[i], row[i+1])).join('');
  }
  
  function sumLetters(a, b) {
	switch (a+b) {
	  case 'BG':
	  case 'GB':
	  case 'RR': return 'R'; break;
	  case 'BR':
	  case 'RB':
	  case 'GG': return 'G'; break;
	  case 'RG':
	  case 'GR':
	  case 'BB': return 'B'; break;
	}
  }