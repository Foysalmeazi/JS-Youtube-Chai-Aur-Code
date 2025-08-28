const fiction = {
    Book1: "To Kill a Mockingbird",
    Book2: "1984",
    Book3: "The Great Gatsby",
    Book4: "The Catcher in the Rye"
}

for(const bookkey in fiction)
{
    //console.log(`${bookkey} is: ${fiction[bookkey]}`);
    
}

const programming = ['JS', 'Java', 'Ruby', 'CPP', 'Swift'];

for(const prog in programming)
{
    console.log(programming[prog]);
    
}