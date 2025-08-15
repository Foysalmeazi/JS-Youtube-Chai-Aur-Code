
const websiteUser=
{
    username: 'foysal',
    age: '28',
    welcomeMessage: function()
    {
        console.log('This keyword inside the ');
        
        console.log(`Welcome ${this.username}, in my website.`);
        
    }
}

websiteUser.welcomeMessage()
websiteUser.username = 'Piash';
websiteUser.welcomeMessage()

console.log(this);

function userProfile()
{
    let name ='Hitesh';

    console.log(this.name);
    
}

userProfile();

const userProfile2 =  ()=>
{
    let name ='Rony';

    console.log(this.name);
    
}

userProfile2();

// const sumofTwonumber=(num1,num2)=>
// {
//     return num1+num2;
// }

// console.log(sumofTwonumber(10,34));

const sumofTwonumber=(num1,num2)=> num1+num2;
console.log(sumofTwonumber(10,34));