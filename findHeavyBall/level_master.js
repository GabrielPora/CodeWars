function findBall(scales) {
	// call scales.getWeight() max 2 times
	// return indexOfHeavyBall;
	  var w = scales.getWeight([0, 1, 2], [4, 5, 6]); // 3 7
		  console.log("scales.getWeight: ", w);
	  if (w === 0)
	  {
		  w = scales.getWeight([3], [7]);
		  if (w === -1)
			return 3;
		  else
			return 7;
		
	  }
	  else if((w === -1)) // [0, 1, 2]
	  {      
		  w = scales.getWeight([0], [1]);
		  if (w === 0)
			return 2;
		  else if (w === -1)
			return 0;
		  else
			return 1;
	  }
	  else  // [4, 5, 6]
	  {         
		  w = scales.getWeight([4], [5]);
		  if (w === 0)
			return 6;
		  else if (w === -1)
			return 4;
		  else
			return 5;
	  }
	}