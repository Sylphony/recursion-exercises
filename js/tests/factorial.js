/* Tests for finding the factorial of a number recursively. */

"use strict";

define(["qunit", "TestObj"], function(QUnit, TestObj) {
	QUnit.module("factTest", {
		beforeEach: function() {
			this.obj = new TestObj();
		}
	});

	// Factorial pos. integer (main test)
	QUnit.test("factorial(5)", function(assert) {
		assert.equal(this.obj.factorial(5), 120, "expected: 120");
	});

	// Another factorial pos. integer
	QUnit.test("factorial(10)", function(assert) {
		assert.equal(this.obj.factorial(10), 3628800, "expected: 3628800");
	});

	// If value is 0
	QUnit.test("factorial(0)", function(assert) {
		assert.equal(this.obj.factorial(0), 1, "expected: 1");
	});

	// Throw an error if value is negative
	QUnit.test("factorial(-5)", function(assert) {
		assert.throws(function() {
			this.obj.factorial(-5);
		}, 
		new Error("factorial(): Factorials can only be done on positive integers."), 
		"expected error: factorial(): Factorials can only be done on positive integers.");
	});

	// Throw an error if value is decimal
	QUnit.test("factorial(1.5)", function(assert) {
		assert.throws(function() {
			this.obj.factorial(1.5);
		}, 
		new Error("factorial(): Factorials can only be done on positive integers."), 
		"expected error: factorial(): Factorials can only be done on positive integers.");
	});
});
