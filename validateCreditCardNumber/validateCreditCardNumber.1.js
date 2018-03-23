function validate(n){
	var numArray = n.toString();
  var numString = n.toString();
	var numlength = numString.length;
  var total = 0;
	var index = 0;
  var multi = 1;
// 	for(var i=0; i<numArray.length; i++) { numArray[i] = parseInt(numArray[i], 10); }
// 	console.log("numlength: ", numlength);
  //   var b = n.split('').map(Number);
	if (numlength % 2 == 0)
	{
//         console.log("numArray: ", numArray[index]);
	  for (var i = 0; i < numString.length; i++)
	  {
      if(index % 2 == 0)
      {
//         console.log("numArray: ", numArray[index]);
//         multi = numArray[index].reduce(function(a,2){return a*2;});
//     		numArray[index] = numArray[index] * 2;
//         console.log("numArray: ", numArray[index]);
        var replaceNum = parseInt(numString[index]);
        console.log("replaceNum: ", replaceNum);
        replaceNum = replaceNum * 2;
        console.log("replaceNum after: ", replaceNum);
        if (replaceNum > 9)
          replaceNum = replaceNum - 9;
        replaceNum = replaceNum.toString();
        numString[i] = replaceNum;
        console.log("numString: ", numString[index]);
//         index+=2;
      }
      total += numArray[index];
      index+=1;
	  }
	}
	else
	{
	  while (numArray[index])
	  {
      if(index % 2 != 0)
      {
    		numArray[index] = numArray[index] * 2;
        if (numArray[index] > 9)
          numArray[index] = numArray[index] - 9;
      }
      total += numArray[index];
      index+=1;
	  }
	}
  console.log("total: ", total);
  if (total % 10 == 0)
    return true;
  else
    return false;
	console.log(numlength);
	console.log(numArray[1]);
  }