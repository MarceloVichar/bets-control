class Bet {
    constructor() {
        this.id = 1
        this.betArray = []
    }
    save() {
        let bet = this.readData()
        if (this.validate(bet)) {
            document.getElementById('add').setAttribute('for', 'my-modal')
            this.add(bet)
        }
        this.listBets()
        this.clear()
    }

    add(bet) {
        this.betArray.push(bet)
        this.id++
    }

    readData() {
        let bet = {}

        bet.id = this.id
        bet.event = document.getElementById('event').value
        bet.value = document.getElementById('value').value
        bet.ammount = document.getElementById('ammount').value;
        
        (function (x, y) {
            bet.isPositive = x > y
        })(bet.value, bet.ammount)

        return bet
    }

    listBets(){
        let tbody = document.querySelector('#tbody')
        tbody.innerText = ''

        for(let i = 0; i < this.betArray.length; i++) {
            console.log(this.betArray[i]);
            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_event = tr.insertCell()
            let td_value = tr.insertCell()
            let td_ammount = tr.insertCell()
            let td_result = tr.insertCell()
            let td_actions = tr.insertCell()

            td_id.innerText = this.betArray[i].id
            td_event.innerText = this.betArray[i].event
            td_value.innerText = `R$ ${this.betArray[i].value}`
            td_result.innerText = this.betArray[i].isPositive ? 'Lucro' : 'Prejuízo'
            td_ammount.innerText = `R$ ${this.betArray[i].ammount}`
            let remove = document.createElement('span')
            remove.innerText = 'X'
            remove.style.color = 'red'
            remove.setAttribute('onclick', 'bet.remove('+ this.betArray[i].id +')')
            
            td_actions.appendChild(remove)
        }
    }

    validate(bet) {
        let msg = ''
        if (bet.event === '') {
            msg += `Informe o evento \n`
        }
        if (bet.value === '') {
            msg += `Informe o valor \n`
        }
        if (bet.ammount === '') {
            msg += `Informe o retorno obtido \n`
        }

        if(msg !== '') {
            alert(msg)
            return false
        }
        return true
    }

    clear = () => {
        document.getElementById('event').value = ''
        document.getElementById('value').value = ''
        document.getElementById('ammount').value = ''
    }

    remove = (id) => {
        if (confirm('Deseja remover essa entrada?')) {
            let tbody = document.querySelector('#tbody')
            for(let i = 0; i < this.betArray.length; i++) {
                if (this.betArray[i].id === id) {
                    this.betArray.splice(i, 1)
                    tbody.deleteRow(i)
                }
            }
        }
    }
}

let bet = new Bet

let showButtonModal = function () {
    setTimeout(() => {
        
        let button = document.getElementById('modalButton')
        button.classList.remove('hidden')
    }, 2000)
}

showButtonModal()

const myInterval = setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("time").innerHTML = date.toLocaleTimeString();
}

(function () {
    let name = prompt("Qual seu nome?")
    document.getElementById('name').innerHTML = `Aqui estão seus lançamentos, ${name || ''}`
})()


function onClickBalanceLink() {
    alert('Balanços estarão disponíveis em breve.')
}
