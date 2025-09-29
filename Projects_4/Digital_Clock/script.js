
const clockTime = document.querySelector('#clock');

setInterval(() => {
    let date = new Date();
    clockTime.innerHTML = date.toLocaleTimeString();
}, 1000);


