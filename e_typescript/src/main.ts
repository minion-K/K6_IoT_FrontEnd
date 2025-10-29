let count: number = 0; // 초기 카운터 값 0 초기화

function updateDisplay() {
  const countElement = document.getElementById('countValue');

  if(countElement) {
    // .textContent 속성은 문자열 타입
    countElement.textContent = count.toString();
  }
}

function increment() {
  count++;

  updateDisplay();
}

function decrement() {
  if(count !== 0) {
    count--;
  }

  updateDisplay();
}

document.addEventListener('DOMContentLoaded', () => {
  const incrementButton = document.getElementById('incrementBtn');
  const decrementButton = document.getElementById('decrementBtn');

  if(incrementButton) incrementButton.addEventListener('click', increment);
  if(decrementButton) decrementButton.addEventListener('click', decrement);
})