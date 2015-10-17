"use strict";

define("TestObj", function() {
	/* An object used for testing the recursive methods */
	function TestObj() {};

	// Sum
	TestObj.prototype.sum = function() {
    	if (arguments.length === 1) {
    		return arguments[0];
    	}
    	else {
    		var remain_arg = Array.prototype.slice.call(arguments, 1);
    		return (arguments[0] + this.sum.apply(this, remain_arg));
    	}
	};

	// Exponent
	TestObj.prototype.exponent = function(exp, base) {
		// Keeping it simple, ignore decimal exponents.
		if (exp % 1 !== 0) {	
			throw new Error("exponent(): Decimal exponents not allowed.");
		}
		if (exp === 0) {
			return 1;
		}
		else if (exp >= 1) {
			exp -= 1;
			return (base * this.exponent.call(this, exp, base));
		}
		else if (exp <= -1) {
			exp += 1;
			return (1/base * this.exponent.call(this, exp, base));
		}
	};

	// Factorial
	TestObj.prototype.factorial = function(num) {
		if (num < 0 || (num % 1 !== 0)) {
			throw new Error("factorial(): Factorials can only be done on positive integers.");
		}
		if (num === 0) {
			return 1;
		}
		else {
			return (num * this.factorial(num-1));
		}
	};

	// Fibonacci
	TestObj.prototype.fibonacci = function(num) {
		// Array to store the sequence
		var arr = [];

		if (num % 1 !== 0 || num <= 0) {
			throw new Error("fibonacci(): Sequence length must be a positive integer.");
		}

		// Internal function to calculate
		var fibonacci_cal = function(num) {
			if (num === 0) {
				return 0;
			}
			else if (num === 1 || num === 2) {
				return 1;
			}
			else {
				return fibonacci_cal(num-1) + fibonacci_cal(num-2);
			}
		};

		// Each result is pushed to the array
		for (var count = 0; count < num; count++) {
			var res = fibonacci_cal(num-1-count);
			arr.unshift(res);
		}

		return arr;
	};

	// Range sequence
	TestObj.prototype.range = function(min, max) {
		// Array to store range
		var arr = [];

		if (min % 1 !== 0 || max % 1 !== 0) {
			throw new Error("range(): min/max must be integers.");
		}

		// Internal function to execute
		var range_find = function(min, max) {
			if (min < max-1) {
				min += 1;
				arr.push(min);
				return range_find(min, max);
			}
		};

		range_find(min, max);
		return arr;
	};

	// Greatest common divisor
	TestObj.prototype.gcd = function() {
		// Internal function to calculate
		var gcd_cal = function (num1, num2) {
			// To keep it simple, constrain to greater than 0
			if (num1 % 1 !== 0 || num2 % 1 !== 0 || num1 < 0 || num2 < 0) {
				throw new Error("gcd(): All numbers must be integers greater than or equal to 0.")
			}

			// If either num is 0, return the non-zero value
			if (num1 === 0 || num2 === 0) {
				return num1 || num2;
			}
			// Based off of Dijkstra's algorithm
			if (num1 === num2) {
				return num1;
			}
			else if (num1 > num2) {
				return gcd_cal(num1 - num2, num2);
			}
			else {
				return gcd_cal(num1, num2 - num1);
			}
		};
		
		var first_val = arguments[0];	// Initial value
		if (arguments.length < 2) {
			throw new Error("gcd(): At least two numbers must be given.");
		}

		// Each loop will execute two numbers at a time
		for (var index = 0; index < arguments.length-1; index++) {
			first_val = gcd_cal(first_val, arguments[index+1]);
		}
		
		return first_val;	// The GCD
	};


	// Greatest common divisor (old, inefficient)
	/*TestObj.prototype.gcd = function() {
		var arg1 = arguments[0];
		var arg2 = arguments[1] | 0;
		//console.log(arg1 + " " + arg2);
		//console.log(arguments);
		if (!arguments[2]) {
			return arg1;
		}	

		if (arg1 > arg2) {
			var arr = [arg1 - arg2, arg2];
			var remain_arr = Array.prototype.slice.call(arguments, 2);
			for (var index = 0; index < remain_arr.length; index++) {
				arr.push(remain_arr[index]);
			}
			
			return this.gcd.apply(this, arr);
		}
		else if (arg1 < arg2) {
			var arr = [arg1, arg2 - arg1];
			var remain_arr = Array.prototype.slice.call(arguments, 2);
			for (var index = 0; index < remain_arr.length; index++) {
				arr.push(remain_arr[index]);
			}
			
			return this.gcd.apply(this, arr);
		}
		else {
			var arr = [arg1];
			var remain_arr = Array.prototype.slice.call(arguments, 2);
			for (var index = 0; index < remain_arr.length; index++) {
				arr.push(remain_arr[index]);
			}
			return this.gcd.apply(this, arr);
		}
	}*/

	return TestObj;
});
