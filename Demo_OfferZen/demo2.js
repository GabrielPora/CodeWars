// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// total: 66 correct:100 performace:25

function solution(A){
    // write your code in JavaScript (Node.js 8.9.4)
	A = A.sort(function(a, b) {return a- b});
	var max = A[A.length-1];
	var check = false;
	var checkInt = 1;
	for(var i = 0; i < max; i++)
	{
	  if(!A.includes(i+1))
	  {
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