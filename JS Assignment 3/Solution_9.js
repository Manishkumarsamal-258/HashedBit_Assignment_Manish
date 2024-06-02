//Q9) Write a function to count the number of words in a paragraph.

let paragraph=" Write a function to  count  the number of words in a paragraph."
const words = paragraph.split(' ');
const filteredWords = words.filter(word => word.length > 0);
console.log(filteredWords)
console.log("Number of words is :",filteredWords.length)