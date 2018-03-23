function iqTest(numbers){
	// ...
	var countodd = 0;
	var counteven = 0;
	var index = 0;
	numbers = numbers.match(/\d+/g).map(Number);
	while (numbers[index])
	{
	  if(numbers[index] % 2 == 0)
		counteven+=1;
	  else
		countodd+=1;
	  index+=1;
	}    
	console.log("counteven: ",counteven);
	console.log("countodd: ",countodd);
	index = 0;
	console.log("index: ",index);
	if (counteven > countodd)
	{
	  while (numbers[index])
	  {
		if(numbers[index] % 2 != 0)
		  return (index+=1);
		index+=1;
	  }
	}
	else
	{
	  while (numbers[index])
	  {
		if(numbers[index] % 2 == 0)
		  return (index+=1);
		index+=1;
	  }
	   
	}
	  
	console.log("test: ",numbers);
	console.log("test1: ",numbers[0]);
  }
  