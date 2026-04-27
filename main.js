const tipContainer = document.getElementById('tip-container');
const refreshTipBtn = document.getElementById('refresh-tip-btn');
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

const vetTips = [
    "강아지의 코가 마른 것이 항상 병을 의미하지는 않지만, 무기력증과 동반된다면 수의사의 진찰이 필요합니다.",
    "고양이는 아픔을 잘 숨깁니다. 갑자기 식사량이 줄거나 화장실 실수를 한다면 건강 이상 신호일 수 있습니다.",
    "초콜릿, 양파, 포도는 반려동물에게 치명적인 독성이 있으므로 절대 급여해서는 안 됩니다.",
    "여름철 산책은 지면 온도가 낮은 이른 아침이나 늦은 저녁에 하는 것이 발바닥 화상을 예방하는 방법입니다.",
    "반려동물의 치석은 심장 질환의 원인이 될 수 있습니다. 매일 양치질을 해주는 습관을 들이세요.",
    "7세 이상의 반려동물은 노령기에 접어드므로 6개월마다 정기 검진을 받는 것이 권장됩니다."
];

// 테마 초기화
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggleBtn.textContent = '라이트 모드';
}

function displayRandomTip() {
    tipContainer.style.opacity = 0;
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * vetTips.length);
        tipContainer.textContent = `💡 오늘의 건강 팁: ${vetTips[randomIndex]}`;
        tipContainer.style.opacity = 1;
        tipContainer.style.transition = 'opacity 0.5s';
    }, 300);
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
        modalText.innerHTML = `<h2>이용약관</h2><p>본 사이트에서 제공하는 정보는 참고용이며, 정확한 진단과 치료를 위해서는 반드시 동물병원에 방문하여 수의사의 상담을 받으셔야 합니다.</p>`;
    }
}

if (closeBtn) {
    closeBtn.onclick = () => modal.style.display = "none";
}
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}

// 이벤트 리스너
if (refreshTipBtn) {
    refreshTipBtn.addEventListener('click', displayRandomTip);
}
themeToggleBtn.addEventListener('click', toggleTheme);

// 초기 실행
displayRandomTip();