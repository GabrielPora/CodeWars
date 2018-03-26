// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A = A.sort(function(a, b){return a- b});
    var small = 0 ;
    var pre = 0;
    var next = 0;
    var diff = 0;
    for(var i = A[0]; i < A[A.length-1]; i++)
    {
        pre = A[i];
        next = A[i+1];
        diff = next - pre;
        if(pre > 0 && next > 0 && diff > 1)
        {
            small = pre + 1;
            return small;
        }
    }
    if (small == 0)
    {
        var stringtmp = String(A[A.length - 1]);
        small = parseInt(stringtmp) + 1;
        if (small <= 0)
            small = 1;
    }
    return small;
}