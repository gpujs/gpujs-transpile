// Indicates that esprima is loaded prior to this script
declare var esprima:any;

// Typescript dependencies reference
/// <reference path="transpiler_base.ts"/>
import transpiler_base from "./transpiler_base";

///
/// The core transpiler template
///
export default class transpiler_esprima extends transpiler_base {

	/// Blank constructor
	constructor() {
		super();
		// Cause nothing is needed?
	}

	/// Generates the full AST of the respective implementation
	///
	/// @param src    the source code of the function
	///
	/// @return       AST Object
	public generateAst( src:string ):any {
		return esprima.parse( src, {
			//comment : true,
			range : true
		} );
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
		// If AST is null - exception
		if(ast === null) {
			this.ast_errorOutput("NULL ast", ast, astConfig);
		} else {
			if( retArr == null ) {
				retArr = new Array<string>();
			}

			if (Array.isArray(ast)) {
				for (var i=0; i<ast.length; i++) {
					this.ast_generic(ast[i], retArr, astConfig);
				}
				return retArr;
			}

			// switch(ast.type) {
			// 	case "FunctionDeclaration":
			// 		return ast_FunctionDeclaration(ast, retArr, funcParam);
			// 	case "FunctionExpression":
			// 		return ast_FunctionExpression(ast, retArr, funcParam);
			// 	case "ReturnStatement":
			// 		return ast_ReturnStatement(ast, retArr, funcParam);
			// 	case "Literal":
			// 		return ast_Literal(ast, retArr,  funcParam);
			// 	case "BinaryExpression":
			// 		return ast_BinaryExpression(ast, retArr,  funcParam);
			// 	case "Identifier":
			// 		return ast_IdentifierExpression(ast, retArr, funcParam);
			// 	case "AssignmentExpression":
			// 		return ast_AssignmentExpression(ast, retArr, funcParam);
			// 	case "ExpressionStatement":
			// 		return ast_ExpressionStatement(ast, retArr, funcParam);
			// 	case "EmptyStatement":
			// 		return ast_EmptyStatement(ast, retArr, funcParam);
			// 	case "BlockStatement":
			// 		return ast_BlockStatement(ast, retArr, funcParam);
			// 	case "IfStatement":
			// 		return ast_IfStatement(ast, retArr, funcParam);
			// 	case "BreakStatement":
			// 		return ast_BreakStatement(ast, retArr, funcParam);
			// 	case "ContinueStatement":
			// 		return ast_ContinueStatement(ast, retArr, funcParam);
			// 	case "ForStatement":
			// 		return ast_ForStatement(ast, retArr, funcParam);
			// 	case "WhileStatement":
			// 		return ast_WhileStatement(ast, retArr, funcParam);
			// 	case "VariableDeclaration":
			// 		return ast_VariableDeclaration(ast, retArr, funcParam);
			// 	case "VariableDeclarator":
			// 		return ast_VariableDeclarator(ast, retArr, funcParam);
			// 	case "ThisExpression":
			// 		return ast_ThisExpression(ast, retArr, funcParam);
			// 	case "SequenceExpression":
			// 		return ast_SequenceExpression(ast, retArr, funcParam);
			// 	case "UnaryExpression":
			// 		return ast_UnaryExpression(ast, retArr, funcParam);
			// 	case "UpdateExpression":
			// 		return ast_UpdateExpression(ast, retArr, funcParam);
			// 	case "LogicalExpression":
			// 		return ast_LogicalExpression(ast, retArr, funcParam);
			// 	case "MemberExpression":
			// 		return ast_MemberExpression(ast, retArr, funcParam);
			// 	case "CallExpression":
			// 		return ast_CallExpression(ast, retArr, funcParam);
			// }

			this.ast_errorOutput("Unknown ast type : "+ast.type, ast, astConfig);
		}
	}
}
