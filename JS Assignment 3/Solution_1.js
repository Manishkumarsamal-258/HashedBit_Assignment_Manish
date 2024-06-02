/*
Q1) Create an array of states in india.
Remove all the names starting with vowels from the list. Use array.filter.
*/

const indianStates = ["Chhattisgarh", "Goa","Gujarat","Haryana","Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala","Madhya Pradesh","Maharashtra", "Odisha", "Tamil Nadu", 
 "Telangana", "Tripura", "Uttar Pradesh"];
  
  const consonantStates = indianStates.filter((state) => {
    const firstLetter = state[0].toLowerCase();
    return !['a', 'e', 'i', 'o', 'u'].includes(firstLetter);
  });
  
  console.log(consonantStates);