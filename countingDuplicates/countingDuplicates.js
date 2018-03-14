function duplicateCount(text){
	var tmp = "";
	var tmptext = text.toLowerCase();
	var count = 0;
	var max = 0;
	console.log("text.length: ", text.length);
	
	
	for(i = 0; i < tmptext.length; i++)
	{
   console.log("tmptext: ", tmptext);
		tmp = tmptext[i];
      console.log("check tmp: ",tmp);
	  for(j = 0; j < tmptext.length; j++)
	  {      
        console.log("tmp: ",tmptext[j]);
    		if (tmp == tmptext[j] && tmp != " ")
    			count++;           
	  }    
      console.log("count: ",count);
      var re = new RegExp(tmp, "g");
      tmptext = tmptext.replace(re, " ");
	  if (count > 1)
		  max++;
	  count = 0;
      console.log("loop: ", i)
      console.log("max: ",max);
      console.log("\n");
	}    
      console.log("Final max: ",max);
	  return max;
  }