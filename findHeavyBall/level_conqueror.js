function findBall(scales) {
	// call scales.getWeight() max 3 times
	// return indexOfHeavyBall;
	  var w = scales.getWeight([0, 1, 2, 3], [4, 5, 6, 7]);
		  console.log("scales.getWeight: ", w);
	  if (w === -1)
	  {
		w = scales.getWeight([0, 1], [2, 3]);
		if (w === -1)
		{
		  w = scales.getWeight([0], [1]);
		  if (w === -1)
			return 0;
		  else
			return 1;
		}
		else
		{
		  w = scales.getWeight([2], [3]);
		  if (w === -1)
			return 2;
		  else
			return 3;
		}    
	  }
	  else
	  {
		w  = scales.getWeight([4, 5], [6, 7]);
		if (w === -1)
		{
		  w = scales.getWeight([4], [5]);
		  if (w === -1)
			return 4;
		  else
			return 5;
		}
		else
		{
		  w = scales.getWeight([6], [7]);
		  if (w === -1)
			return 6;
		  else
			return 7;
		}
	  }
	}