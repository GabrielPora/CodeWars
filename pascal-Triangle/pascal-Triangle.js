function pascalsTriangle(n) {
	//return a flat array representing the values of Pascal's Triangle to the n-th level
	var maxRow = n;
	var maxCol = 0;
	var preCol = [];
  var nextCol = [];
	var completeArry = [];
	var layer = 1;
	var count = 0;
	  var first = "";
	  var last = "";
    if (maxRow == 1)
  		{
  			nextCol[0] = layer;
  			return nextCol[0];
  		}
	  
    console.log("maxRow: ", maxRow);
	  for(var i = 0; i < maxRow  ; i++) // Start Row
	  {
//       preCol = nextCol;
  		if(i == 0)
      {
        nextCol[i] = layer;
//         console.log("Entered first if: ", i);          
//           nextCol[j+1] = layer;
      }      
//         console.log("maxCol Count: ", maxCol);    
      else
      {
        maxCol += 1;
//         console.log("preCol Before: ", preCol);
    		for(var j = 0; j < maxCol ; j++) // Complete Row e.g Columb
    		{
      			nextCol[0] = layer;
      			nextCol[maxCol] = layer;
            console.log("preCol: ", preCol); 
    				if (j > 0 && j < maxCol ) 
    				{
  //             console.log("preCol[j]: ", preCol); 
  //             console.log("nextCol[j]: ", nextCol); 
    					nextCol[j] = preCol[j-1] + preCol[j];
  //             console.log("nextCol[j]: ", nextCol); 
    				}
    		 } 
        }
      console.log("preCol Before: ", preCol);
      preCol = nextCol;
      console.log("preCol After: ", preCol);
      completeArry = completeArry.concat(preCol);
      console.log("FinalArry: ", completeArry);
	  }	
	  return completeArry;
  }
  
  