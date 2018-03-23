function validate(n){
  var numString = n.toString();
  var numlength = numString.length;
  var myArray = numString
  for(var i=0; i<myArray.length; i++) { myArray[i] = parseInt(myArray[i], 10); }
  console.log("MyArray: ", myArray[2]);
//   var b = n.split('').map(Number);
  if (numlength % 2 == 0)
  {
    var index = 0;
    while (numString[index])
    {
      var replaceNum = parseInt(numString[index]);
      replaceNum = replaceNum * 2;
      replaceNum = replaceNum.toString();
      numString[index] = replaceNum;
      index+=2;
    }
  }
  else
  {
  }
  console.log(numlength);
  console.log(numString[1]);
}