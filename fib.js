/*
    Write a function 'fin(n)' that takes in a number as an argumnet .
    the function should return the n-th number of the fibonacci sequence .

    the 1st and 2nd number of the sequence is 1 .
    to generate the next number of the sequence , we sum the previous two .

    n:      1 2 3 4 5 6  7  8  9 
    fib(n): 1 1 2 3 5 8 13 21 34 

    7 --> 13 

*/

// navi algorithm to solve the problem 
// time complexty O(2^n)
// space complexty O(n)
// fib(50)=> 2^50
/*
const fib = (n)=>{
    if(n <= 2) return 1 ;
    
    return fib(n-1) + fib(n-2);
}

console.log(fib(7));
console.log(fib(8));
console.log(fib(9));

console.log(fib(9));
console.log(fib(9));
console.log(fib(100));
*/


// using memoization 
// js object  , keys will be arg to fun ,  value --> will be return value 


const fib = (n , memo = {})=>{
    if(n in memo) return memo[n];
    if(n <= 2) return 1 ;
    
    memo[n]= fib(n-1 , memo) + fib(n-2 , memo);
    return memo[n];
}
console.log(fib(100));
console.log(fib(6));



