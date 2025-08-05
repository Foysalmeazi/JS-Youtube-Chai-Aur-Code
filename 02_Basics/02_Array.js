
const marvel_Heros = ['Thor', 'Loki', 'Iron Man', 'Hulk'];
const dc_heros = ['Superman', ['Batman','Fly Man'], 'No Man'];

// marvel_Heros.push(dc_heros);

// console.log(marvel_Heros);
// console.log(marvel_Heros[4][2]);

// const all_Heros = marvel_Heros.concat(dc_heros);
// console.log(all_Heros);

const all_new_heros = [...marvel_Heros,...dc_heros];
console.log(all_new_heros .flat(Infinity));


console.log(Array.isArray('Foysal'));
console.log(Array.from('Foysal'));

let score1 = 100;
let score2 = 200;
let score3 = 300;


console.log(Array.of(score1, score2,score3));