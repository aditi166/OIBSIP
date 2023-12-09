let celsiusInput = document.querySelector('#celsius > input');
let fahrenheitInput = document.querySelector('#fahrenheit > input');
let kelvinInput = document.querySelector('#kelvin > input');
let clearBtn = document.querySelector('.button button.clear');
let resultBtn = document.querySelector('.button button.result');

// Define the elements for displaying results
let resultCelsiusSpan = document.querySelector('#resultCelsius');
let resultFahrenheitSpan = document.querySelector('#resultFahrenheit');
let resultKelvinSpan = document.querySelector('#resultKelvin');

function roundNumber(number) {
    return Math.round(number * 100) / 100;
}

clearBtn.addEventListener('click', () => {
    celsiusInput.value = '';
    fahrenheitInput.value = '';
    kelvinInput.value = '';
    clearResults();
});

resultBtn.addEventListener('click', () => {
    let cTemp = parseFloat(celsiusInput.value);
    let fTemp = parseFloat(fahrenheitInput.value);
    let kTemp = parseFloat(kelvinInput.value);

    if (!isNaN(cTemp)) {
        fTemp = (cTemp * (9 / 5)) + 32;
        kTemp = cTemp + 273.15;
    } else if (!isNaN(fTemp)) {
        cTemp = (fTemp - 32) * (5 / 9);
        kTemp = (fTemp - 32) * (5 / 9) + 273.15;
    } else if (!isNaN(kTemp)) {
        cTemp = kTemp - 273.15;
        fTemp = (kTemp - 273.15) * (9 / 5) + 32;
    }

    // Display the results
    resultCelsiusSpan.textContent = roundNumber(cTemp) + ' °C';
    resultFahrenheitSpan.textContent = roundNumber(fTemp) + ' °F';
    resultKelvinSpan.textContent = roundNumber(kTemp) + ' K';
});

function clearResults() {
    resultCelsiusSpan.textContent = '';
    resultFahrenheitSpan.textContent = '';
    resultKelvinSpan.textContent = '';
}
