export const NoOutputPositiveTests = [
  // init statement tests
  {
    name: "interpreter empty init statement test, should success",
    input: `
      hi anna
      bye anna
    `,
  },
  {
    name: "interpreter empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      hi anna
      bye anna
    `,
  },
  // empty statement tests
  {
    name: "interpreter empty statement test, should success",
    input: `
      hi anna
      ;
      bye anna
    `,
  },
  {
    name: "interpreter multiple empty statements test, should success",
    input: `
      hi anna
      ;
      ;
      ;;
      bye anna
    `,
  },
  // block statement tests
  {
    name: "interpreter block statement test with empty block, should success",
    input: `
      hi anna
      {};
      bye anna
    `,
  },
  {
    name: "interpreter block statement test with variable statement inside, should success",
    input: `
      hi anna
      {
        anna ye hai a = 4;
      }
      bye anna
    `,
  },
  // variable statement test
  {
    name: "interpreter variable statement test with basic variable declaration, should success",
    input: `
      hi anna
      anna ye hai a, b, c;
      bye anna
    `,
  },
  {
    name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
    input: `
      hi anna
      anna ye hai a = 10, b = "crap";
      bye anna
    `,
  },
  {
    name: "interpreter variable statement test with multiple variable initialisation, should success",
    input: `
      hi anna
      anna ye hai a = 10, b = 5;
      bye anna
    `,
  },
  {
    name: "interpreter variable statement test with variable initialisation with some expression, should success",
    input: `
      hi anna
      anna ye hai a = 7 + 90;
      bye anna
    `,
  },
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      hi anna
      anna ye hai a = sahi;
      a = 4;
      bye anna
    `,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      hi anna
      anna ye hai a = 2;
      a *= 4;
      bye anna
    `,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      hi anna
      anna ye hai a = 2;
      (a + 4);
      bye anna
    `,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      hi anna
      anna ye hai a = 2;
      (a + 4) * 10 + (5 - 4);
      bye anna
    `,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      hi anna
      anna ye hai a = 2;
      (a * (4 + 8) + 10);
      bye anna
    `,
  },
  // if statement test
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
    hi anna
    anna ye hai x = 9;
    agar anna (x != 9) {
      x = 5;
      bol anna x;
    } warna anna (x >= 9);
    bye anna;
    `,
  },
];

export const WithOutputPositiveTests = [
  {
    name: "variable assignment test with multiple variables, should success",
    input: `
      hi anna;
      anna ye hai a , b;
      a = b = 60;
      bol anna a, b;
      bye anna
    `,
    output: "60 60",
  },
  {
    name: `binaryExpression print test with nalla and "==", should success`,
    input: `
      hi anna;
      anna ye hai a;
      agar anna (a == nalla) {
        bol anna a;
      }
      bye anna
    `,
    output: "nalla",
  },
  {
    name: `binaryExpression print test with nalla without any operator, should success`,
    input: `
      hi anna;
      anna ye hai a;
      agar anna (a) {
        bol anna a;
      } warna anna {
        bol anna "not nalla";
      }
      bye anna
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test - comparing nalla with nalla "==", should success`,
    input: `
      hi anna;
      agar anna (nalla == nalla) {
        bol anna "hai nalla";
      }
      bye anna
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with var "a", should success`,
    input: `
      hi anna;
      anna ye hai a;
      agar anna (nalla == a) {
        bol anna "hai nalla";
      }
      bye anna
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with var "a" explicit initialization, should success`,
    input: `
      hi anna;
      anna ye hai a = nalla;
      agar anna (nalla == a) {
        bol anna "hai nalla";
      }
      bye anna
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string nalla, should success`,
    input: `
      hi anna;
      anna ye hai a = nalla;
      agar anna ("nalla" == a) {
        bol anna "hai nalla";
      } warna anna {
        bol anna "not nalla";
      }
      bye anna
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string nalla, should success`,
    input: `
      hi anna;
      anna ye hai a = "nalla";
      agar anna (nalla == a) {
        bol anna "hai nalla";
      } warna anna {
        bol anna "not nalla";
      }
      bye anna
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string null, should success`,
    input: `
      hi anna;
      anna ye hai a = "null";
      agar anna (nalla == a) {
        bol anna "hai nalla";
      } warna anna {
        bol anna "not nalla";
      }
      bye anna
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" - 0, should success`,
    input: `
      hi anna;
      anna ye hai a;
      anna ye hai b;
      agar anna (a == b) {
        bol anna "hai nalla";
      } warna anna {
        bol anna "nahi nalla";
      }
      bye anna
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" - 1, should success`,
    input: `
      hi anna;
      anna ye hai a;
      anna ye hai b = nalla;
      agar anna (a == b) {
        bol anna "hai nalla";
      } warna anna {
        bol anna "nahi nalla";
      }
      bye anna
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" -2, should success`,
    input: `
      hi anna;
      anna ye hai a;
      anna ye hai b = "nalla";
      agar anna (a == b) {
        bol anna "hai nalla";
      } warna anna {
        bol anna "nahi nalla";
      }
      bye anna
    `,
    output: "nahi nalla",
  },
  // Boolean test
  {
    name: `binaryExpression print test with boolean expression - sahi, should success`,
    input: `
      hi anna;
      anna ye hai a = sahi;
      agar anna (sahi == a) {
        bol anna "hai sahi";
      } warna anna {
        bol anna "nahi sahi";
      }
      bye anna
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat, should success`,
    input: `
      hi anna;
      anna ye hai a = galat;
      agar anna (galat == a) {
        bol anna "hai galat";
      } warna anna {
        bol anna "nahi galat";
      }
      bye anna
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi with string sahi, should success`,
    input: `
      hi anna;
      anna ye hai a = "sahi";
      agar anna (sahi == a) {
        bol anna "hai sahi";
      } warna anna {
        bol anna "nahi sahi";
      }
      bye anna
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression, should success`,
    input: `
      hi anna;
      anna ye hai a = 7;
      agar anna (sahi == (a > 5)) {
        bol anna "hai sahi";
      } warna anna {
        bol anna "nahi sahi";
      }
      bye anna
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & string "sahi", should success`,
    input: `
      hi anna;
      anna ye hai a = 7;
      agar anna ("sahi" == (a > 5)) {
        bol anna "hai sahi";
      } warna anna {
        bol anna "nahi sahi";
      }
      bye anna
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & two expressions, should success`,
    input: `
      hi anna;
      anna ye hai a = sahi;
      agar anna ("sahi" == (a == sahi)) {
        bol anna "hai sahi";
      } warna anna {
        bol anna "nahi sahi";
      }
      bye anna
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression -3, should success`,
    input: `
      hi anna;
      anna ye hai a = sahi;
      agar anna ((a == sahi) == (a == sahi)) {
        bol anna "hai sahi";
      } warna anna {
        bol anna "nahi sahi";
      }
      bye anna
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 4, should success`,
    input: `
      hi anna;
      anna ye hai a;
      agar anna ((a == nalla) == (a == sahi)) {
        bol anna "hai sahi";
      } warna anna {
        bol anna "nahi sahi";
      }
      bye anna
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      hi anna;
      anna ye hai a;
      agar anna ((a == nalla) == (a == sahi)) {
        bol anna "hai sahi";
      } warna anna {
        bol anna "nahi sahi";
      }
      bye anna
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      hi anna;
      anna ye hai a;
      anna ye hai b = galat;
      agar anna (a == b) {
        bol anna "hai sahi";
      } warna anna {
        bol anna "nahi sahi";
      }
      bye anna
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison, should success`,
    input: `
      hi anna;
      anna ye hai a = galat;
      anna ye hai b = galat;
      agar anna (a == b) {
        bol anna "hai galat";
      } warna anna {
        bol anna "nahi galat";
      }
      bye anna
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison with string galat, should success`,
    input: `
      hi anna;
      anna ye hai a = "galat";
      anna ye hai b = galat;
      agar anna (a == b) {
        bol anna "hai galat";
      } warna anna {
        bol anna "nahi galat";
      }
      bye anna
    `,
    output: "nahi galat",
  },
  {
    name: "float value addition with integer value test, should success",
    input: `
      hi anna
      anna ye hai a = 1.2, b = 2;
      bol anna a + b;
      bye anna
    `,
    output: "3.2"
  },
  {
    name: "float value addition with float value value test, should success",
    input: `
      hi anna
      anna ye hai a = 1.2, b = 2.3;
      bol anna a + b;
      bye anna
    `,
    output: "3.5"
  },
  {
    name: "printStatement test with multiple expressions, should success",
    input: `
      hi anna;
      anna ye hai a = 2, b = 60;
      bol anna (a * (4 + 8) + 10), b;
      bye anna
    `,
    output: "34 60",
  },
  {
    name: "printStatement test with multiple expressions and re assigning value of one variable, should success",
    input: `
      hi anna;
      anna ye hai a = 2, b = 60;

      a = b + 3;
      bol anna a, b;
      bye anna
    `,
    output: "63 60",
  },
  {
    name: "printStatement test with multiple expressions & without any variables, should success",
    input: `
      hi anna;
      bol anna "hello", sahi, galat;
      bye anna
    `,
    output: "hello sahi galat",
  },
  {
    name: "printStatement test with nalla, should success",
    input: `
      hi anna;
      bol anna nalla;
      bye anna;
    `,
    output: "nalla",
  },
  {
    name: "printStatement test with nalla as second parameter, should success",
    input: `
      hi anna;
      bol anna 10, nalla;
      bye anna;
    `,
    output: "10 nalla",
  },
  {
    name: "printStatement test with string concatenation, should success",
    input: `
      hi anna;
      bol anna "hello" + "crap";
      bye anna;
    `,
    output: "hellocrap",
  },
  {
    name: "printStatement test with multiple expresions including nalla, should success",
    input: `
      hi anna;
      anna ye hai a = 70;
      bol anna 6*5, nalla, "jamtara", a;
      bye anna;
    `,
    output: "30 nalla jamtara 70",
  },
  {
    name: "printStatement test with nalla variable, should success",
    input: `
      hi anna;
      anna ye hai a;
      bol anna a;
      bye anna;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with string "undefined", should success`,
    input: `
      hi anna;
      bol anna "undefined";
      bye anna;
    `,
    output: "undefined",
  },
  {
    name: `printStatement test with nalla variable, should success`,
    input: `
      hi anna;
      anna ye hai a;
      bol anna a;
      bye anna;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with sahi variable, should success`,
    input: `
      hi anna;
      anna ye hai a = sahi;
      bol anna a;
      bye anna;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with galat variable, should success`,
    input: `
      hi anna;
      anna ye hai a = galat;
      bol anna a;
      bye anna;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with assignment expression, should success`,
    input: `
      hi anna;
      anna ye hai a;
      bol anna a = 90;
      bye anna;
    `,
    output: "90",
  },
  {
    name: `printStatement test with logical AND, should success`,
    input: `
      hi anna;
      bol anna 9 && 10;
      bye anna;
    `,
    output: "10",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      hi anna;
      bol anna 9 || 10;
      bye anna;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical - 1, should success`,
    input: `
      hi anna;
      bol anna galat && sahi;
      bye anna;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 2, should success`,
    input: `
    hi anna;
    anna ye hai a = sahi;
    bol anna a && galat;
    bye anna;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 3, should success`,
    input: `
    hi anna;
    anna ye hai a = sahi;
    bol anna a && sahi;
    bye anna;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with equality, should success`,
    input: `
      hi anna;
      bol anna 9 == 10;
      bye anna;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with inequality, should success`,
    input: `
      hi anna;
      bol anna 9 != 10;
      bye anna;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      hi anna;
      bol anna 9 || 10;
      bye anna;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical OR - 2, should success`,
    input: `
      hi anna;
      bol anna galat || sahi;
      bye anna;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi galat and logical, should success`,
    input: `
      hi anna;
      bol anna sahi != 10;
      bye anna;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi and string "sahi", should success`,
    input: `
      hi anna;
      bol anna "sahi" == sahi;
      bye anna;
    `,
    output: "galat",
  },
  // while statement / loop tests
  {
    name: `whileStatement test with 1 time loop, should success`,
    input: `
      hi anna;
      anna ye hai a = 0;
      jab tak anna (a < 1) {
        bol anna "anna";
        a += 1;
      }
      bye anna;
    `,
    output: "anna",
  },
  {
    name: `whileStatement test with single break statement, should success`,
    input: `
      hi anna;
      jab tak anna (sahi) 
        bas kar anna;
      bol anna "end";
      bye anna;
    `,
    output: "end",
  },
  {
    name: `whileStatement test with nested loops, should success`,
    input: `
      hi anna;
      anna ye hai a = 0;
      jab tak anna (a < 2) {
        jab tak anna (sahi)
          bas kar anna;
        bol anna "hello";
        agar anna (sahi)
          bas kar anna;
      }
      bye anna;
    `,
    output: "hello",
  },
  {
    name: `whileStatement with multiple breaks, should success`,
    input: `
      hi anna;
      anna ye hai a = 0;
      jab tak anna (a < 2) {
        bol anna "hello";
        agar anna (sahi)
          bas kar anna;
        bas kar anna;
        bas kar anna;
      }
      bye anna;
    `,
    output: "hello",
  },
  // if statement tests
  {
    name: `if statement success test - 1: only if, should success`,
    input: `
    hi anna
    agar anna (sahi) {
      bol anna "anna";
    }
    bye anna;
    `,
    output: "anna",
  },
  {
    name: `if statement success test - 2: if else both, should success`,
    input: `
    hi anna
    agar anna (sahi) {
      bol anna "sahi";
    } warna anna {
      bol anna "galat";
    }
    bye anna;
    `,
    output: "sahi",
  },
  {
    name: `if statement success test - 3: if only with comarison condn, should success`,
    input: `
    hi anna
    anna ye hai x = 9;
    agar anna (x >= 9) {
      x = 5;
      bol anna x;
    } 
    bye anna;
    `,
    output: "5",
  },
  // else-if statement tests
  {
    name: `else-if statement success test - 1: if with one else-if, should success`,
    input: `
    hi anna
    agar anna (galat) {
      bol anna "galat";
    } nahi to anna (sahi) {
      bol anna "sahi";
    }
    bye anna;
    `,
    output: "sahi",
  },
  {
    name: `else-if statement success test - 2: if with multiple else-ifs, should success`,
    input: `
    hi anna
    anna ye hai x = 10;
    agar anna (x < 5) {
      bol anna "x < 5";
    } nahi to anna (x < 8) {
      bol anna "x < 8";
    } nahi to anna (x < 12) {
      bol anna "x < 12";
    } nahi to anna (x < 15) {
      bol anna "x < 15";
    }
    bye anna;
    `,
    output: "x < 12",
  },
  {
    name: `else-if statement success test - 3: nested if-else-if ladder, should success`,
    input: `
    hi anna
    anna ye hai a = 15;
    agar anna (a < 0) {
      bol anna "a < 0";
    } nahi to anna (a > 0) {
      agar anna (a < 10) {
        bol anna "a < 10";
      } nahi to anna (a < 20) {
        bol anna "a < 20";
      }
    }
    bye anna
    `,
    output: "a < 20",
  },
  {
    name: `else-if statement success test - 4: if-else-if ladder evaluating to else, should success`,
    input: `
    hi anna
    anna ye hai x = 15;
    agar anna (x < 5) {
      bol anna "x < 5";
    } nahi to anna (x < 8) {
      bol anna "x < 8";
    } nahi to anna (x < 12) {
      bol anna "x < 12";
    } warna anna {
      bol anna "x > 12";
    }
    bye anna;
    `,
    output: "x > 12",
  },
  // logical expression test
  {
    name: `logical "&&" test with sahi galat, should success`,
    input: `
        hi anna
        agar anna (sahi && galat) {
          bol anna "sahi";
        } warna anna {
          bol anna "galat";
        }
        bye anna;
      `,
    output: `galat`,
  },
  // modulus operator test
  {
    name: `modulus operator "%" test, should success`,
    input: `
        hi anna
        bol anna 90 % 9;
        bye anna;
      `,
    output: `0`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        hi anna
        bol anna 27 % 5;
        bye anna;
      `,
    output: `2`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        hi anna
        bol anna 5 % 20;
        bye anna;
      `,
    output: `5`,
  },
  {
    name: `whileStatement test with single continue statement, should success`,
    input: `
      hi anna;
      anna ye hai a = 5;
      anna ye hai step = 0;
      jab tak anna (a > 0) {
        step += 1;
        agar anna (a % 2 != 0){
          a -= 2;
          agla dekh anna;
        }
        a -= 1;
      }
      bol anna step;
      bye anna;
    `,
    output: "3",
  },
  {
    name: `whileStatement test with multiple continue statement, should success`,
    input: `
      hi anna;
      anna ye hai a = 5;
      anna ye hai step = 0;
      jab tak anna (a > 0) {
        step += 1;
        agar anna (a % 2 == 0){
          a -= 2;
          agla dekh anna;
        }
        a -= 1;
        agla dekh anna;
        bol anna "oye oye oye.. yha tk nhi aana tha anna";
      }
      bol anna step;
      bye anna;
    `,
    output: "3",
  },
  {
    // step:  1 => 2
    // a: 10 => 7 => 6 => 3 => 2 => -1
    name: `whileStatement test with single continue statement without block, should success`,
    input: `
      hi anna;
      anna ye hai a = 10;
      anna ye hai step = 0;
      jab tak anna (a > 0) {
        agar anna (a % 2 == 0){
          a -= 3;
          agla dekh anna;
        }
        a -= 1;
        agar anna (step == 1) agla dekh anna
        step += 1;
      }
      bol anna step;
      bye anna;
    `,
    output: "1",
  },
];