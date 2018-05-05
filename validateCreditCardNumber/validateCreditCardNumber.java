public class Validate{
  public static boolean validate(String n){
    // TODO: solution 
    String[] integerStrings = n.split(""); 
    Integer[] intarray=new Integer[integerStrings.length];
    int index=0;
    int total = 0;
          System.out.println(integerStrings.length);
    if (n.length() % 2 == 0)
    {
      for(String str:integerStrings){
          intarray[index]=Integer.parseInt(str.trim());//get rid of additional whitespace
          if (index % 2 == 0)
          {
            intarray[index] = intarray[index] * 2;
            if (intarray[index] > 9)
              intarray[index] = intarray[index] - 9;
          }
          else
          {
            intarray[index] = intarray[index];
          }
          total = intarray[index] + total;
          System.out.println("Part 1");
          System.out.println(intarray[index]);
          index++;
      }
    }
    else
    {
      for(String str:integerStrings){
          intarray[index]=Integer.parseInt(str.trim());//get rid of additional whitespace
          if (index % 2 != 0)
          {
            intarray[index] = intarray[index] * 2;
            if (intarray[index] > 9)
              intarray[index] = intarray[index] - 9;
          }
          total = intarray[index] + total;
          System.out.println("Part 2");
          System.out.println(intarray[index]);
          index++;
      }
    }
    if (total % 10 == 0)
      return true;
    else
      return false;
  }
}