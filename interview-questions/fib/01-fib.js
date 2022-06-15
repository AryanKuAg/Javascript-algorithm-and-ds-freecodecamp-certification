let memo = {}

const fib = (n) => {
    if (memo.hasOwnProperty(n)){
        return memo[n]
    }
 if(n <= 2){
    return 1;
 }
 memo[n] = fib(n - 1) + fib(n - 2);
 return memo[n]
}

console.log(fib(100))

