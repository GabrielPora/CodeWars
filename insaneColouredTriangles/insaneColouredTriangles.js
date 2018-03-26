function triangle(row) {
	var maxRow = row.length;
	var tmpCol = [];
	var pre = "";
	var next = "";
	
	for(var i = 0; i < maxRow - 1; i++) // Start Row
	{
	  for(var j = 0; j < row.length - 1; j++) // Complete Row e.g Columb
	  {
		pre = row[j];
		next = row[j+1];
		if ((pre == "G" && next == "B") || (pre == "B" && next == "G")) // R
		  tmpCol[j] = "R";
		else if (pre == "R" && next == "R") // R
		  tmpCol[j] = "R";
		else if (pre == "B" && next == "B") // B
		  tmpCol[j] = "B";
		else if ((pre == "G" && next == "R") || (pre == "R" && next == "G")) // B
		  tmpCol[j] = "B";
		else // G
		  tmpCol[j] = "G";
	  } 
	  row = tmpCol;
	}	
	return row[0];
  }