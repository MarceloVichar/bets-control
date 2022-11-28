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
