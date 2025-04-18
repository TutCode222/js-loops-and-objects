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


// Problem 4: Reverse Array Output
// let colors = ["red", "green", "blue", "yellow"];
// Use a for loop to print the array in reverse order.

let colors = ["red", "green", "blue", "yellow"];

// Loop from the last index to the first
for (let i = colors.length - 1; i >= 0; i--) {
  console.log(colors[i]);
}


// PART #2

// Problem 1: Simple Object
// Create an object named person with properties:
// • name • age • favoriteColor
// Log a message using all three values.
// Example: "My name is Maya. I'm 30 and my favorite color is purple."

// Create an object named person
const person = {
    name: "Tuscaney",
    age: 34,
    favoriteColor: "black"
  };
  
  // Log a message using all three values
  console.log(`My name is ${person.name}. I'm ${person.age} and my favorite color is ${person.favoriteColor}.`);


  // Problem 2: Modify an Object
// Add a new property hobby to the person object using dot notation.
// Log the updated object.

// Define the person object
let person2 = {
    name: "Devin Jr.",
    age: 8
  };
  
  // Add a new property 'hobby' using dot notation
  person2.hobby = "Minecraft";
  
  // Log the updated object
  console.log(person2);


  // Problem 3: Array of Objects
// Create an array of 3 book objects. Each book should have:
// • title • author • pages
// Loop through the array and print each book like:
// "The Hobbit by J.R.R. Tolkien - 310 pages"

// Create an array of book objects
const books = [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      pages: 310
    },
    {
      title: "1984",
      author: "George Orwell",
      pages: 328
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      pages: 281
    }
  ];
  
  // Loop through the array and print each book's details
  books.forEach(book => {
    console.log(`${book.title} by ${book.author} - ${book.pages} pages`);
  });