public class Kata
{
  public static int SumMul(int n, int m)
  {
    if(n <= 0 || m <= 0 || n > m || n == m)
    {    
      throw new System.ArgumentException("Parameter cannot be non positive integer or n > m");
    }
    else
    {
      int tmp = 0;
      int total = tmp;
      while(tmp <= m)
      {
        total += tmp;
        tmp += n;
      }
      return total;
    }    
  }
}