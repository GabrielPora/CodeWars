function randomCase(x) {
	// Code your solution here 
	var replaceX = "";
	var i = 0;
	while(i < x.length)
	{
	  ran = Math.floor(Math.random() * 10); //between 0 and 9
	  if (ran < 5)  
		replaceX += x[i].toLowerCase();
	  else
		replaceX += x[i].toUpperCase();
		i++;
	}
	return replaceX;
  }