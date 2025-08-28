const programming = ['JS', 'Java', 'Ruby', 'CPP', 'Swift'];

// programming.forEach(function (value)
// {
// console.log(`Array Values Are: ${value}`);

// })

function printMe(item)
{
    //console.log(item);
    
}
programming.forEach(printMe)


programming.forEach((item,index,array)=>
{
//console.log(`Value: ${item}, index ${index}, Array ${array}`);

})


const holliwoodMovies = [

   {
    name: 'Shawshank Redumptionm',
    year: 1994,
    director: "Frank Darabont",
    genre: "Drama"
  },
  {
    name: 'Night Club',
    year: 2008,
    director: "Christopher Nolan",
    genre: "Action"
  },
  {
    name: 'Chis Movie',
    year: 2010,
    director: "Christopher Nolan",
    genre: "Sci-Fi"
  },

];

holliwoodMovies.forEach((mvitem)=>
{
    console.log('\n');
    console.log(`Movies Name: ${mvitem.name}\nDirector: ${holliwoodMovies.director}\nGenre: ${holliwoodMovies.genre}`);
    
})