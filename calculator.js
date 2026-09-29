// === calculator.js — основной скрипт калькулятора ===

const calculator = document.getElementById('calculator');

// Экран
const display = document.createElement('input');
display.id = 'display';
display.readOnly = true;
display.value = '0';
calculator.appendChild(display);

// Кнопки
const buttonsBox = document.createElement('div');
buttonsBox.id = 'buttons';
calculator.appendChild(buttonsBox);

const buttons = [
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '0', '.', '=', '+',
  'C'
];

let expression = '';

function press(value) {
  if (value === 'C') {
    expression = '';
    display.value = '0';
  } else if (value === '=') {
    try {
      const result = Function('return ' + expression)();
      display.value = result;
      expression = String(result);
    } catch (e) {
      display.value = 'Ошибка';
      expression = '';
    }
  } else {
    expression += value;
    display.value = expression;
  }
}

buttons.forEach(function (label, index) {
  const btn = document.createElement('button');
  btn.textContent = label;
  btn.addEventListener('click', function () { press(label); });
  buttonsBox.appendChild(btn);
  if ((index + 1) % 4 === 0) buttonsBox.appendChild(document.createElement('br'));
});
