
const books = ['Happy', 'Sad', 'Angry', 'Sorrow', 'Good', 'Bad']


for (const name of books) {
    // console.log(`Books: ${name}`);
    
}

const geetings = 'Hello Vai, I am practicing JS. Its Interesting';

for (const greet of geetings) {
    if(greet == ' ')
    {
        continue;
    }
    //console.log(`Geetings is ${greet}`);
}

const map =new Map(); // Unique Value, Duplicate will not print

map.set('Bn', 'Bangladesh');
map.set('IN', 'India');
map.set('Nz', 'Newzeland');
map.set('Fr', 'France');
map.set('Nz', 'Newzeland');

for (const [key, value] of map) {
    console.log(`Keys and Values:- ${key}:${value}`);
    
}
