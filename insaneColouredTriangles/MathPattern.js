// When RGB => G will be the colour in the middle for this
// When RRB => B will be the end colour
// When BRR => B will be the start colour
// When RBR => G will be the colour not in it 
// When RRR => R will be the same colour

// using the above create a soltion to solve 

function triangle(row) {
	// first need to check if length is mod 3 = 0 
	// this is to ensure that the solution can work for it.
	// will need a seperate solution for less than 3.
	// once lenght is 2, do a normal solve.

	var MAX_N_LOG_3 = 11;
	var sum = 0;
	var n = row.length;
	
    // calculate digits of n - 1
    var dig_n = [MAX_N_LOG_3];
    var len_n = conv_base_3(n - 1, MAX_N_LOG_3, dig_n);

	if (n == 1)
		return row[0];
	
	for (var km1 = 0; km1 < n; km1++){
        // calculate digits of k - 1
		var dig_k = [MAX_N_LOG_3];
		var len_k = conv_base_3(km1, MAX_N_LOG_3, dig_k);
		
        // calculate C(n - 1, k - 1) mod 3
        var Cnk_mod3 = lucas_3(len_n, dig_n, len_k, dig_k);

        // add using the modulo rule
        sum = (sum + Cnk_mod3 * strToNum(input[km1])) % 3;
	}
	
    // value of (-1) ** (n - 1)
    // (no need for pow; just need to know if n is odd or even)
    var sign = (n % 2) * 2 - 1;

    // for negative numbers, must resolve the difference
    // between C's % operator and mathematical mod
    var sum_mod3 = (3 + (sign * (sum % 3))) % 3;
    return numToStr(sum_mod3);

}

// convert a number to base 3
// and returns the number of digits
function conv_base_3(n, max, out)
{
    var i = 0;
    while (i < max && n > 0)
    {
        out[i] = n % 3;
        n /= 3;
        i++;
    }
    return i;
}

// calculate the binomial coefficient for n < 3
function binom_max_2(n, k)
{
    if (n < k)
        return 0;
    switch (n)
    {
        case 0:
        case 1:
            return 1;
        case 2:
            return 1 + (k == 1);

        // shouldn't happen
        default:
            return 0;
    }
}

// Lucas's theorem for p = 3
function lucas_3(
    len_n, dig_n,
     len_k, dig_k
)
{
    // use modulo product rule:
    // prod[i] % 3 = ((prod[i - 1] % 3) * value[i])      
    var prod = 1;
    for (var i = 0; i < len_n; i++) {
        var n_i = dig_n[i];
        var k_i = (i < len_k) ? dig_k[i] : 0;
        prod = (prod * binom_max_2(n_i, k_i)) % 3;
    }
    return prod % 3;
}

// convert from 012 to RGB
function int_2_char(i)
{
    switch (i) {
        case 0: return 'R';
        case 1: return 'G';
        case 2: return 'B';

        // shouldn't happen
        default:
            return '\0';
    }
}

// convert from RGB to 012
function char_2_int(c)
{
    switch (c) {
        case 'R': return 0;
        case 'G': return 1;
        case 'B': return 2;

        // shouldn't happen
        default:
            return 3;
    }
}

 
function numToStr(number) {
	return number === 0 ? "R" : number == 1 ? "G" : "B";
  }
  
  function strToNum(color) {
	return color === "R" ? 0 : color === "G" ? 1 : 2;
  }
