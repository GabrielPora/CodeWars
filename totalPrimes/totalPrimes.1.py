from math import sqrt
from itertools import count, islice
import gmpy2
import time

# def get_total_primes(start, end):
#         return list(sorted(set(range(start,end+1)).difference(set((p * f) for p in range(2, int(end ** 0.5) + 2) for f in range(2, (end/p) + 1)))))

def primes(n, b):
    count = 0
    prime = []
    if isPrime(n):        
        prime.append(n)
    while n < b:
        n = gmpy2.next_prime(n)
        if n < b:
            prime.append(n)
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
#     prime = primes(a, b)
    count = 0
    countCheck = 0
    tmpindexing = 0 
    
    start = time.time()
#     prime = []
    if isPrime(a): 
        number_string = str(a)
        indexingCount = len(number_string)
        for ch in number_string:
            if isPrime(int(ch)):
                countCheck+=1
            else:
                break
        if indexingCount == countCheck:
            count+=1       
#         prime.append(a)
    while a < b:
        a = gmpy2.next_prime(a)
        if a < b: 
            number_string = str(a)
            indexingCount = len(number_string)
            for ch in number_string:
                if isPrime(int(ch)):
                    countCheck+=1
                else:
                    break
            if indexingCount == countCheck:
                count+=1
            countCheck = 0  
#             prime.append(a) 
    end = time.time()    
    print (end - start)
    return count
    
#     for tmpindex in prime:
#         number_string = str(tmpindex)
#         indexingCount = len(number_string)
#         for ch in number_string:
#             if isPrime(int(ch)):
#                 countCheck+=1
#             else:
#                 break
#         if indexingCount == countCheck:
#             count+=1
#         countCheck = 0

    return count