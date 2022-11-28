import myTimer from '../utils/timer';
import Bet from './models/bet';

'use strict';

document.getElementById('pageName').addEventListener('mouseleave', onMouseLeaveinTitle);
document.getElementById('add').addEventListener('click', save);
document.getElementById('clear').addEventListener('click', clear);
document.getElementById('close').addEventListener('click', clear);
document.getElementById('table').addEventListener('load', loadTable);

const bets = JSON.parse(localStorage.getItem('totalAmount') || '[]');
listBets(bets);
function save() {
  const event = document.getElementById('event').value;
  const amount = document.getElementById('amount').value;
  const returns = document.getElementById('returns').value;
  if (!validate({ event, amount, returns })) return;
  document.getElementById('add').setAttribute('for', 'my-modal');
  add(event, amount, returns);
  clear();
}

function clear() {
  document.getElementById('event').value = '';
  document.getElementById('amount').value = '';
  document.getElementById('returns').value = '';
}

function add(event, amount, returns) {
  const bet = new Bet(event, amount, returns);

  const totalAmount = JSON.parse(localStorage.getItem('totalAmount') || '[]');
  totalAmount.unshift(bet);
  localStorage.setItem('totalAmount', JSON.stringify(totalAmount));

  listBets(totalAmount);
}
function validate(currentBet) {
  let msg = '';
  if (currentBet.event === '') {
    msg += 'Informe o evento \n';
  }
  if (currentBet.amount === '') {
    msg += 'Informe o valor \n';
  }
  if (currentBet.returns === '') {
    msg += 'Informe o retorno obtido \n';
  }

  if (msg !== '') {
    alert(msg);
    return false;
  }
  return true;
}

function listBets(totalAmount) {
  const tbody = document.querySelector('#tbody');
  tbody.innerText = '';

  for (let i = 0; i < totalAmount.length; i += 1) {
    console.log(totalAmount[i]);
    const tr = tbody.insertRow();
    const tdEvent = tr.insertCell();
    const tdAmount = tr.insertCell();
    const tdReturns = tr.insertCell();
    const tdResults = tr.insertCell();

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    tdEvent.innerText = totalAmount[i]._name;
    tdAmount.innerText = formatter.format(parseFloat(totalAmount[i]._amount));
    tdReturns.innerText = formatter.format(parseFloat(totalAmount[i]._returns));
    tdResults.innerText = totalAmount[i]._isPositive ? 'Lucro' : 'Prejuízo';
  }
}

const showButtonModal = function () {
  setTimeout(() => {
    const button = document.getElementById('modalButton');
    button.classList.remove('hidden');
  }, 2000);
};

showButtonModal();

(function () {
  const namePage = document.getElementsByName('pageName')[0];
  namePage.textContent.length < 15
    ? namePage.textContent = namePage.textContent.toUpperCase()
    : namePage.textContent = namePage.textContent.toLowerCase();
}());

const myInterval = setInterval(myTimer, 1000);

function greeting(name) {
  alert(`Olá, ${name}`);
}

function processUserInput(callback) {
  (function () {
    const name = prompt('Qual seu nome?');
    document.getElementById('name').innerHTML = `Aqui estão seus lançamentos, ${name || ''}`;
    callback(name);
  }());
}

processUserInput(greeting);

function onClickBalanceLink() {
  alert('Balanços estarão disponíveis em breve.');
}

function loadTable() {
  document.getElementsByTagName('table')[0].classList.remove('hidden');
}

const title = document.getElementById('pageName');

function onMouseEnterinTitle() {
  title.classList.add('text-success');
}

function onMouseLeaveinTitle() {
  title.classList.remove('text-success');
}

const span = document.getElementById('spanInput');

function testCapsLock(event) {
  if (event.code === 'CapsLock') {
    const isCapsLockOff = event.getModifierState('CapsLock');
    if (isCapsLockOff) {
      span.innerText = 'Capslock desativado';
    } else {
      span.innerText = 'Capslock ativado';
    }
  }
}

document.addEventListener('keydown', testCapsLock);
