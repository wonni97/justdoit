const lottoNumbersContainer = document.querySelector('.lotto-numbers');
const generateButton = document.getElementById('generate-btn');

function generateLottoNumbers() {
    lottoNumbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const numberElement = document.createElement('div');
        numberElement.classList.add('lotto-number');
        numberElement.textContent = number;
        lottoNumbersContainer.appendChild(numberElement);
    });
}

generateButton.addEventListener('click', generateLottoNumbers);

generateLottoNumbers();