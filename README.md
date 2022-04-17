<h1 align="center">anna Lang</h1>
<p align="center">
<a href="https://lgtm.com/projects/g/DulLabs/anna-lang/alerts/"><img alt="Total alerts" src="https://img.shields.io/lgtm/alerts/g/DulLabs/anna-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://lgtm.com/projects/g/DulLabs/anna-lang/context:javascript"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/DulLabs/anna-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://github.com/DulLabs/anna-lang/actions/workflows/node.js.yml/badge.svg"><img alt="Build" src="https://github.com/DulLabs/anna-lang/actions/workflows/node.js.yml/badge.svg"/></a>
<a href="https://annalang.js.org/"><img alt="Build" src="https://img.shields.io/badge/website-annalang.js.org-orange"/></a>
<a href="https://www.npmjs.com/package/annalang"><img alt="Build" src="https://img.shields.io/badge/npm-annalang-orange"/></a>
  
</p>
<p align="center">
  This is official repository for anna-lang.<br><br>
  <b>anna lang is a toy programming language written in Typescript.</b>
</p>
<br>

<h2 align="center">Installation</h2>

```
npm i -g annalang
```

<h2 align="center">Usage</h2>

<h4 align="left">Create a new file (<code>test.anna</code>)</h4>


<h4 align="left">Edit the file with a text editor.
You can also try out your code on <a href="https://annalang.js.org/#playground">anna Lang PlayGround</a></h4>

```
hi anna
  bol anna "Hello anna";
bye anna

```

<h4 align="left">Run</h4>

```
annalang test.anna
```

<h4 align="left">Output</h4>

```
hello anna
```

<h2 align="center">Documentation</h2>

<h3 align="center">General</h3>
<p align="center"><code>hi anna</code> is the entrypoint for the program and all program must end with <code>bye anna</code>. Anything outside of it will be ignored.</p>

```

This will be ignored

hi anna
// Write code here
bye anna

This too
```

<h3 align="center">Variables</h3>
<p align="center">Variables can be declared using <code>anna ye hai</code>.</p>

```

hi anna
  anna ye hai a = 10;
  anna ye hai b = "two";
  anna ye hai c = 15;
  a = a + 1;
  b = 21;
  c *= 2;
bye anna
```

<h3 align="center">Types</h3>
<p align="center">Numbers and strings are like other languages. Null values can be denoted using <code>nalla</code>. <code>sahi</code> and <code>galat</code> are the boolean values.</p>

```

hi anna
  anna ye hai a = 10;
  anna ye hai b = 10 + (15*20);
  anna ye hai c = "two";
  anna ye hai d = 'ok';
  anna ye hai e = nalla;
  anna ye hai f = sahi;
  anna ye hai g = galat;
bye anna
```

<h3 align="center">Built-ins</h3>
<p align="center">Use <code>bol anna</code> to print anything to console.</p>

```

hi anna
  bol anna "Hello World";
  anna ye hai a = 10;
  {
    anna ye hai b = 20;
    bol anna a + b;
  }
  bol anna 5, 'ok', nalla , sahi , galat;
bye anna
```

<h3 align="center">Conditionals</h3>
<p align="center">annalang supports if-else-if ladder construct , <code>agar anna</code> block will execute if condition is <code>sahi</code>, otherwise one of the subsequently added <code>nahi to anna</code> blocks will execute if their respective condition is <code>sahi</code>, and the <code>warna anna</code> block will eventually execute if all of the above conditions are <code>galat</code>

```

hi anna
  anna ye hai a = 10;
  agar anna (a < 20) {
    bol anna "a is less than 20";
  } nahi to anna ( a < 25 ) {
    bol anna "a is less than 25";
  } warna anna {
    bol anna "a is greater than or equal to 25";
  }
bye anna
```

<h3 align="center">Loops</h3>
<p align="center">Statements inside <code>jab tak anna</code> blocks are executed as long as a specified condition evaluates to sahi. If the condition becomes <code>galat</code>, statement within the loop stops executing and control passes to the statement following the loop. Use <code>bas kar anna</code> to break the loop and <code className="language-cpp">agla dekh anna</code> to continue within loop.</p>


```

hi anna
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
```

<h2 align="center">Development</h2>
<p align="center">You can explore abstract syntax tree(AST) of annalang <a href="https://annalang-ast.netlify.app/" target="_blank">here</a>.</p>








