function duplicateCount(text){
	//...
	var tmp = "";
	var count = 0;
	var max = 0;
  //   console.log("text.length: ", text.length);
	
	for(i = 0; i < text.length; i++)
	{
	  tmp = text[i].toLowerCase();
  //     console.log("tmp: ",tmp);
	  for(j = i+1; j < text.length; j++)
	  {      
  //       console.log("text: ",text[j].toLowerCase());
		if (tmp == text[j].toLowerCase())
		  if(count == 0)
			count +=2;
		  else
			count++;
	  }    
  //     console.log("count: ",count);
	  if (max < count)
		max = count;
	  count = 0;
  //     console.log("loop: ", i)
  //     console.log("max: ",max);
  //     console.log("\n");
	}  
	  max = max % 5;    
  //     console.log("Final max: ",max);
	  return max;
  //     return -1;
  }