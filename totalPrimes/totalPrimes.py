from math import sqrt
from itertools import count, islice
import gmpy2

def primes(n, b):    
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
    prime = primes(a, b)
    count = 0
    countCheck = 0
    tmpindexing = 0 
    
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

    return count