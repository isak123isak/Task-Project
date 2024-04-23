/*
Lesson 23.April going through
-Array
-For Loops
*/

const fruitBowl = ['Banana', 'Orange', 'Apple', 'Grape'];
console.log(fruitBowl);
console.log(fruitBowl[0]);

// For loop that loops through our array
for (
      // New variable called "index" is snaller then length of our fruitbowl
      let index = 0;
      // Checks if index is smaller then the length of our fruitbowl 
      index < fruitBowl.length;
      // Reassign a new value of index
      index = index + index
      ) {
         console.log(fruitBowl);
         break;
      };

// Traditional for loop
for ( let i = 0;i < fruitBowl.length;
    i++) {
    console.log(fruitBowl[i]);
    
    };




