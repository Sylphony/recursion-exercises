"use strict";

// Configuration settings
require.config({
	baseUrl: "js",
	paths: {
		qunit: ["//code.jquery.com/qunit/qunit-1.19.0", "lib/qunit-1.19.0"]
	}
});

// Main module
require(["qunit", "TestObj"], function(QUnit, TestObj) {
	QUnit.config.autostart = false;
	QUnit.config.reorder = false;

	require([
		"tests/sum", 
		"tests/exponent", 
		"tests/factorial", 
		"tests/fibonacci",
		"tests/range",
		"tests/gcd"
	], function() {
		// When all tests are loaded, load and start QUnit.
		QUnit.start();
	});
});
