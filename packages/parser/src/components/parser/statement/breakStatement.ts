import Statement from ".";

import { TokenTypes } from "../../../constants/annaLangSpec";
import { NodeType } from "../../../constants/constants";
import { ASTNode } from "../types/nodeTypes";


export default class BreakStatement extends Statement {
    getStatement(): ASTNode {
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.BAS_KAR_anna);

        return {
            type: NodeType.BreakStatement
        }
    }
}