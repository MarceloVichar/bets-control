import axios from 'axios';

(async function () {
  await axios.get('https://api.adviceslip.com/advice').then((res) => {
    document.getElementById('advice').innerText = res.data.slip.advice;
  }).catch(() => {
    document.getElementById('advice').innerText = '';
  });
}());
function greeting(name) {
  alert(`Olá, ${name}`);
}

function processUserInput(callback) {
  (function () {
    const name = prompt('Qual seu nome?');
    localStorage.setItem('name', name);
    document.getElementById('name').innerHTML = `Seja bem-vindo, ${name || ''}`;
    callback(name);
  }());
}

processUserInput(greeting);
