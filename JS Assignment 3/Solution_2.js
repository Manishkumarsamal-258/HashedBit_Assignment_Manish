/*
Q2) let str = 'I love my India'
output expected = 'India my love I'
Write code for this.
*/

function reverseWords(input) {
    const characters = input.split(' ');
    const reversedCharacters = characters.reverse();
    const reversedString = reversedCharacters.join(' ');
    return reversedString;
  }
  const input = "I love my India";
  const output = reverseWords(input);
  console.log("Output:", output);
