/* Tests for listing the fibonacci sequence recursively. */

"use strict";

require(["qunit", "TestObj"], function(QUnit, TestObj) {
	QUnit.module("fibTest", {
		beforeEach: function() {
			this.obj = new TestObj();
		}
	});

	// Sequence pos. integer (main test)
	QUnit.test("fibonacci(5)", function(assert) {
		assert.deepEqual(this.obj.fibonacci(5), [0, 1, 1, 2, 3], "expected: [0, 1, 1, 2, 3]");
	});

	// Sequence longer
	QUnit.test("fibonacci(16)", function(assert) {
		assert.deepEqual(this.obj.fibonacci(10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34], "expected: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]");
	});

	// Starting sequence
	QUnit.test("fibonacci(1)", function(assert) {
		assert.deepEqual(this.obj.fibonacci(1), [0], "expected: [0]");
	});

	// Throw an error if length is 0 or negative
	QUnit.test("fibonacci(-3)", function(assert) {
		assert.throws(function() {
			this.obj.fibonacci(-3);
		}, new Error("fibonacci(): Sequence length must be a positive integer."), "expected error: fibonacci(): Sequence length must be a positive integer.");
	});

	// Throw an error if length is decimal
	QUnit.test("fibonacci(2.3)", function(assert) {
		assert.throws(function() {
			this.obj.fibonacci(2.3);
		}, new Error("fibonacci(): Sequence length must be a positive integer."), "expected error: fibonacci(): Sequence length must be a positive integer.");
	});
});
