let mybutton = document.querySelectorAll('.button');
const body = document.querySelector('body')

mybutton.forEach((bt) => {
    bt.addEventListener('click', (e) => {
        // if (e.target.id === 'red') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'blue') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'green') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'yellow') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'purple') {
        //     body.style.backgroundColor = e.target.id;
        // }

        body.style.background = bt.id;


    })
});