def find_ball(scales):
    # call scales.get_weight() at most 3 TIMES
    # return indexOfHeavierBall
    w = scales.get_weight([0, 1, 2], [4, 5, 6])
    if w == 0:
          w = scales.get_weight([3], [7])
          if w == -1:
            return 3
          else:
            return 7
    if w == -1:    
          w = scales.get_weight([0], [1])
          if w == 0:
            return 2
          if w == -1:
            return 0
          else:
            return 1
    else:      
          w = scales.get_weight([4], [5])
          if w == 0:
            return 6
          if w == -1:
            return 4
          else:
            return 5