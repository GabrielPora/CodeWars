public class Sudoku
{
  public static bool ValidateSolution(int[][] board)
  {
    //TODO
    int total = 0;
      int i = 0;
      int j = 0;
      for(i = 0; i < 9; i++) // board[i][j])
      {  
          for(j = 0; j < 9; j++) // (board[i][j]) 
            total += board[i][j];
          if (total != 45)
             return false;
          total = 0;
      }
      i = 0;
      j = 0;
      for(i = 0; i < 9; i++) // board[i][j])
      {  
          for(j = 0; j < 9; j++) // (board[i][j]) 
            total += board[j][i];
          if (total != 45)
             return false;
          total = 0;
      }
      i = 0;
      j = 0;
      total = 0;
      for(i = 0; i < 3; i++) // board[i][j])
      {  
          for(j = 0; j < 3; j++) // (board[i][j]) 
            total += board[i][j];
          j = 0;
      }      
      if (total == 45)
        return true;
      else
        return false;
  }
}