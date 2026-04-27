const lottoNumbersContainer = document.querySelector('.lotto-numbers');
const generateButton = document.getElementById('generate-btn');
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

// 테마 초기화
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggleBtn.textContent = '라이트 모드';
}

function generateLottoNumbers() {
    lottoNumbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach((number, index) => {
        setTimeout(() => {
            const numberElement = document.createElement('div');
            numberElement.classList.add('lotto-number');
            numberElement.textContent = number;
            lottoNumbersContainer.appendChild(numberElement);
        }, index * 100); // 번호가 순차적으로 나타나는 효과
    });
}

function toggleTheme() {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    
    if (isDarkMode) {
        themeToggleBtn.textContent = '라이트 모드';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleBtn.textContent = '다크 모드';
        localStorage.setItem('theme', 'light');
    }
}

// 모달 처리
const modal = document.getElementById('policy-modal');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close');

function showModal(type) {
    modal.style.display = "block";
    if (type === 'privacy') {
        modalText.innerHTML = `<h2>개인정보처리방침</h2><p>본 사이트는 사용자의 어떠한 개인정보도 서버에 저장하지 않습니다. 사용자의 테마 설정 정보는 브라우저의 localStorage에만 저장됩니다.</p>`;
    } else {
        modalText.innerHTML = `<h2>이용약관</h2><p>본 서비스에서 생성된 번호는 확률에 기반한 난수이며, 당첨을 보장하지 않습니다. 재미로만 이용해 주시기 바랍니다.</p>`;
    }
}

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}

// 이벤트 리스너
generateButton.addEventListener('click', generateLottoNumbers);
themeToggleBtn.addEventListener('click', toggleTheme);

// 초기 실행
generateLottoNumbers();