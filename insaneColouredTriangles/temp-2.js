function triangle(row) {
	var maxRow = row.length;
	var tmpCol = new Array(row.length);
	var pre = '';
	var next = '';
	var i = 0;
	
	while (0 < maxRow - 1)
	{
		pre = row[i];
		next = row[i+1];
		if ((pre == 'G' && next == 'B') || (pre == 'B' && next == 'G')) // R
		  tmpCol[i] = 'R';
		else if (pre == next) // R G B
		  tmpCol[i] = pre;
		else if ((pre == 'G' && next == 'R') || (pre == 'R' && next == 'G')) // B
		  tmpCol[i] = 'B';
		else // G
		  tmpCol[i] = 'G';	
      
     if (maxRow-2 == i)
      {
		i = 0;	
        row = [];
	  	row = tmpCol;
        tmpCol = [];
        maxRow -= 1;
      }
      else 
      i++;
	}  
	return row[0];
  }