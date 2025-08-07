
//const user  = new Object();

const fbUser1 = {};

fbUser1.name = 'Hamid',
fbUser1.email = 'hamid@google.com',
fbUser1.mobile = '013456789087'

const fbUser2 = {};

fbUser2.age = 20,
fbUser2.height = '5:7'

const allUser = { ...fbUser1, ...fbUser2 }
console.log('All User Details:\n', allUser);


const obj3 =
{
    name: 'Rahul',
    age: 20,
    country: 'Bangladesh'
}
const obj4 =
{
    breakrother: 'Ramim',
    brotherAge: 24,
    brotherCountry: 'India'
}
//const newObj = Object.assign({}, obj3,obj4);
const nextObj = { label: 'Total objects are:',
    ...obj3, 
    ...obj4 }
console.log(nextObj);


const userprofile =
{
    profileName: 'Rahumin',
    fullname:
    {
        userFullname:
        {
            fisrtName: 'Rahumin',
            lastName: 'Hossain'
        }

    }
}

console.log('UserProfile:\n',userprofile);


