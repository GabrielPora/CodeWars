// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A = A.sort(function(a, b) {return a- b});
    var small = 0;
	var pre = A[0];
	var next = A[1];
	var check = A[2];
  var diff = 0;
  var len = A.length;
//   len = A[len-1];
//   var len = A[A.length] -1;
       console.log("A: ", A);
       console.log("length: ", len)
    if (next == 0 &&  pre == 0 && check == 0)
    {
        A = A.sort(function(a, b) {return b-a});
       console.log("runnning here : ", A);
       var tmp =[];
            pre = A[0];
            next = A[1];
            diff = pre - next;
//         if (!diff)
//         {
//           console.log("YESRDFSDF");
//         }
        for(var i = 0; i < len; i++)
        {
            pre = A[i];
            next = A[i+1];
            diff = pre - next;
            console.log("diff: ", diff);
            if(pre > 0 && next == 0 && diff > 1)
            { 
                small = pre - 1;
                console.log("fgdfnhvhv  con it run: ", diff);
                return small;
            }
            if(pre > 0 && next >= 0)
               tmp[i] = A[i];
        }
        tmp = tmp.sort(function(a, b) {return a- b});
        console.log("Tmp Array: ", tmp);
        len = tmp.length;
        for(var i = 0; i < len; i++) // Start Row
    	{
          pre = tmp[i];
          next = tmp[i+1];
           diff = next - pre;
           console.log("i: ", i);
           console.log("pre: ", pre);
           console.log("next: ", next);
           console.log("diff: ", diff);
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
           console.log("i: ", i);
           console.log("pre: ", pre);
           console.log("next: ", next);
           console.log("diff: ", diff);
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