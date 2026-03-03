var operador1 = '';
var operador2 = '';
var opr = null;
var visao = document.getElementById('visao');


// Impede digitação direta no visor
visao.addEventListener("keydown", function(e){
    e.preventDefault();
});

function plot(num){
    // Impede dois pontos no mesmo número
    if(num === '.'){
        if(visao.value.includes('.')){
            return;
        }
    }
    visao.value += num;
}

function operate(op){
    if(visao.value === '') return;

    operador1 = visao.value;
    opr = op;
    visao.value = '';
}

function calc(){
    if(visao.value === '' || opr === null) return;

    operador2 = visao.value;

    var conta = operador1 + opr + operador2;
    var result = eval(conta);

    visao.value = result;

    operador1 = '';
    operador2 = '';
    opr = null;
}

function delall(){
    operador1 = '';
    operador2 = '';
    opr = null;
    visao.value = '';
}


// ✅ FUNCIONAR PELO TECLADO
document.addEventListener("keydown", function(e){

    // Números
    if(!isNaN(e.key)){
        plot(e.key);
    }

    // Operadores
    if(e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/'){
        operate(e.key);
    }

    // Ponto
    if(e.key === '.'){
        plot('.');
    }

    // Enter para calcular
    if(e.key === 'Enter'){
        calc();
    }

    // Backspace limpa tudo
    if(e.key === 'Backspace'){
        delall();
    }
});