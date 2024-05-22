using System.Drawing;

public class Kata
{
  public static string Rgb(int r, int g, int b) 
  {
    // validate r,g,b
    r = r > 255 ? 255 : r < 0 ?  0 : r;
    g = g > 255 ? 255 : g < 0 ?  0 : g;
    b = b > 255 ? 255 : b < 0 ?  0 : b;
    Color myColor = Color.FromArgb(r, g, b);
    string hex = myColor.R.ToString("X2") + myColor.G.ToString("X2") + myColor.B.ToString("X2");

    return hex;
  }
}