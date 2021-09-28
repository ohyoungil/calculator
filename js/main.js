const $calculate = document.querySelector('#calculate');
const $view = document.querySelector('#view');
const $buttons = document.querySelectorAll('.btn');
const $calBtns = document.querySelectorAll('.calBtn');
const $result = document.querySelector('.result');

let opr = ''; // 연산자 변수
let cal = ''; // 계산 변수
let num; // 숫자 변수
let newNum = ''; // 새로운 숫자 변수

function onCalculator() {
  num = Number(newNum);

  if (opr === 'DEL') {
    if (newNum) {
      newNum = newNum.slice(0, -1);
      $view.textContent = newNum;
    } else if (newNum === '') {
      $view.textContent = cal;
    }
  }

  if (!opr) {
    if (cal === '') {
      cal = num;
    } else if (newNum) {
      cal = num;
    } else if (newNum === '') {
      cal = cal;
    }
    $calculate.textContent = `${cal} =`;
    $view.textContent = cal;
    newNum = ''; // 새로운 숫자 변수를 빈값으로 만듬
  }

  if (opr === '+') {
    if (cal === '') {
      // 처음 계산할 때
      cal = num;
    } else if (newNum === '') {
      cal = cal;
    } else {
      cal += num;
    }
    $calculate.textContent = `${cal} ${opr} `;
    $view.textContent = cal;
    newNum = ''; // 새로운 숫자 변수를 빈값으로 만듬
  }

  if (opr === '-') {
    if (cal === '') {
      cal = num;
    } else if (newNum === '') {
      cal = cal;
    } else {
      cal = cal - num;
    }
    $calculate.textContent = `${cal} ${opr} `;
    $view.textContent = cal;
    newNum = ''; // 새로운 숫자 변수를 빈값으로 만듬
  }

  if (opr === '÷') {
    if (cal === '') {
      cal = num;
    } else if (newNum === '') {
      cal = cal;
    } else {
      cal = cal / num;
    }
    $calculate.textContent = `${cal} ${opr} `;
    $view.textContent = cal;
    newNum = ''; // 새로운 숫자 변수를 빈값으로 만듬
  }

  if (opr === 'x') {
    if (cal === '') {
      cal = num;
    } else if (newNum === '') {
      cal = cal;
    } else {
      cal = cal * num;
    }
    $calculate.textContent = `${cal} ${opr} `;
    $view.textContent = cal;
    newNum = ''; // 새로운 숫자 변수를 빈값으로 만듬
  }

  if (opr === '+/-') {
    if (newNum === '') {
      cal = cal * -1;
    } else {
      cal = num * -1;
    }
    $calculate.textContent = cal;
    $view.textContent = cal;
    newNum = ''; // 새로운 숫자 변수를 빈값으로 만듬
  }

  if (opr === 'UP') {
    if (newNum === '') {
      cal = Math.ceil(Number(cal));
    } else {
      cal = Math.ceil(Number(num));
    }
    $calculate.textContent = `${cal} ${opr} `;
    $view.textContent = cal;
    newNum = ''; // 새로운 숫자 변수를 빈값으로 만듬
  }

  if (opr === 'n2') {
    if (newNum === '') {
      cal = cal * cal;
    } else {
      cal = num;
      cal = cal * cal;
    }
    $calculate.textContent = `${cal} ${opr} `;
    $view.textContent = cal;
    newNum = ''; // 새로운 숫자 변수를 빈값으로 만듬
  }

  if (opr === 'c') {
    num = '';
    cal = '';
    opr = '';
    $view.textContent = cal;
    $calculate.textContent = '';
    newNum = ''; // 새로운 숫자 변수를 빈값으로 만듬
  }
}

$result.addEventListener('click', function () {
  onCalculator();
});

$calBtns.forEach(function (calBtn) {
  calBtn.addEventListener('click', (event) => {
    opr = event.target.textContent;
    onCalculator();
  });
});

$buttons.forEach(function (button) {
  button.addEventListener('click', (event) => {
    // 숫자를 눌러서 입력
    newNum += event.target.textContent; // 누른 숫자를 변수에 저장
    if (newNum[0] === '0') {
      newNum = event.target.textContent;
    }
    $view.textContent = newNum; // 변수에 저장한 숫자를 계산 화면에 보여줌
  });
});

// Mode
const $calculator = document.querySelector('.calculator');
const $basic = document.querySelector('.basic');
const $dark = document.querySelector('.dark');
$basic.addEventListener('click', function () {
  $calculator.classList.remove('active');
});
$dark.addEventListener('click', function () {
  $calculator.classList.add('active');
});
