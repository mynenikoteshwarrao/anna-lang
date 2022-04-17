import { TokenTypes } from "../../../constants/annaLangSpec";
import annaLangModule from "../../../module/annaLangModule";
import { Token } from "../../tokenizer/types";
import TokenExecutor from "../tokenExecutor";
import { ASTNode } from "../types/nodeTypes";


export default abstract class Statement {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getStatement(): ASTNode;

  static getStatementImpl(lookahead: Token): Statement {
    switch (lookahead.type) {
      case TokenTypes.BOL_anna_TYPE:
        return annaLangModule.getPrintStatement();

      case TokenTypes.SEMI_COLON_TYPE:
        return annaLangModule.getEmptyStatement();

      case TokenTypes.OPEN_CURLY_BRACE_TYPE:
        return annaLangModule.getBlockStatement();

      case TokenTypes.anna_YE_HAI_TYPE:
        return annaLangModule.getVariableStatement();

      case TokenTypes.AGAR_anna:
        return annaLangModule.getIfStatement();

      case TokenTypes.JAB_TAK_anna:
        return annaLangModule.getWhileStatement();

      case TokenTypes.BAS_KAR_anna:
        return annaLangModule.getBreakStatement();
      
      case TokenTypes.AGLA_DEKH_anna:
        return annaLangModule.getContinueStatement();

      default:
        return annaLangModule.getExpressionStatement();
    }
  }
}
