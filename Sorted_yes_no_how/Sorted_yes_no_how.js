function isSortedAndHow(array) {
	var testFirst = array[0];
	var testSecond = array[1];
	var index = 0;
	if (testFirst < testSecond)
	{
	  while (array[index])
	  {
		if (array[index] > array[index+1])
		  return 'no';
		index++;
	  }
	  return 'yes, ascending';
	}
	else
	{
	  index = 0;
	  while (array[index])
	  {
		if (array[index] < array[index+1])
		  return 'no'; 
		index++;     
	  }
	  return 'yes, descending';
	}
  }