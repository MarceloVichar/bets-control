import myTimer from '../../../utils/timer';

'use strict';

document.getElementById('pageName').addEventListener('mouseleave', onMouseLeaveinTitle);

const name = localStorage.getItem('name');
document.getElementById('name').innerHTML = `Seja bem-vindo, ${name || ''}`;

const myInterval = setInterval(myTimer, 1000);

const title = document.getElementById('pageName');

function onMouseLeaveinTitle() {
  title.classList.remove('text-success');
}
