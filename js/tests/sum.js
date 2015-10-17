/* Tests for finding the sum of a sequence of numbers recursively. */

"use strict";

require(["qunit", "TestObj"], function(QUnit, TestObj) {
	QUnit.module("sumTest", {
		beforeEach: function() {
			this.obj = new TestObj();
		}
	});

	// Two integers
	QUnit.test("sum(1,1)", function(assert) {
		var result = 1+1;
		assert.equal(this.obj.sum(1,1), result, "expected: " + result);
	});

	// Three integers (main test)
	QUnit.test("sum(10,89,4)", function(assert) {
		var result = 10+89+4;
		assert.equal(this.obj.sum(10, 89, 4), result, "expected: " + result);
	});

	// Five integers
	QUnit.test("sum(3,4,5,6,9)", function(assert) {
		var result = 3+4+5+6+9;
		assert.equal(this.obj.sum(3,4,5,6,9), result, "expected: " + result);
	});

	// Five integers, some negative
	QUnit.test("sum(-3,4,-5,-6,9)", function(assert) {
		var result = -3+4+-5+-6+9;
		assert.equal(this.obj.sum(-3,4,-5,-6,9), result, "expected: " + result);
	});

	// Five decimals, some negative
	QUnit.test("sum(1.5+3.0+6.5+-10.+-11.8)", function(assert) {
		var result = 41.1+23.0+16.5+-15.1+-5.3;
		assert.equal(this.obj.sum(41.1, 23.0, 16.5, -15.1, -5.3), result, "expected: " + result);
	});

});
