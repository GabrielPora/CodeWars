function sumMul(n,m){
	//your idea here
	  if(n <= 0 || m <= 0)
		return "INVALID";
	  else
	  {
		var tmp = 0;
		var total = tmp;
		while(tmp < m)
		{
		  total += tmp;
		  tmp += n;
	//       console.log("tmp: ", tmp);
	//       console.log("total: ", total);
		}
		return total;
	  }
	}