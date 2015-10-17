/* Tests for finding the exponent of a number recursively. */

"use strict";

require(["qunit", "TestObj"], function(QUnit, TestObj) {
	QUnit.module("expTest", {
		beforeEach: function() {
			this.obj = new TestObj();
		}
	});

	// Pos. exponent, Pos. base (main test)
	QUnit.test("exponent(2,8)", function(assert) {
		var result = Math.pow(8,2);
		assert.equal(this.obj.exponent(2,8), result, "expected: " + result);
	});

	// Neg. exponent, Pos. base
	QUnit.test("exponent(-2,8)", function(assert) {
		var result = Math.pow(8,-2);
		assert.equal(this.obj.exponent(-2,8), result, "expected: " + result);
	});

	// Neg. exponent, Neg. base
	QUnit.test("exponent(-3,-8)", function(assert) {
		var result = Math.pow(-8,-3);
		assert.equal(this.obj.exponent(-3,-8), result, "expected: " + result);
	});

	// Exponent = 0
	QUnit.test("exponent(0,-8)", function(assert) {
		var result = Math.pow(-8,0);
		assert.equal(this.obj.exponent(0,-8), result, "expected: " + result);
	});

	// Throw an error if exponent is decimal
	QUnit.test("exponent(0.5, 8)", function(assert) {
		assert.throws(function() {
			this.obj.exponent(0.5,8);
		}, new Error("exponent(): Decimal exponents not allowed."), "expected error: exponent(): Decimal exponents not allowed.");
	});
});
