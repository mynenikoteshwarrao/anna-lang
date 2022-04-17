import Statement from "../../src/components/parser/statement";
import BlockStatement from "../../src/components/parser/statement/blockStatement";
import { TokenTypes } from "../../src/constants/annaLangSpec";
import annaLangModule from "../../src/module/annaLangModule";

jest.mock("../../src/module/annaLangModule");

const blockStatementMock = new (<any>(
  BlockStatement
))() as jest.Mocked<BlockStatement>;

afterEach(() => {
  jest.clearAllMocks();
});

test("test getStatementImpl of statement class with should success", () => {
  const lookahead = {
    type: TokenTypes.OPEN_CURLY_BRACE_TYPE,
    value: "{",
  };

  annaLangModule.getBlockStatement = jest
    .fn()
    .mockReturnValue(blockStatementMock);

  expect(Statement.getStatementImpl(lookahead)).toStrictEqual(
    blockStatementMock
  );

  expect(annaLangModule.getBlockStatement).toHaveBeenCalledTimes(1);
});
