const lottoNumbersContainer = document.querySelector('.lotto-numbers');
const generateButton = document.getElementById('generate-btn');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 테마 초기화
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '라이트 모드';
}

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

function toggleTheme() {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    
    if (isDarkMode) {
        themeToggle.textContent = '라이트 모드';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '다크 모드';
        localStorage.setItem('theme', 'light');
    }
}

generateButton.addEventListener('click', generateLottoNumbers);
themeToggle.addEventListener('click', toggleTheme);

generateLottoNumbers();