// PART #1

// Problem 1: Count to 10
// Use a for loop to print numbers 1 through 10 in the console.

for (let i = 1; i <= 10; i++) {
    console.log(i);
  }


  // Problem 2: Even Numbers
// Print all even numbers from 2 to 20 using a for loop.

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }


  // Problem 3: Loop through an Array
// let animals = ["dog", "cat", "rabbit", "parrot"];
// Loop through the animals array and print each animal with a message like:
// "I like dogs."

let animals = ["dog", "cat", "rabbit", "parrot"];

for (let i = 0; i < animals.length; i++) {
  console.log("I like " + animals[i] + "s.");
}