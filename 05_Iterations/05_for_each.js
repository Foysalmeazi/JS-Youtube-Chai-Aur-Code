const programming = ['JS', 'Java', 'Ruby', 'CPP', 'Swift'];

// programming.forEach(function (value)
// {
// console.log(`Array Values Are: ${value}`);

// })

function printMe(item)
{
    console.log(item);
    
}
programming.forEach(printMe)


programming.forEach((item,index,array)=>
{
//console.log(`Value: ${item}, index ${index}, Array ${array}`);

})
