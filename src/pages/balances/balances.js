import myTimer from '../../../utils/timer';

'use strict';

const pageName = $('#pageName');

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

(function () {
  const bets = JSON.parse(localStorage.getItem('totalAmount') || '[]');
  let amount = 0;
  let returns = 0;
  let balances = 0;
  bets.forEach((bet) => {
    amount += parseFloat(bet._amount);
    returns += parseFloat(bet._returns);
    bet._isPositive
      ? balances += (parseFloat(bet._returns) - parseFloat(bet._amount))
      : balances -= (parseFloat(bet._amount) - parseFloat(bet._returns));
  });
  $('#amountBox div').text(formatter.format(amount));
  $('#returnsBox div').text(formatter.format(returns));
  $('#balanceBox div').text(formatter.format(balances));
  alertify.success('Informações carregadas');
}());

pageName.mouseleave(onMouseLeaveinTitle);

$('.box p').addClass('text-secondary');
$('#description').children().addClass('font-bold text-lg');

const name = localStorage.getItem('name');
$('#name').text(`Seja bem-vindo, ${name || ''}`);

const myInterval = setInterval(myTimer, 1000);

function onMouseLeaveinTitle() {
  pageName.removeClass('text-success');
}

$('.box').fadeOut('2000').fadeIn('2000');

$('#amountBox')
  .hover(function () {
    $(this)
      .toggleClass('bg-warning scale-105 duration-200')
      .stop(true, true);
  });

$('#returnsBox')
  .hover(function () {
    $(this)
      .toggleClass('bg-success scale-105 duration-200')
      .stop(true, true);
  });

$('#balanceBox')
  .hover(function () {
    $(this)
      .toggleClass('bg-white text-black scale-105 duration-200')
      .stop(true, true);
  });
