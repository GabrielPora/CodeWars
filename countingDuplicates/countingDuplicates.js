function duplicateCount(text){
	var tmp = ""; // temp new string to ue to compare the letters.
	var tmptext = text.toLowerCase(); // change text to lowercase to ignore case and i also remove repeated letters
	var count = 0; // counts the number of times a letter repeats
	var noRepeats = 0; // this is to store the number of repeats
	for(i = 0; i < tmptext.length; i++)
	{
		tmp = tmptext[i];
	  for(j = 0; j < tmptext.length; j++)
	  {      
    		if (tmp == tmptext[j] && tmp != " ")
    			count++;           
	  }    
      var re = new RegExp(tmp, "g");
      tmptext = tmptext.replace(re, " "); // used to replace tmp in the string with a space
	  if (count > 1)
		  noRepeats++; 
	  count = 0;
	}    
	  return noRepeats;
  }