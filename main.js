const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.getElementById('numbers-container');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Theme Logic
const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
}

// Lotto Generation Logic
generateBtn.addEventListener('click', () => {
    numbersContainer.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const numbers = generateLottoNumbers();
        displayNumbers(numbers);
    }
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNum = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNum);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function getBallColorClass(num) {
    if (num <= 10) return 'ball-yellow';
    if (num <= 20) return 'ball-blue';
    if (num <= 30) return 'ball-red';
    if (num <= 40) return 'ball-gray';
    return 'ball-green';
}

function displayNumbers(numbers) {
    const numberSetDiv = document.createElement('div');
    numberSetDiv.className = 'number-set';

    const ballsRow = document.createElement('div');
    ballsRow.className = 'balls-row';

    numbers.forEach(num => {
        const ball = document.createElement('div');
        ball.className = `ball ${getBallColorClass(num)}`;
        ball.textContent = num;
        ballsRow.appendChild(ball);
    });

    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.textContent = '번호 복사하기';

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(numbers.join(', ')).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = '✅ 복사 완료!';
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 1500);
        });
    });

    numberSetDiv.appendChild(ballsRow);
    numberSetDiv.appendChild(copyBtn);
    numbersContainer.appendChild(numberSetDiv);
}
