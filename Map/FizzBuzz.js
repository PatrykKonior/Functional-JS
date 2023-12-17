/* Fizz Buzz is a whole-number counting game in which each number divisible by 3 
    is replaced which "fizz", each number divisible by 5 is replaced with "buzz", 
    and each number divisible by both 3 and 5 is replaced with "fizzbuzz" */

let wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let fizzBuzz = map(n => {
    const fizzed = n % 3 === 0 ? 'fizz' : '';
    const buzzed = n % 5 === 0 ? 'buzz' : '';
    return fizzed || buzzed ? fizzed + buzzed : n;
}, wholes);