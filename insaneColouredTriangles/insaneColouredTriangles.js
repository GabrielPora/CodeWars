function triangle(row) {
	var maxRow = row.length;
	var tmpColpre = [];
	var tmpCol = [];
	var pre = "";
	var next = "";
	
	for(var i = 0; i < maxRow - 1; i++) // Start Row
	{
	  tmpColpre = row;
	  var maxCol = tmpColpre.length;
	  pre = tmpColpre[i];
	  next = tmpColpre[i+1];
	  for(var j = 0; j < maxCol - 1; j++) // Complete Row e.g Columb
	  {
		pre = tmpColpre[j];
		next = tmpColpre[j+1];
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