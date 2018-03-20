function validSolution(board){
	//TODO
	var tmp = board[1][2];
	console.log("tmp: ",tmp);
  //   var regex = /[+-]?\d+(?:\.\d+)?/g
	var match;
	var sum = 0;
	var total = 0;
	var i = 0;
	var j = 0;
	for(i = 0; i < 9; i++) // board[i][j])
	{  
  //       var tmp = board[i][j];
		for(j = 0; j < 9; j++) // (board[i][j]) 
		{ 
  //         console.log("board: ",board[i][j]);
		  sum += board[i][j];
		  total += board[i][j];
		}
		if (total != 45)
		   return false;
		total = 0;
	}
	i = 0;
	j = 0;
	for(i = 0; i < 9; i++) // board[i][j])
	{  
  //       var tmp = board[j][i];
		for(j = 0; j < 9; j++) // (board[i][j]) 
		{ 
  //         console.log("board: ",board[j][i]);
		  sum += board[j][i];
		  total += board[j][i];
		}
		if (total != 45)
		   return false;
		total = 0;
	}
	i = 0;
	j = 0;
	total = 0;
	for(i = 0; i < 3; i++) // board[i][j])
	{  
		for(j = 0; j < 3; j++) // (board[i][j]) 
		{ 
		  console.log("board: ",board[i][j]);
		  sum += board[i][j];
		  total += board[i][j];
		}
		  console.log("board2: ",board[i][j]);
		  console.log("total: ",total);
  //       if (total != 45)
  //          return false;      
		console.log("i: " + i + " j: "+ j);
		j = 0;
  //       total = 0;
	}
	
	if (total == 45)
	  return true;
	else
	  return false;
  }
  
  // while (match = regex.exec(board[i][j])) {
  //       sum += parseInt(match);
  //       console.log(match[0]);
  //       j++;
  //       console.log("i: " + i + " j: "+ j);
  //       } 