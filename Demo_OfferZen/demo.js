function solution(A){
	A = A.sort(function(a, b) {return a- b});
	var max = A[A.length-1];
	var check = false;
	var checkInt = 1;
	for(var i = 0; i < max; i++)
	{
	  if(!A.includes(i+1))
	  {
		  console.log("Yes it worked");
		check = true;
		return i+1;
	  }
	}
	if (check == false)
	{
	  var stringtmp = String(A[A.length-1]);
	  var checkInt = parseInt(stringtmp) + 1;
	  if (checkInt <= 0)
		  checkInt = 1;
	}
	  return checkInt;
  }