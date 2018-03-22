from math import sqrt
from itertools import count, islice
import gmpy2
import timeit
import time

# def get_total_primes(start, end):
#         return list(sorted(set(range(start,end+1)).difference(set((p * f) for p in range(2, int(end ** 0.5) + 2) for f in range(2, (end/p) + 1)))))


def primes(n, b):    
    prime = []
#     start = time.time()
#     end = time.time()
    if isPrime(n):        
        prime.append(n) 
#     end = time.time()       
#     print (end - start)
    while n < b:
        n = gmpy2.next_prime(n)
        if n < b:
            prime.append(n)  
#     end = time.time()    
#     print (end - start)
    return prime

def isPrime(n):
    if n < 2: return False
    for number in islice(count(2), int(sqrt(n)-1)):
        if not n%number:
            return False
    return True


def get_total_primes(a, b):
#     print ("A: ", a)
#     print ("B: ", b)
#     start = time.time()
    prime = primes(a, b)
#     end = time.time()
#     print (end - start)
    
    count = 0
    countCheck = 0
    tmpindexing = 0 
    
#     start = time.time()    
    for tmpindex in prime:
        number_string = str(tmpindex)
        indexingCount = len(number_string)
        for ch in number_string:
            if isPrime(int(ch)):
                countCheck+=1
            else:
                break
        if indexingCount == countCheck:
            count+=1
        countCheck = 0

#     end = time.time()
    
#     print (end - start)
    return count