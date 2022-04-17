import { Parser } from "../../src/components/parser";
import Program from "../../src/components/parser/program";
import TokenExecutor from "../../src/components/parser/tokenExecutor";
import Tokenizer from "../../src/components/tokenizer";
import annaLangModule from "../../src/module/annaLangModule";

test("test annaLangModule should success", () => {
  expect(annaLangModule.getTokenizer()).toBeInstanceOf(Tokenizer);
  expect(annaLangModule.getTokenExecutor()).toBeInstanceOf(TokenExecutor);
  expect(annaLangModule.getProgram()).toBeInstanceOf(Program);
  expect(annaLangModule.getParser()).toBeInstanceOf(Parser);
});
