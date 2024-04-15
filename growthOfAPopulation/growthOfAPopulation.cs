using System;

class Arge {
    
    public static int NbYear(int p0, double percent, int aug, int p) {
        int year;
        for (year = 0; p0 < p; year++)
		  // type cast for leading decimals, population deals with whole numbers
          p0 += (int)(p0*percent/100) + aug; 
        return year;
    }
}