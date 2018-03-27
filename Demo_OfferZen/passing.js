// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

//Note I have done this test before. going to paste my previous test.

// total: 88 correct:80 performace:100

function solution(A){
    // write your code in JavaScript (Node.js 8.9.4)
//   console.time("timing loop");
	A = A.sort(function(a, b) {return a- b});
	var max = A[A.length-1];
  if (max > 1000)
  {
    var checking = solution2(A);
    return checking;
  }
	var check = false;
	var checkInt = 1;
  var pre = A[0];
  if (pre >= 2)
  {
    // console.timeEnd("timing loop");
    return checkInt;
  }
	for(var i = 0; i < max; i++)
	{
	  if(!A.includes(i+1))
	  {
  		check = true;
    //   console.timeEnd("timing loop");
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
//   console.timeEnd("timing loop");
	  return checkInt;
  }

function solution2(A){
    // write your code in JavaScript (Node.js 8.9.4)
    A = A.sort(function(a, b) {return a- b});
    var small = 0;
	var pre = A[0];
	var next = A[1];
	var check = A[2];
  var diff = 0;
  var len = A.length;
  if(A.includes(18))
	console.log("Yes it worked");
    if (next == 0 &&  pre == 0 && check == 0)
    {
        A = A.sort(function(a, b) {return b-a});
       var tmp =[];
            pre = A[0];
            next = A[1];
            diff = pre - next;
        for(var i = 0; i < len; i++)
        {
            pre = A[i];
            next = A[i+1];
            diff = pre - next;
            if(pre > 0 && next == 0 && diff > 1)
            { 
                small = pre - 1;
                return small;
            }
            if(pre > 0 && next >= 0)
               tmp[i] = A[i];
        }
        tmp = tmp.sort(function(a, b) {return a- b});
        len = tmp.length;
        for(var i = 0; i < len; i++) // Start Row
    	{
          pre = tmp[i];
          next = tmp[i+1];
           diff = next - pre;
         if(pre >= 0 && next >= 0 && diff > 1)
         { 
            small = pre + 1;
            return small;
          }
    	}
        if (small == 0)
        {
            var stringtmp = String(tmp[tmp.length-1]);
            small = parseInt(stringtmp) + 1;
            if (small <= 0)
                small = 1;
        }
    }
    else
    {
        for(var i = 0; i < len; i++) // Start Row
    	{
          pre = A[i];
          next = A[i+1];
           diff = next - pre;
         if(pre >= 0 && next >= 0 && diff > 1)
         { 
            small = pre + 1;
            return small;
          }
    	}
        if (small == 0)
        {
            var stringtmp = String(A[A.length-1]);
            small = parseInt(stringtmp) + 1;
            if (small <= 0)
                small = 1;
        }
    }
    return small;
}
