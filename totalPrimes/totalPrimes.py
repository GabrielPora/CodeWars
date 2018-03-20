from math import sqrt
from itertools import count, islice

def isPrime(n):
    if n < 2: return False
    for number in islice(count(2), int(sqrt(n)-1)):
        if not n%number:
            return False
    return True
    

def get_total_primes(a, b):
    # Happy coding!
    prime = []
    count = 0
    countCheck = 0
    tmpindexing = 0
    index = a
    while index < b:
        if isPrime(index):
            prime.append(index)
        index+=1        
    
    for tmpindex in prime:
        number_string = str(tmpindex)
        indexingCount = len(number_string)
        for ch in number_string:
            if isPrime(int(ch)):
                countCheck+=1
        if indexingCount == countCheck:
            count+=1
        countCheck = 0
            
#     print("Final count: ",count)

    return count