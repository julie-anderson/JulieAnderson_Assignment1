// Julie Anderson
// primes.js

var primes = [2];
var n = 3;

while (primes.length <=10001){
    var prime = true;
    for(i =2; i<n; i++){
        if( n%i == 0) prime = false;
    }
    if (prime) primes.push(n);
    n++;

}
console.log(primes[10000]);