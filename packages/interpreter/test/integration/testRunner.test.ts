import { RuntimeException } from "../../src";
import Interpreter from "../../src/components/interpreter";
import InterpreterModule from "../../src/module/interpreterModule";

import { NegativeTestCases } from "./negativeTestsProvider";
import {
  NoOutputPositiveTests,
  WithOutputPositiveTests
} from "./positiveTestsProvider";


let interpreter: Interpreter = InterpreterModule.getInterpreter();

console.log = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

NoOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();
  });
});

WithOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();

    expect(console.log).toHaveBeenCalledWith(testCase.output);
  });
});

NegativeTestCases.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).toThrowError(
      testCase.exception
    );
  });
});

test("test redeclaring & printing variables in different scopes", () => {
  expect(() =>
    interpreter.interpret(`hi anna;
    anna ye hai a = 4;
    {
      anna ye hai a = 90;
      bol anna a;
    }
    bol anna a;
    bye anna;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("test assigning variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`hi anna;
    anna ye hai a = 4;
    {
      a = 90;
      bol anna a;
    }
    bol anna a;
    bye anna;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("90");
});

test("test accessing variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`hi anna;
    anna ye hai a = 4;
    {
      bol anna a;
    }
    bol anna a;
    bye anna;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("whileStatement test with 2 times loop, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi anna;
    anna ye hai a = 0;
    jab tak anna (a < 2) {
      bol anna "anna";
      a += 1;
    }
    bye anna;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("anna");
  expect(console.log).toHaveBeenCalledWith("anna");
});

test("whileStatement test with nested loops - 2, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi anna;
    anna ye hai a = 0, b = 0;
    jab tak anna (a < 2) {
      jab tak anna (b < 1) {
        bol anna "anna";
        b += 1;
      }
      a += 1;
    }
    bye anna;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("anna");
});

test("whileStatement test with nested loops - 3, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi anna;
    anna ye hai a = 0;
    jab tak anna (a < 2) {
      anna ye hai b = 0;
      jab tak anna (b < 2) {
        bol anna "anna";
        b += 1;
        agar anna (b == 1)
          bas kar anna;
      }
      a += 1;
    }
    bye anna;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("anna");
  expect(console.log).toHaveBeenCalledWith("anna");
});


test("whileStatement test with nested loops - 4, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi anna
    anna ye hai a = 0;
    jab tak anna (a < 10) {
      bol anna a;
      a += 1;
      agar anna (a == 6) {
        bas kar anna;
      }
    }
    bol anna "done";
    bye anna
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 5, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi anna
    anna ye hai a = 0;
    jab tak anna (a < 10) {
      bol anna a;
      a += 1;
      agar anna (a == 6)
        bas kar anna;
    }
    bol anna "done";
    bye anna
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 6, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi anna
    anna ye hai a = 0;
    jab tak anna (a < 10) {
      bol anna a;
      a += 1;
      agar anna (a == 3) {
        bas kar anna;
      }
      bol anna "2 baar hi chapunga";
    }
    bol anna "done";
    bye anna
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
});

test("whileStatement test with infinite loop, should throw runtime exception after 5000 executions", () => {
  expect(() =>
    interpreter.interpret(`
    hi anna
    
    jab tak anna (sahi) {
      bol anna "anna";
    }
    bye anna;
    
    `)
  ).toThrowError(RuntimeException);

  expect(console.log).toHaveBeenCalledTimes(5001);
  expect(console.log).toHaveBeenCalledWith("anna");
});

test("if-else ladders one after the other, should be evaluated separately", () => {
  expect(() =>
    interpreter.interpret(`
    hi anna
    anna ye hai x = 6;
    agar anna (x < 5) {
      bol anna "x < 5";
    } nahi to anna (x < 8) {
      bol anna "x < 8";
    } agar anna (x < 4) {
      bol anna "x < 4";
    } warna anna {
      bol anna "x > 4";
    }
    bye anna;
    
    `)
  ).not.toThrowError();

  expect(console.log).toHaveBeenCalledWith("x < 8");
  expect(console.log).toHaveBeenCalledWith("x > 4");
});

// test("jest", () => {
//     interpreter.interpret(`
//     hi anna
//     anna ye hai a = 0;
//     jab tak anna (a < 10) {
//       bol anna a;
//       a += 1;
//       agar anna (a == 3) {
//         bas kar anna;
//       }
//       bol anna "2 baar hi chapunga";
//     }
//     bol anna "done";
//     bye anna
//     `);
// });
