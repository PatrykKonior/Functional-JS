function isPrime(n) {
    if (n <=1) return false;
    wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const possibleFactors = filter( m => m > 1 && m < n, wholes);
    const factors = filter( m => n % m === 0, possibleFactors);
    return length(factors) === 0 ? true : false;
}