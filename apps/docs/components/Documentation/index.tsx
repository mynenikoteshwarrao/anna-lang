import Snippet from "./Snippet";


/* This example requires Tailwind CSS v2.0+ */
const features = [
  {
    name: "General",
    description: (
      <>
        <code className="language-cpp">hi anna</code> is the entrypoint for the
        program and all program must end with{" "}
        <code className="language-cpp">bye anna</code>. Anything outside of it
        will be ignored.
      </>
    ),
    code: `This will be ignored

hi anna
  // Write code here
bye anna

This too
    `,
  },
  {
    name: "Variables",
    description: (
      <>
        Variables can be declared using{" "}
        <code className="language-cpp">anna ye hai</code>.
      </>
    ),
    code: `hi anna
    anna ye hai a = 10;
    anna ye hai b = "two";
    anna ye hai c = 15;
    a = a + 1;
    b = 21;
    c *= 2;
bye anna
    `,
  },
  {
    name: "Types",
    description: (
      <>
        Numbers and strings are like other languages. Null values can be denoted
        using <code className="language-cpp">nalla</code>.{" "}
        <code className="language-cpp">sahi</code> and{" "}
        <code className="language-cpp">galat</code> are the boolean values.
      </>
    ),
    code: `hi anna
    anna ye hai a = 10;
    anna ye hai b = 10 + (15*20);
    anna ye hai c = "two";
    anna ye hai d = 'ok';
    anna ye hai e = nalla;
    anna ye hai f = sahi;
    anna ye hai g = galat;
bye anna
    `,
  },
  {
    name: "Built-ins",
    description: (
      <>
        Use <code className="language-cpp">bol anna</code> to print anything to
        console.
      </>
    ),
    code: `hi anna
    bol anna "Hello World";
    anna ye hai a = 10;
    {
       anna ye hai b = 20;
       bol anna a + b;
    }
    bol anna 5, 'ok', nalla , sahi , galat;
bye anna
    `,
  },
  {
    name: "Conditionals",
    description: (
      <>
        annalang supports if-else-if ladder construct , <code className="language-cpp">agar anna</code> block will execute if condition is <code className="language-cpp">sahi</code>, otherwise one of the subsequently added <code className="language-cpp">nahi to anna</code> blocks will execute if their respective condition is <code className="language-cpp">sahi</code>, and the <code className="language-cpp">warna anna</code> block will eventually execute if all of the above conditions are <code className="language-cpp">galat</code>.
      </>
    ),
    code: `hi anna
    anna ye hai a = 10;
    agar anna (a < 20) {
      bol anna "a is less than 20";
    } nahi to anna ( a < 25 ) {
      bol anna "a is less than 25";
    } warna anna {
      bol anna "a is greater than or equal to 25";
    }
bye anna
    `
  },
  {
    name: "Loops",
    description: (
      <>
        Statements inside <code className="language-cpp">jab tak anna</code> blocks are executed as long as a specified condition evaluates to <code className="language-cpp">sahi</code>. If the condition becomes <code className="language-cpp">galat</code>, statement within the loop stops executing and control passes to the statement following the loop. 
        Use <code className="language-cpp">bas kar anna</code> to break the loop and <code className="language-cpp">agla dekh anna</code> to continue within loop.
      </>
    ),
    code: `hi anna
    anna ye hai a = 0;
    jab tak anna (a < 10) {
      a += 1;
      agar anna (a == 5) {
        bol anna "andar se bol anna ", a;
        agla dekh anna;
      }
      agar anna (a == 6) {
        bas kar anna;
      }
      bol anna a;
    }
    bol anna "done";
bye anna
    `
  }

];

export default function Documentation() {
  return (
    <div>
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            Documentation
          </h2>
          <p className="mt-4 text-gray-300">
            annalang is dynamically typed toy programming language, based on an
            inside joke, written in Typescript.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <div className="font-medium text-gray-300">{feature.name}</div>
                <div className="mt-2 text-sm text-gray-200">
                  {feature.description}
                </div>
                <Snippet code={feature.code} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
