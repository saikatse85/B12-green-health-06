1) What is the difference between var, let, and const?
2) What is the difference between map(), forEach(), and filter()?
3) What are arrow functions in ES6?
4) How does destructuring assignment work in ES6?
5) Explain template literals in ES6. How are they different from string concatenation?


1) What is the difference between var, let, and const?
#var is old fashion method. var is function scooped, when we declare var in a function it works only on this inside this function.it can not excess from outside when var used in block scoped{ }. Same  variable can used in var repeatedly its can not gives me error it will be over Write.
#let is modern method. When let declare in block scoped{ } it can not be excess from outside. let value can changeable.
#const is modern method. when we declare const value can set on this time. value not changeable.

2) What is the difference between map(), forEach(), and filter()?

#map(): it works on each item and return new array. Base array not change.

#forEach(): its works on each item and run only loop. can not return anything. Only use in side effect.

#filter(): its used for filter. Its check all item follow the condition and return new array.

3) What are arrow functions in ES6?
#arrow function: arrow function is short cut syntax like as  => its called arrow function.

4) How does destructuring assignment work in ES6?
#destructuring assignment is a short cut syntax we can take value from array or object.

5) Explain template literals in ES6. How are they different from string concatenation?
#template literals is also a shortcut syntax, we can use in it backtick `` and we can use ${} inside use variable and inject.