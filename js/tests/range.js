/* Tests for finding the range of numbers (min, max) recursively. */

"use strict";

define(["qunit", "TestObj"], function(QUnit, TestObj) {
	QUnit.module("rangeTest", {
		beforeEach: function() {
			this.obj = new TestObj();
		}
	});

	// Pos. min to Pos. max (main test)
	QUnit.test("range(3,9)", function(assert) {
		assert.deepEqual(this.obj.range(3,9), [4, 5, 6, 7, 8], "expected: [4, 5, 6, 7, 8]");
	});

	// Neg. to pos.
	QUnit.test("range(-3,6)", function(assert) {
		assert.deepEqual(this.obj.range(-3,6), [-2, -1, 0, 1, 2, 3, 4, 5], "expected: [-2, -1, 0, 1, 2, 3, 4, 5]");
	});

	// If min is greater than max
	QUnit.test("range(9,3)", function(assert) {
		assert.deepEqual(this.obj.range(9,3), [], "expected: []");
	});

	// If min is equal max
	QUnit.test("range(1,1)", function(assert) {
		assert.deepEqual(this.obj.range(1,1), [], "expected: []");
	});

	// Throw error if decimal
	QUnit.test("range(3.5,6.5)", function(assert) {
		assert.throws(function() {
			this.obj.range(3.5,6.5);
		}, new Error("range(): min/max must be integers."), "expected error: range(): min/max must be integers.");
	});
});
