## Typescript
 **Installation**
 
 ```cmd
 npm install -g typescript
 ```
 **To check** 
 ```cmd
 tsc -v
 ```
 ### Type Annotations 
 - JavaScript is not a typed language
 - TypeScript is a typed language, where we can specify the type of the variables, function parameters and object properties.
 - We can specify the type using **:Type** after the name of the variable, parameter or property. 
 There can be a space after the colon. TypeScript includes all the primitive types of JavaScript- number, string and boolean.
 ```js
var age: number = 32; // number variable
var name: string = "John";// string variable
var isUpdated: boolean = true;// Boolean variable
 ```
 - In the above example, each variable is declared with their data type. These are **type annotations**
 - It is not mandatory in TypeScript to use type annotations. 
 However, type annotations help the compiler in checking types and helps avoid errors dealing with data types.
 - It is also a good way of writing code for easier **readability** and **maintenance** by future developers working on your code.
 
 ### Variable
 - TypeScript follows the same rules as JavaScript for variable declarations. 
 - Variables can be declared using: **var**, **let**, and **const**
 - variables declared with **let** have a block-scope
 **let scope ex**
  ```js
  let num1:number = 1; 
    
function letDeclaration() { 
    let num2:number = 2; 

    if (num2 > num1) { 
        let num3: number = 3;
        num3++; 
    } 

    while(num1 < num2) { 
        let num4: number = 4;
        num1++;
    }

    console.log(num1); //OK
    console.log(num2); //OK 
    console.log(num3); //Compiler Error: Cannot find name 'num3'
    console.log(num4); //Compiler Error: Cannot find name 'num4'
}

letDeclaration();
```
### Numbers
- Just like JavaScript, TypeScript supports number data type. All numbers are stored as floating point numbers. 
- These numbers can be Decimal (base 10), Hexadecimal (base 16) or Octal (base 8).
- ex:
```js
let first:number = 123; // number 
let second: number = 0x37CF;  // hexadecimal
let third:number=0o377 ;      // octal
let fourth: number = 0b111001;// binary 
```

### String
- String is another primitive data type that is used to store text data. 
- String values are surrounded by single quotation marks or double quotation marks.
- **Template strings** are used to embed expressions into strings.
- ex:
```js
let employeeName:string = 'John Smith'; 
let employeeDept:string = "Finance"; 

// Pre-ES6 
let employeeDesc1: string = employeeName + " works in the " + employeeDept + " department."; 

// Post-ES6 
let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`; 

console.log(employeeDesc1);//John Smith works in the Finance department. 
console.log(employeeDesc2);//John Smith works in the Finance department. 
```
### Boolean
- true/false
```js
let isPresent:boolean = true;
```
### Array
- There are two ways to declare an array:
```js
// 1. Using square brackets.
let fruits: string[] = ['Apple', 'Orange', 'Banana'];
// 2. Using a generic array type, Array<elementType>.
let fruits: Array<string> = ['Apple', 'Orange', 'Banana'];
```
- ex for multi type array.
```js
let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 
// or 
let values: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 
```
### Tuple
- Tuple is a new data type which includes set of values of different data types.
ex.
```js
var empId: number = 1;
var empName: string = "Steve";        

// Tuple type variable 
var employee: [number, string] = [1, "Steve"];
var employees: [number, string][]; // array of tuples
employees = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
var person: [number, string, boolean] = [1, "Steve", true];

var user: [number, string, boolean, number, string];// declare tuple variable
user = [1, "Steve", true, 20, "Admin"];// initialize tuple variable
```
### enum
```js
enum PrintMedia {
  Newspaper = 1,
  Newsletter,
  Magazine,
  Book
}
console.log(PrintMedia)
```
output
```js
{
  '1': 'Newspaper',
  '2': 'Newsletter',
  '3': 'Magazine',
  '4': 'Book',
  Newspaper: 1,
  Newsletter: 2,
  Magazine: 3,
  Book: 4 
}
```
