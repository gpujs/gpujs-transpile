// Setup chai assert - for nodejs
assert = require('chai').assert;

// Setup esprima library
esprima = require('esprima');

// Esprima based transpiler
transpiler_base = require('../bin/transpiler_base.js').default;
transpiler_esprima = require('../bin/transpiler_esprima.js').default;

// transpiler_esprima = require('../dist/gpujs-transpile.js').transpiler_esprima;

// Setup chai assert
require("./run-suite.js");
