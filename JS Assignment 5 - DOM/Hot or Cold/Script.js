function displayRandomNumber() {
    let randomNumber = Math.round(Math.random() * 40) - 20;
    let numElement = document.getElementById('num');
    let resultDiv = document.createElement('div');

    numElement.textContent = randomNumber;

    if (randomNumber < 0) {
        resultDiv.textContent = 'Cold';
    } else {
        resultDiv.textContent = 'Hot';
    }

    numElement.appendChild(resultDiv);
}