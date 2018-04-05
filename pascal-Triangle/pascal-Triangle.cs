using System;
using System.Collections.Generic;

public static class Kata
{
  public static List<int> PascalsTriangle(int n) {
  	int maxRow = n;
	int maxCol = 0;
	var preCol = new List<int>();
  var nextCol = new List<int>();
	var completeArry = new List<int>();
	int layer = 1;
	int count = 0;
    if (maxRow == 1)
  		{
  			nextCol[0] = layer;
  			return nextCol;
  		}
	  
//     console.log("maxRow: ", maxRow);
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
//             console.log("preCol: ", preCol); 
    				if (j > 0 && j < maxCol ) 
    				{
  //             console.log("preCol[j]: ", preCol); 
  //             console.log("nextCol[j]: ", nextCol); 
    					nextCol[j] = preCol[j-1] + preCol[j];
  //             console.log("nextCol[j]: ", nextCol); 
    				}
    		 } 
        }
//       console.log("preCol Before: ", preCol);
      preCol = nextCol;
//       console.log("preCol After: ", preCol);
      completeArry = completeArry.concat(preCol);
//       console.log("FinalArry: ", completeArry);
	  }	
	  return completeArry;
    
    return new List<int>();
  }
} 
