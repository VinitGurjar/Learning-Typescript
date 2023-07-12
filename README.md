# Learning-Typescript

## About Typescript
- `TypeScript` is a superset of JavaScript that adds types.
  <div align="center"> <img src="https://github.com/VinitGurjar/Learning-Typescript/assets/97173586/0b6e1b33-1996-4e4b-a9d7-a0a79801d1d6"   width="130" height="130"> </div>
- The type system refers to TypeScript’s understanding of how your code is meant to function: mainly what data types should be stored under your variables.
- xpects the data type of the variable to match the type of the value initially assigned to it at its declaration—this is known as type inference.
- An object’s shape describes, among other things, what properties and methods it does or doesn’t contain. TypeScript knows not only what type something is but also 
   what shape that type has.
- When it isn’t able to infer a type, TypeScript will consider a variable to be of type any.
- Type annotations are little pieces of code that indicate what type a variable is meant to be.

```typescript
let youAreAwesome: boolean;
youAreAwesome = true;
```
---

### What is tsconfig.json file ?
- Sometimes, you don’t want all the default rules that TypeScript is trying to enforce — and that’s fine. That’s one reason why providing a tsconfig.json file is useful. Additionally, you get perks like telling the TypeScript compiler what files to run on and more.

- The tsconfig.json file is always placed in the root of your project and you can customize what rules you want the TypeScript compiler to enforce. Here’s an 
eaxmple of tsconfig.json file.
```json
{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "strictNullChecks": true
  },
  "include": ["**/*.ts"]
}
```
In the JSON, there are several properties:

1. *"compilerOptions"*, which is a nested object that contains the rules for the TypeScript compiler to enforce.
2. *"target"*, the value "es2017" means the project will be using the 2017 version of EcmaScript standards for JavaScript.
3. *"module"*, this project will be using "commonjs" syntax to import and export modules.
4. *"strictNullChecks"*, variables can only have null or undefined values if they are explicitly assigned those values.
5. *"include"* that determines what files the compiler applies the rules to. In this case ["**/*.ts"] means the compiler should check every single file that has a .ts extension.

### Parameter Type Annotations
- In TypeScript, function parameters may be given type annotations with the same syntax as variable declarations: a colon next to the name. The type annotations ensure that the parameters are of the correct type:
```typescript
function greet(name: string) {
  console.log(`Hello, ${name}!`);
}
 
greet('Katz'); // Prints: Hello, Katz  
 
greet(1337); // Error: argument '1337' is not assignable to parameter of type 'string'
```
- Parameters that we do not provide type annotations for are assumed to be of type any—the same way variables are.
```typescript
function printKeyValue(key: string, value) {
  console.log(`${key}: ${value}`);
}
 
printKeyValue('Courage', 1337); // Prints: Courage: 1337
printKeyValue('Mood', 'scared'); // Prints: Mood: scared
```



