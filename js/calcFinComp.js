//INICIALIZAÇÃO DAS VARIÁVEIS
const amountComp = document.getElementById('amountComp');
const amountCompResult = document.getElementById('amountCompResult');
const amountFeesResult = document.getElementById('amountFeesResult');
const btnCalculateCompAmount = document.getElementById('btnCalculateCompAmount');
const btnCalculateCompCapital = document.getElementById('btnCalculateCompCapital');
const btnCompAmount = document.getElementById('btnCompAmount');
const btnCompCapital = document.getElementById('btnCompCapital');
const btnJComp = document.getElementById('btnJComp');
const capitalCompResult = document.getElementById('capitalCompResult');
const compAmountCapital = document.getElementById('compAmountCapital');
const compAmountModal = document.getElementById('compAmountModal');
const compCapitalModal = document.getElementById('compCapitalModal');
const compFeesAmountResult = document.getElementById('compFeesAmountResult');
const menuButtonsComp = document.getElementById('menuButtonsComp');
const btnCloseMenuComp = document.getElementById('btnCloseMenuComp');


//Acessa o menu de opções de juros compostos
btnJComp.onclick = ()=>{
     menuButtonsComp.classList.remove('d-none');
     menu.classList.add('d-none');
}

//Acessa o modal de montante composto
btnCompAmount.onclick = ()=>{
     compAmountModal.classList.remove('d-none');
     menuButtonsComp.classList.add('d-none');
}

//Calcula o montante composto
btnCalculateCompAmount.onclick = ()=>{
     var compCapitalAmount = parseFloat(document.getElementById('compCapitalAmount').value.replace('.',','));
     var compRateAmount = parseFloat(document.getElementById('compRateAmount').value.replace('.',','));
     var compTimeAmount = parseFloat(document.getElementById('compTimeAmount').value.replace('.',','));
     amountComp.value = (compCapitalAmount * (1 + (compRateAmount/100))**(compTimeAmount)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
     amountCompResult.classList.remove('d-none');
     amountComp.classList.remove('d-none');
     compFees.classList.remove('d-none');
}

//Acessa o menu de juros compostos
btnCompCapital.onclick = ()=>{
     menuButtonsComp.classList.add('d-none');
     compCapitalModal.classList.remove('d-none');
}

//Calcula o capital composto
btnCalculateCompCapital.addEventListener('click', ()=>{
     let compAmountCapital = parseFloat(document.getElementById('compAmountCapital').value);
     let compRateCapital = parseFloat(document.getElementById('compRateCapital').value);
     let compTimeCapital = parseFloat(document.getElementById('compTimeCapital').value);
     capitalComp.value = ((compAmountCapital)/((1 + compRateCapital/100))**(compTimeCapital)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
     capitalCompResult.classList.remove('d-none');
     capitalComp.classList.remove('d-none');
})

//Volta ao menu de opções compostas
function backCompMenu(){
     menuButtonsComp.classList.add('d-none');
     compAmountModal.classList.add('d-none');
     compCapitalModal.classList.add('d-none');
     menu.classList.remove('d-none');
}


