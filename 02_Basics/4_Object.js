// Create an empty object fbUser1 and add properties
const fbUser1 = {};
fbUser1.name = 'Hamid';
fbUser1.email = 'hamid@google.com';
fbUser1.mobile = '013456789087';

// Create another empty object fbUser2 and add properties
const fbUser2 = {};
fbUser2.age = 20;
fbUser2.height = '5:7';

// Merge fbUser1 and fbUser2 into a new object allUser using spread operator
const allUser = { ...fbUser1, ...fbUser2 };
console.log('All User Details:\n', allUser);


// Define object obj3 with user details
const obj3 = {
    name: 'Rahul',
    age: 20,
    country: 'Bangladesh'
};

// Define object obj4 with brother’s details
const obj4 = {
    breakrother: 'Ramim',
    brotherAge: 24,
    brotherCountry: 'India'
};

// Merge obj3 and obj4 into nextObj with an additional label property
const nextObj = { 
    label: 'Total objects are:',
    ...obj3, 
    ...obj4 
};
console.log(nextObj);


// Nested object userprofile with deep properties
const userprofile = {
    profileName: 'Rahumin',
    fullname: {
        userFullname: {
            fisrtName: 'Rahumin',
            lastName: 'Hossain'
        }
    }
};

console.log('UserProfile:\n', userprofile);


// Object Destructuring example from course object
const course = {
    courseName: 'English',
    price: 1000,
    instructor: 'Saifurs English'
};

// Extract 'instructor' property and rename it to 'instract'
const { instructor: instract } = course;

console.log('Course Instructor is: ', instract);
