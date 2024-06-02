/*
Q10) Write a function to reverse a string.
Input - Hello
Outpur - olleH
*/

function reverseString(input) {
    const characters = input.split('');
    const reversedCharacters = characters.reverse();
    const reversedString = reversedCharacters.join('');
    return reversedString;
  }
  const input = "Hello";
  const output = reverseString(input);
  console.log("Output:", output);