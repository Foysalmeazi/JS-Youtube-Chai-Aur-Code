const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height_is = document.querySelector('#height').value;
    const weight_is = document.querySelector('#weight').value;
    const results = document.querySelector('#results');


    if (height_is == 0 || height_is == '' || isNaN(height_is)) {
        results.innerHTML = `Please enter a valid height as the height is ${height_is}`;
    }
    else if (weight_is == 0 || weight_is == '' || isNaN(weight_is)) {
        results.innerHTML = `Please enter a valid weight as the weight is ${weight_is}`;
    }
    else {
        const bmi = weight_is / (height_is * height_is).toFixed(2);
        results.innerHTML = ` <b>The BMI is: </b> ${bmi}`;
    }



})