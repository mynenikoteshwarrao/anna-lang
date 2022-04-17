import { NodeType } from "../../../../constants/constants";
import annaLangModule from "../../../../module/annaLangModule";
import TokenExecutor from "../../tokenExecutor";
import { ASTNode } from "../../types/nodeTypes";


export default abstract class Expression {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getExpression(): ASTNode;

  static getExpressionImpl(expressionType: keyof typeof NodeType): Expression {
    switch (expressionType) {
      case NodeType.AdditiveExpression:
        return annaLangModule.getAdditiveExpression();

      case NodeType.MultiplicativeExpression:
        return annaLangModule.getMultiplicativeExpression();

      case NodeType.PrimaryExpression:
        return annaLangModule.getPrimaryExpression();

      case NodeType.ParanthesizedExpression:
        return annaLangModule.getParanthesizedExpression();

      case NodeType.AssignmentExpression:
        return annaLangModule.getAssignmentExpression();

      case NodeType.EqualityExpression:
        return annaLangModule.getEqualityExpression();

      case NodeType.LogicalANDExpression:
        return annaLangModule.getLogicalANDExpression();

      case NodeType.LogicalORExpression:
        return annaLangModule.getLogicalORExpression();

      case NodeType.RelationalExpression:
        return annaLangModule.getRelationalExpression();

      default:
        return annaLangModule.getIndentifierExpression();
    }
  }

  protected getBinaryExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string
  ) {
    return this._getExpression(downstreamExpressionType, operatorToken, NodeType.BinaryExpression);
  }

  protected getLogicalExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string
    ) {
    return this._getExpression(downstreamExpressionType, operatorToken, NodeType.LogicalExpression);
  }

  private _getExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string,
    expressionType: keyof typeof NodeType
    ) {
    let left = Expression.getExpressionImpl(downstreamExpressionType).getExpression();

    while (this._tokenExecutor.getLookahead()?.type === operatorToken) {
      const operator =
        this._tokenExecutor.eatTokenAndForwardLookahead(operatorToken);
      const right =
        Expression.getExpressionImpl(downstreamExpressionType).getExpression();

      left = {
        type: expressionType,
        operator: operator.value,
        left,
        right,
      };
    }

    return left;
  }

}
