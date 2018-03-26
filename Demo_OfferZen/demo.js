// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A = A.sort(function(a, b) {return a- b});
    var small = 0;
// 	var pre = "";
// 	var next = "";
    for(var i = A[0]; i < A[A.length - 1]; i++) // Start Row
	{
	   // console.log("Index: ", A[A.length - 1])
        if(!A.includes(i) && i > 0)
        { 
            small = small + i;
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
    return small;
}