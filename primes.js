// Julie Anderson
// primes.js

var primes = [];
var n = 1;

while (primes.length <=10001){
    if (isPrime(n)) primes.push(n);
    n++;
}
console.log(primes[10000]);

function isPrime(n){
    var prime = true;
    if (n == 1) return !prime;
    if (n == 2) return prime;
    for(i = 2; i < n; i++){
        if(n % i == 0) prime = false;
    }
    return prime;
}
