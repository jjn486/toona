const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.getElementById('numbers-container');

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

function displayNumbers(numbers) {
    const numberSetDiv = document.createElement('div');
    numberSetDiv.className = 'number-set';

    const numbersP = document.createElement('p');
    numbersP.className = 'lotto-numbers';
    numbersP.textContent = numbers.join(', ');

    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.textContent = '복사';

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(numbers.join(', ')).then(() => {
            copyBtn.textContent = '복사 완료!';
            setTimeout(() => {
                copyBtn.textContent = '복사';
            }, 1000);
        });
    });

    numberSetDiv.appendChild(numbersP);
    numberSetDiv.appendChild(copyBtn);
    numbersContainer.appendChild(numberSetDiv);
}
