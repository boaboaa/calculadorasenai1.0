
const display = document.getElementById("display");
var numeroNovo = true;
var operador;
var numeroAnterior;

function apertouTecla(event){
    console.log(event)
    switch(event.key){
        case "1":
        case "2":
        case "3":  
        case "4":  
        case "5":  
        case "6":  
        case "7":  
        case "8":  
        case "9":  
        case "0":  
            inserirNumero(event.key);
            break;
        case "Delete":
            backspace();
            break;
        case "-":
        case "+":
        case "*":
        case "/":    
            selecionarOperacao();
            calcular(event.key);
            break;
        case "=":
            equals();
            break;
        case ".":
        case ",":
            decimals();
            break;
    };
};

function inserirNumero(numero){
    attdisplay(numero);
};

function attdisplay(numero){
    if(numeroNovo == true){
        display.value = numero;
        numeroNovo = false;
    }else{
        display.value += numero;
    };


};


function backspace(){
    display.value = display.value.slice(0, -1)
};

function selecionarOperacao(operacaoSelecionada){
    if(numeroNovo == false){
        calcular();
        numeroNovo = true;
        operador = operacaoSelecionada;
        numeroAnterior = Number(display.value);
    };

};

function operacaoPendente(){
    return operador !== undefined;
};

function calcular(){
    if(operacaoPendente() == true){
        var numeroAtual = Number(display.value);
        numeroNovo = true;

        if(operador == "+"){
            attdisplay(numeroAnterior + numeroAtual);
        }else if(operador == "-"){
            attdisplay(numeroAnterior - numeroAtual);
        }else if(operador == "/"){
            attdisplay(numeroAnterior / numeroAtual);
        }else if(operador == "*"){
            attdisplay(numeroAnterior * numeroAtual);
        }
    };
};

function decimals(){
    if(display.value.indexOf(".") == -1){
        if(display.value.length > 0){
            attdisplay(".");
        }else{
            attdisplay("0.");
        };
    };
};

function equals(){
    calcular();
    operador = undefined;
    return display.value;
};

function limpar(){
    numeroNovo = true;
    numeroAnterior = undefined;
    operador = undefined;
    display.value = 0;
};