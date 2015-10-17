# Recursive Exercises
These are demo tests for the Javascript recursion exercises found on the [this webpage](http://roman01la.github.io/recursion-exercises/).

## Tests
Tests are done with the [QUnit](https://qunitjs.com/) framework, split into modules using [RequireJS](http://requirejs.org/).

## Usage
Loading up ```index.html``` will show the results of the tests done for each exercise.

## Original exercises
Quoted from the website:

1. _**Sum:** Find the sum of a sequence of numbers recursively._
2. _**Exponent:** Find the result of 8^2 recursively._
3. _**Factorial:** The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. Find 5! recursively._
4. _**Fibonacci:** The first two numbers in the Fibonacci sequence are 0 and 1 and each subsequent number is the sum of the previous two. Produce the sequence recursively._
5. _**Range sequence:** Recursively produce a sequence of numbers from 3 to 9 with exclusive bounds._
6. _**Greatest common divisor:** The greatest common divisor (gcd) of two or more integers, when at least one of them is not zero, is the largest positive integer that divides the numbers without a remainder. Recursively find the greatest common divisor of a sequnce of values._

## Notes
### General
- All input values are assumed to be number values, not numbers represented as strings.

### sum()
- Decimals can sometimes lead to erroneous results, since floating point arthmetic can be imprecise.

### exponent()
- For simplicity, exponents must be integers.

### fibonacci()
- Sequence begins at the the traditional [0, 1, 1, ...].

### gcd()
- For simplicity, numbers must be integers and at least greater than or equal to zero.
