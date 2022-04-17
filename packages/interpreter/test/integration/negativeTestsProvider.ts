import { RuntimeException } from "../../src";
import NallaPointerException from "../../src/exceptions/nallaPointerException";


export const NegativeTestCases = [
  {
    name: "interpreter assigning variable before declaration test, should throw an exception",
    input: `
          hi anna;
          a = 4;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with addition, should throw an exception",
    input: `
          hi anna;
          a += 4;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with subtraction, should throw an exception",
    input: `
          hi anna;
          a -= 4;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with multiplication, should throw an exception",
    input: `
          hi anna;
          a -= 4;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with division, should throw an exception",
    input: `
          hi anna;
          a /= 4;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test - 2, should throw an exception",
    input: `
          hi anna;
          a;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding two variables before declaration test, should throw an exception",
    input: `
          hi anna;
          a + b;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding variable with constant before declaration test, should throw an exception",
    input: `
          hi anna;
          a + 4;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting variable with constant before declaration test, should throw an exception",
    input: `
          hi anna;
          a - 4;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting two variables before declaration test, should throw an exception",
    input: `
          hi anna;
          a - b;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying variable with constant before declaration test, should throw an exception",
    input: `
          hi anna;
          a * 4;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying two variables before declaration test, should throw an exception",
    input: `
          hi anna;
          a * b;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing variable with constant before declaration test, should throw an exception",
    input: `
          hi anna;
          a / 4;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing two variables before declaration test, should throw an exception",
    input: `
          hi anna;
          a / b;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing variable before declaration test, should throw an exception",
    input: `
          hi anna;
          bol anna a;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables before declaration test, should throw an exception",
    input: `
          hi anna;
          bol anna a, b;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables with only one of them declared, should throw an exception",
    input: `
          hi anna;
          anna ye hai a = 8;
          bol anna a, b;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter declaring multiple variables with chain assignment, should throw an exception",
    input: `
          hi anna;
          anna ye hai a = b = 8;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter re declare already declared variable, should throw an exception",
    input: `
        hi anna;
        anna ye hai a;
        a = 9;
        anna ye hai a = 0;
        bye anna;
      `,
    exception: RuntimeException,
  },
  // cases with nalla
  {
    name: "interpreter use nalla variable in expression, should throw an exception",
    input: `
      hi anna;
      anna ye hai a;
      bol anna a + 9;
      bye anna;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla variable in expression - 2, should throw an exception",
    input: `
      hi anna;
      anna ye hai a = nalla;
      bol anna a + 9;
      bye anna;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla in variable initialisation expression, should throw an exception",
    input: `
      hi anna;
      anna ye hai a = nalla + 80;
      bye anna;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla in variable initialisation expression - 2, should throw an exception",
    input: `
      hi anna;
      anna ye hai a = nalla + "jam";
      bye anna;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla variable in another variable initialisation expression, should throw an exception",
    input: `
      hi anna;
      anna ye hai a;
      anna ye hai b = a + "hello";
      bye anna;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla variable in complex expression, should throw an exception",
    input: `
      hi anna;
      anna ye hai a;
      anna ye hai b = ((a*9) * a + "hello");
      bye anna;
    `,
    exception: NallaPointerException,
  },
  // sahi - galat case
  {
    name: "interpreter use sahi variable in expression, should throw an exception",
    input: `
      hi anna;
      anna ye hai a = sahi;
      bol anna a + 9;
      bye anna;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat variable in expression, should throw an exception",
    input: `
      hi anna;
      anna ye hai a = galat;
      bol anna a + 9;
      bye anna;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use sahi in variable initialisation expression, should throw an exception",
    input: `
      hi anna;
      anna ye hai a = sahi + 80;
      bye anna;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat in variable initialisation expression, should throw an exception",
    input: `
      hi anna;
      anna ye hai a = galat + 80;
      bye anna;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use sahi variable in another variable initialisation expression, should throw an exception",
    input: `
      hi anna;
      anna ye hai a = sahi;
      anna ye hai b = a + "hello";
      bye anna;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat variable in complex expression, should throw an exception",
    input: `
      hi anna;
      anna ye hai a = galat;
      anna ye hai b = ((a*9) * a + "hello");
      bye anna;
    `,
    exception: RuntimeException,
  },
  // ##########

  {
    name: "complex expression test with one nalla operand, should throw an exception",
    input: `
        hi anna
        (nalla * (4 + 8 + 10));
        bye anna
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand, should throw an exception",
    input: `
        hi anna
        (nalla * (sahi + 8 + 10));
        bye anna
      `,
    output: RuntimeException,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand - 2, should throw nalla pointer exception",
    input: `
        hi anna
        (sahi * (nalla + 8 + 10));
        bye anna
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand - 3, should throw nalla pointer exception",
    input: `
        hi anna
        (nalla + sahi);
        bye anna
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one boolean operand, should throw an exception",
    input: `
        hi anna
        (sahi * (4 + 8 + 10));
        bye anna
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only boolean operand, should throw an exception",
    input: `
        hi anna
        sahi + galat;
        bye anna
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only variable boolean operand, should throw an exception",
    input: `
        hi anna
        anna ye hai a = sahi, b = galat;
        a + b;
        bye anna
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only boolean operand, should throw an exception",
    input: `
        hi anna
        sahi * galat;
        bye anna
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only variable boolean operand, should throw an exception",
    input: `
        hi anna
        anna ye hai a = sahi, b = galat;
        a * b;
        bye anna
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only boolean operand, should throw an exception",
    input: `
        hi anna
        sahi / galat;
        bye anna
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only variable boolean operand, should throw an exception",
    input: `
        hi anna
        anna ye hai a = sahi, b = galat;
        a / b;
        bye anna
      `,
    output: RuntimeException,
  },
  {
    name: "print statement test with expression containing nalla, should throw an exception",
    input: `
        hi anna
        bol anna nalla + 5;
        bye anna;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing nalla, should throw an exception",
    input: `
        hi anna
        anna ye hai a;
        a *= 5;
        bye anna;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing sahi, should throw an exception",
    input: `
        hi anna
        anna ye hai a = sahi;
        a *= 5;
        bye anna;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing nalla - 2, should throw an exception",
    input: `
        hi anna
        anna ye hai a = nalla;
        a /= 5;
        bye anna;
      `,
    output: NallaPointerException,
  },
  // while loop negative tests
  {
    name: "infinite while loop, should throw an exception",
    input: `
        hi anna
        jab tak anna (sahi) {

        }
        bye anna;
      `,
    output: RuntimeException,
  },
  {
    name: "infinite condition while loop, should throw an exception",
    input: `
        hi anna
        anna ye hai a = 0;
        jab tak anna (a < 2) {
          bol anna "anna";
        }
        bye anna;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of break, should throw an exception",
    input: `
        hi anna
        anna ye hai a = 0;
        agar anna (sahi)
          bas kar anna;
        bye anna;
      `,
    output: RuntimeException,
  },
  // logical expression negative tests
  {
    name: "use of nalla with &&, should throw an exception",
    input: `
        hi anna
        bol anna nalla && 90;
        bye anna;
      `,
    output: NallaPointerException,
  },
  {
    name: "use of nalla variable with &&, should throw an exception",
    input: `
        hi anna
        anna ye hai a;
        bol anna a && 90;
        bye anna;
      `,
    output: NallaPointerException,
  },
  // modulus operator test
  {
    name: `modulus operator test with invalid operand, should throw an exception`,
    input: `
      hi anna;
      bol anna "sahi" % 9;
      bye anna;
    `,
    output: RuntimeException,
  },
  // continue in loop test
  {
    name: "infinite condition while loop with continue, should throw an exception",
    input: `
        hi anna
        anna ye hai a = 0;
        jab tak anna (a < 2) {
          agla dekh anna;
          a = 5;
        }
        bye anna;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of continue, should throw an exception",
    input: `
        hi anna
        anna ye hai a = 0;
        agar anna (sahi)
          agla dekh anna
        bye anna;
      `,
    output: RuntimeException,
  },
];
