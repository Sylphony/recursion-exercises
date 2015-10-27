/* Tests for finding the greatest common divisor recursively. */

"use strict";

define(["qunit", "TestObj"], function(QUnit, TestObj) {
	QUnit.module("gcdTest", {
		beforeEach: function() {
			this.obj = new TestObj();
		}
	});

	// Set of pos. integers (main test)
	QUnit.test("gcd(20,155,30)", function(assert) {
		assert.equal(this.obj.gcd(20,155,30), 5, "expected: 5");
	});

	// Large number of pos. integers
	QUnit.test("gcd(9, 12, 15, 18, 21, 24, 27, 30, 33, 36)", function(assert) {
		assert.equal(this.obj.gcd(9, 12, 15, 18, 21, 24, 27, 30, 33, 36), 3, "expected: 3");
	});

	// Any of the integers is 0
	QUnit.test("gcd(30, 0, 60, 44, 0)", function(assert) {
		assert.equal(this.obj.gcd(30, 0, 60, 44, 0), 2, "expected: 2");
	});

	// Throw error if just one number given
	QUnit.test("gcd(2)", function(assert) {
		assert.throws(function() {
			this.obj.gcd(2);
		}, new Error("gcd(): At least two numbers must be given."), "expected error: gcd(): At least two numbers must be given.");
	});

	// Throw error if negatives exist
	QUnit.test("gcd(6,-9,12,-15)", function(assert) {
		assert.throws(function() {
			this.obj.gcd(6,-9,12,-15);
		}, new Error("gcd(): All numbers must be integers greater than or equal to 0."), "expected error: gcd(): All numbers must be integers greater than or equal to 0.");
	});

	// Throw error if decimals exist
	QUnit.test("gcd(2.5,12,4.5,-15)", function(assert) {
		assert.throws(function() {
			this.obj.gcd(2.5,12,4.5,-15);
		}, new Error("gcd(): All numbers must be integers greater than or equal to 0."), "expected error: gcd(): All numbers must be integers greater than or equal to 0.");
	});
});
