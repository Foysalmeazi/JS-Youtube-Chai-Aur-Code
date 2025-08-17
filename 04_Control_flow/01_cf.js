
// const score = 1000;

// if(score) console.log(`Score is: ${score}`); // implicit scope

let username = 'Hasib';
let logedInfromEmail = true;
let logedInfromGoogle = true;

if(username=='Foysal' && logedInfromEmail && logedInfromGoogle)
{
    console.log(`Take ${username} to the Dashboard as he successfully logged in.`);
    
}
else{
    console.log(`Kiked ${username} from here,, Sala Haramkhur..Get Out!`);
    
}


username = 'Foysal';
logedInfromEmail = false;

if(username=='Foysal' || logedInfromEmail || logedInfromGoogle)
{
    console.log(`Take ${username} to the Dashboard as he successfully logged in.`);
    
}
else{
    console.log(`Kiked ${username} from here,, Sala Haramkhur..Get Out!`);
    
}
