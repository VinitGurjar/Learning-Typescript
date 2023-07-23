## Documenting Functions
- TypeScript recognizes JavaScript comment syntax:
```
// This is a single line comment 
 
/*
This is a 
multiline
comment
*/
```

- But it’s common in TypeScript to see a third comment style: documentation comments. A documentation comment is denoted with the first line /** and a final line */. It’s common for each line within the comment to start with an asterisk (*):
```
/**
* This is a documentation comment
*/
```

- Documentation comments are especially useful for documenting functions. We place a function’s documentation comment in the code directly above the function declaration. We can use special tags within the comment to highlight certain aspects of the function. We can use @param to describe each of the function’s parameters, and we can use @returns to describe what the function returns:
```
  /**
   * Returns the sum of two numbers.
   *
   * @param x - The first input number
   * @param y - The second input number
   * @returns The sum of `x` and `y`
   *
   */
  function getSum(x: number, y: number): number {
    return x + y;
  }
}
```

- Many text editors will helpfully display documentation comments, for example, when hovering over a function name. Documenting Functions
