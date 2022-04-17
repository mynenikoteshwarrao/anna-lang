import Statement from ".";

import { TokenTypes } from "../../../constants/annaLangSpec";
import { NodeType } from "../../../constants/constants";
import { ASTNode } from "../types/nodeTypes";


export default class ContinueStatement extends Statement {
    getStatement(): ASTNode {
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.AGLA_DEKH_anna);

        return {
            type: NodeType.ContinueStatement
        }
    }
}