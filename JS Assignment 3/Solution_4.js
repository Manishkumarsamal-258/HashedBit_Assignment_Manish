//Q4 Take any string with minimum 20 characters. Count number of consonant and vowel in the string.


function countConsonantsAndVowels(str) {
    str = str.toLowerCase();
    let vowelCount = 0;
    let consonantCount = 0;
    let otherCount=0;
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++;
      } 
      else if (char >= 'a' && char <= 'z') {
        consonantCount++;
      }
      else{
        otherCount++;
      }
    }
  
    return { vowelCount, consonantCount ,otherCount};
  }
  
  const inputString = 'Hey,I am Gaurav Dawange...! who are you...? ';
  const counts = countConsonantsAndVowels(inputString);
  
  console.log('Vowel Count:', counts.vowelCount);
  console.log('Consonant Count:', counts.consonantCount);
  console.log('Other Count:', counts.otherCount);