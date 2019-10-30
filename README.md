#Even Fibonacci Numbers

##Challenge 2

Each new number in the Fibonacci sequence is generated by adding the previous two Fibonacci numbers. For example by starting with the numbers `1` and `2` being the first and second numbers in the Fibonacci sequence, the first 10 numbers in the Fibonacci sequence looks like this:

```
1, 2, 3, 5, 8, 13, 21, 34, 55, 89
```

**The Exercise**
You will be given a stub function in the file `even_fib_nums.js`. This function accepts one argument, `maxFibValue` which is a `Number`.

Remember, `maxFibValue` is the **max** value of a fibonacci number, it is **NOT** the **Nth** fibonacci number in the sequence.

You goal will be to sum up all the **Even Numbers* that are less than or equal to, but does not exceed, the `maxFibValue` given to you.

## Getting Started
1. Fork and Clone this repository
2. To install all dependecies, run the command: `npm install`
3. Your work will be done in the file named: `even_fib_nums.js`
4. Run your test with the command: `npm test`
5. When you are done with the first 2 tests, un-skip the other by deleting `.skip`.
6. The third test is broken, fix it!

## Caveats


Remember, **n** is not how many numbers in the fibonacci sequence, it is the **max value, the last term in a fibonacci sequence** where you will then add up all **even** numbers.

### references
[Fibonacci on Wikipedia](http://en.wikipedia.org/wiki/Fibonacci_number)

[The Fibonacci Sequence: Nature's Code on YouTube](https://www.youtube.com/watch?v=wTlw7fNcO-0)

### _From Project Euler Problem 2_