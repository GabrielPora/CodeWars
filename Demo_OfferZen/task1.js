function solution(N)
{
	var number = N;
  console.log(N);
//   intToBinaryString(number);
  var tmpBitString = intToBinaryStringV2(number);
  var index = 0;
  var max0 = 0;
  console.log("test: ", tmpBitString[0]);
  while (tmpBitString[index])
  {
    var count = 0;
	  if (tmpBitString[index] == "1")
	  {
      console.log("Entered 1");
		  var tmpindex = index + 1;
      console.log("tmpindex: ", tmpindex);
		  while (tmpBitString[tmpindex] == "0")
		  {
  			count += 1;
  			tmpindex += 1;
		  }
	  }
	  if (max0 < count)
	  	max0 = count;
	index += 1;
  }
  return max0;
	// println("intToBinaryString \"{0}\" => {1}".format(number, intToBinaryString(number)));
	// println("intToBinaryStringV2 \"{0}\" => {1}".format(number, intToBinaryStringV2(number)));
}

function intToBinaryString(number)
{
	var result = "";

	while (number > 0)
	{
		var bit = Math.floor(number % 2) != 0 ? "1":"0";
		result = bit + result;
		number = Math.floor(number/2);
	}

	while(Math.floor(result.length % 8) != 0)
		result = "0" + result;
  console.log(result);
	
	return result;
}

function intToBinaryStringV2(number)
{
	var result = number.toString(2);;

// 	while(Math.floor(result.length % 8) != 0) // uncomment to have it the same format as above intToBinaryString
// 		result = "0" + result;
  console.log(result);
	
	return result;
}

// run();