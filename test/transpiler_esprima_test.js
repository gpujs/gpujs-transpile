describe('Transpiler With Esprima', function() {
		it('Sanity Check', function() {
			assert.ok(transpiler_esprima);
			assert.ok(new transpiler_esprima());
			//assert.ok(transpiler_esprima.parse);
		});

		var te;
		before(function() {
			te = new transpiler_esprima();
		});

		describe('VariableDeclaration parsing', function() {

			// var ac = te.parse("function() { return 42.0; }");
			//
			// // Ensure the remaining test cases run properly if run independently
			// before(function() {
			// 	assert.ok(p = esprima.parse("var hello='world';"));
			// });
			//
			// it('Variable statement parsing', function() {
			// 	assert.ok(p = esprima.parse("var hello='world';"));
			// });
			//
			// it('Root AST type check', function() {
			// 	assert.equal(p.sourceType, "script");
			// 	assert.equal(p.type, "Program");
			//
			// });
			//
			// it('Root AST - has child elements check', function() {
			// 	assert.ok(p.body);
			// 	assert.ok(p.body[0]);
			// });
			//
			// it('VariableDeclaration - body[0] - First child element check', function() {
			// 	assert.equal(p.body[0].type, "VariableDeclaration");
			// 	assert.equal(p.body[0].kind, "var");
			//
			// 	assert.equal(p.body[0].declarations[0].id.name, "hello");
			// 	assert.equal(p.body[0].declarations[0].id.type, "Identifier");
			//
			// 	assert.equal(p.body[0].declarations[0].init.raw, "'world'");
			// 	assert.equal(p.body[0].declarations[0].init.type, "Literal");
			// 	assert.equal(p.body[0].declarations[0].init.value, "world");
			// });
		});
});
