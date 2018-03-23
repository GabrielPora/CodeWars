function validate(n){
	var numArray = n.toString();
  var numString = n.toString();
	var numlength = numString.length;
  var tmpNum = [];
  var total = 0;
  var multi = 1;
	if (numlength % 2 == 0)
	{
	  for (var index = 0; index < numString.length; index++)
	  {
      var replaceNum = parseInt(numString[index]);
      if(index % 2 == 0)
      {
        replaceNum = replaceNum * 2;
        if (replaceNum > 9)
          replaceNum = replaceNum - 9;
        replaceNum = replaceNum.toString();
        tmpNum[index] = replaceNum;
        numString[index] = replaceNum;
        total = total + parseInt(tmpNum[index]);
      }
      else
      {
        tmpNum[index] = replaceNum;
        total = total + parseInt(tmpNum[index]);
      }
	  }
	}
	else
	{
	  for (var index = 0; index < numString.length; index++)
	  {
      var replaceNum = parseInt(numString[index]);
      if(index % 2 != 0)
      {
        replaceNum = replaceNum * 2;
        if (replaceNum > 9)
          replaceNum = replaceNum - 9;
        replaceNum = replaceNum.toString();
        tmpNum[index] = replaceNum;
        numString[index] = replaceNum;
        total = total + parseInt(tmpNum[index]);
      }
      else
      {
        tmpNum[index] = replaceNum;
        total = total + parseInt(tmpNum[index]);
      }
	  }
	}
  if (total % 10 == 0)
    return true;
  else
    return false;
  }