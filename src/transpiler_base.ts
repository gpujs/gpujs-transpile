///
/// Base transpiler class, which all other transpiler format extends from
///
class transpiler_base {
	
	// // Blank constructor
	// constructor() {
	// 	// Cause nothing is needed?
	// }
	
	/// The core transpiler function. 
	///
	/// @param src    the source code of the function
	///
	/// @return       AstConfiguration object
	public parse( src:string ):any {
		var astConfig = this.generateAstConfig(src);
		var ast = this.generateAst(src);
		astConfig.ast = ast;
		
		// Gets the result array and string
		astConfig.retArr = this.ast_generic(ast, astConfig.retArr, astConfig);
		var resStr = astConfig.retArr.join("\n");
		astConfig.resStr = resStr;
		
		// Returns the AST config object
		return astConfig;
	}
	
	/// Generates the AstConfiguration object from the source code
	///
	/// @param src    the source code of the function
	///
	/// @return       AstConfiguration object
	public generateAstConfig( src:string ):any {
		return {
			// Type marker, used to facilitate debugging
			// by indicating what this object is without 
			// the overhead of creating a class object
			type: "AstConfig",
			
			// The source code used
			src : src,
			
			// The AST tree generated from the source code
			ast : null,
			
			// The result transpiled code as an array (to-join)
			resArr : [],
			
			// The result transpiled code as a single string
			resStr : null,
			
			// Function call tracking : used to link dependencies
			called : {
				functionNames : [],
				paramNames : []
			}
		};
	}
	
	/// Generates the full AST of the respective implementation
	///
	/// @param src    the source code of the function
	///
	/// @return       AST Object
	public generateAst( src:string ):any {
		throw "generateAst needs to be overwritten";
	}
	
	/// Prases the abstract syntax tree object, 
	/// genericially to its respective function
	///
	/// @param ast          the AST object to parse
	/// @param retArr       return array string
	/// @param astConfig    astConfig, the config tracker for compilation state
	///
	/// @returns  the prased openclgl string array, or retArr if given
	public ast_generic( ast:any, retArr:Array<string>, astConfig:any ):Array<string> {
		throw "ast_generic needs to be overwritten";
	}
	
	/// the AST error, to be thrown
	///
	/// @param error        the error message output
	/// @param ast          the AST object where the error is
	/// @param astConfig    astConfig, the config tracker for compilation state
	public ast_errorOutput(error:string, ast:any, astConfig:any):never {
		// Error stack
		var errStr = error;
		
		if( ast.range ) {
			errStr = errStr + ast.src.slice( ast.range[0], 25 );
		}
		
		console.error(errStr, ast, astConfig);
		throw errStr;
	}
}
