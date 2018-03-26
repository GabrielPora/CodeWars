// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var tmp = A.sort(function(a, b){return a-b});
    var len = A.length
    var small = 0;
    var pre = tmp[0];
    var next = tmp[1];
    var i = 0;
    for(i = 0; i < A.length; i++)
    {
        pre = tmp[0];
        next = tmp[1];
        if (tmp[i] > 0 && i > 0)
        {
            if(tmp[i] != i && small < i && i != pre && i != next)
            {
                small = small + i;
            }
        }
    }
    if (small == 0)
    {
        var stringtmp = String(tmp[tmp.length-1]);
        small = parseInt(stringtmp) + 1;
        if (small <= 0)
            small = 1;
    }
    return small;
}