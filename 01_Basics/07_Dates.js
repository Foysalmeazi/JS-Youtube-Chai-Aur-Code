// Working with JavaScript Dates

// Create a new Date object with the current date and time
let myCreatedDate = new Date();
console.log(myCreatedDate); // Full date object (with time info)

// Convert the date to a readable string format
console.log(myCreatedDate.toString()); // Example: "Sun Jul 27 2025 20:41:00 GMT+1000 (Australian Eastern Standard Time)"

// Convert the date to a localized string (based on system locale settings)
console.log(myCreatedDate.toLocaleString()); // Example: "27/07/2025, 8:41:00 pm"

// Get the number of milliseconds since January 1, 1970 (Unix Epoch)
console.log(myCreatedDate.getTime()); // Example: 1753590060000

// Get the current timestamp in milliseconds (same as new Date().getTime())
let mystamp = Date.now();
console.log(mystamp); // Example: 1753590060000

// Convert timestamp to seconds (Unix timestamp)
console.log(Math.floor(mystamp / 1000)); // Example: 1753590060

// Create a new Date object with a specific date (July 12, 2025)
let myCreatedDate1 = new Date('July 12, 2025');
console.log('The date is: ' + myCreatedDate1); // Outputs full date for July 12, 2025

// Display the weekday name of the current date using toLocaleString with options
myCreatedDate.toLocaleString('default', {
    weekday: 'long', // Options: 'long' gives full weekday name (e.g., "Sunday")
});
