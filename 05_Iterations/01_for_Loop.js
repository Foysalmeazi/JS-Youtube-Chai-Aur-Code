
for (let i=1;i<=5;i++)
{
    console.log(`\n ${i} er Namta....\n`);
    
    for(let j=1;j<=5;j++)
    {
        console.log(`${i} * ${j} = ${i*j}`);
        
    }
}


const array1 = [1,2,3,4,5,6,7,8,9,10,3,4,5,6];

for(let index = 0; index<array1.length;index++)
{
    if(array1[index]==6)
    {
        console.log('Get out from the loop');
        break;
    }
    console.log(`${array1[index]}`);
    
}

const newarray = [1,2,3,4,5,6,7,8,9,10,3,4,5,16];

for(let j = 0; j<newarray.length;j++)
{
    if(newarray[j]==6)
    {
        console.log('\nSkipeed\n');
        continue;
    }
    console.log(`${newarray[j]}`);
    
}

