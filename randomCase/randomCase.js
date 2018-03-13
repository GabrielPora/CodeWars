function randomCase(x) {
	// Code your solution here 
	if(x.length == 0 || x.length == 1)
	  return x;
  //   console.log(x.length);
	var replaceX = x[0].toUpperCase();
  //    replaceX += x[1];
  //     var ran = Math.floor(Math.random() * 10); //between 0 and 9
  //     console.log(ran);
	for(i = 0; i < x.lenght; i++)
	{
	  ran = Math.floor(Math.random() * 10); //between 0 and 9
	  if (ran < 5)  
		replaceX += x[i].toLowerCase();
	  else
		replaceX += x[i].toUpperCase();
	}
	return replaceX;
		
  //   if(x.length == 0)
  //     return x;
  //   if (x.length == 1)
  //     return x[1].toUpperCase();
  //   var replaceX = "";
  //     var ran = Math.floor((Math.random() * 10) + 1);
  //     if (ran > 5)
  //       return replaceX = x.toUpperCase();
  //     else
  //      return replaceX = x.toLowerCase();
	   
  //   if(x.length == 0 || x.length == 1)
  //     return x;
  //   var replaceX = "";
  //   for(i = 0; i < x.lenght; i++)
  //   {
  //     var ran = Math.random() % 10 + 1;;
  //     if (ran > 5)
  //       replaceX = x[i].toUpperCase();
  //     else
  //       replaceX = x[i].toLowerCase();
  //   }
  }