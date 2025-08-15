// Create a unique symbol to use as a property key
const mysymbol = Symbol();

// Define an object 'person' with various properties and methods
const person = {
    name: 'Foysal',                        // String property
    mobile: '0480583548',                 // String property
    [mysymbol]: 'Sym is &',               // Symbol-keyed hidden property
    Age: 28,                              // Number property
    FavSinger: 'Atif',                    // String property

    // Method that returns a personalized string
    favGame: function () {
        return `Cricket is ${person.name} favourite game.`; // Uses object's name property
    }
}

// Dynamically add a new method 'greetings' to the object
person.greetings = function () {
    console.log('Good Evening JS');       // Prints a greeting message
}

// Call the 'greetings' method and log its return value (which is undefined)
console.log(person.greetings());          // Outputs: Good Evening JS \n undefined

// Call and log the return value of 'favGame' method
console.log(person.favGame());            // Outputs: Cricket is Foysal favourite game.

// Access and print the value of the symbol-keyed property
console.log(person[mysymbol]);            // Outputs: Sym is &

// Log the entire 'person' object to the console
console.log(person);                      // Outputs the object with all string-keyed and function properties (symbol property not shown in regular console.log)
