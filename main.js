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

// Lotto Generation Logic (6 main + 1 bonus)
generateBtn.addEventListener('click', () => {
    numbersContainer.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const lottoData = generateLottoNumbers();
        displayNumbers(lottoData);
    }
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 7) {
        const randomNum = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNum);
    }
    
    const numbersArray = Array.from(numbers);
    const bonus = numbersArray.pop(); // Take the last one as bonus
    const main = numbersArray.sort((a, b) => a - b);
    
    return { main, bonus };
}

function getBallColorClass(num) {
    if (num <= 10) return 'ball-yellow';
    if (num <= 20) return 'ball-blue';
    if (num <= 30) return 'ball-red';
    if (num <= 40) return 'ball-gray';
    return 'ball-green';
}

function displayNumbers({ main, bonus }) {
    const numberSetDiv = document.createElement('div');
    numberSetDiv.className = 'number-set';

    const ballsRow = document.createElement('div');
    ballsRow.className = 'balls-row';

    // Main Numbers
    main.forEach(num => {
        const ball = document.createElement('div');
        ball.className = `ball ${getBallColorClass(num)}`;
        ball.textContent = num;
        ballsRow.appendChild(ball);
    });

    // Separator
    const plusSign = document.createElement('span');
    plusSign.className = 'bonus-plus';
    plusSign.textContent = '+';
    ballsRow.appendChild(plusSign);

    // Bonus Number
    const bonusBall = document.createElement('div');
    bonusBall.className = `ball ${getBallColorClass(bonus)}`;
    bonusBall.textContent = bonus;
    ballsRow.appendChild(bonusBall);

    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.textContent = '번호 복사하기';

    copyBtn.addEventListener('click', () => {
        const textToCopy = `${main.join(', ')} + 보너스 ${bonus}`;
        navigator.clipboard.writeText(textToCopy).then(() => {
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
