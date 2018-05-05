using System;
using System.Text.RegularExpressions;
public class solution
{
  public bool validate(string n)
  {    
    int arrayLength = 0;
    int[] arrayInt=new int[arrayLength];
    MatchCollection newMatch = Regex.Matches(n, "[0-9]");
    if (newMatch.Count > 0)
    {
        arrayLength = newMatch.Count;
        arrayInt = new int[newMatch.Count];
        for (int i = 0; i < newMatch.Count; i++)
        {
            arrayInt[i] = Convert.ToInt32(newMatch[i].Value);
        }
    }
    Console.WriteLine(arrayLength);
    int index = 0;
    int arraySum = 0;
    int result = 0;
    if(arrayLength % 2 == 0)
    {
			while(index < arrayLength)
			{
        if (index % 2 == 0)
        {
          arrayInt[index] = arrayInt[index] * 2;
          if (arrayInt[index] > 9)
            arrayInt[index] = arrayInt[index] - 9;
          index++;
        }
        else
          index++;
			}
    }
    else
    {
      while(index < arrayLength)
			{
        if (index % 2 != 0)
        {
          arrayInt[index] = arrayInt[index] * 2;
          if (arrayInt[index] > 9)
            arrayInt[index] = arrayInt[index] - 9;
          index++;
        }
        else
          index++;
			}
    }
    index =0;
    while(index < arrayLength)
			{
        Console.WriteLine(arrayInt[index]);
        arraySum = arrayInt[index] + arraySum;
        index++;
			}

    result = arraySum % 10;
    if (result == 0)
      return true;
    else
      return false;
  }
}