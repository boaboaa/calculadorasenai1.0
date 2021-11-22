function limpar(){
    document.getElementById("xA").value = "";
    document.getElementById("yA").value = "";
    document.getElementById("xB").value = "";
    document.getElementById("yB").value = "";
    document.getElementById("display").value = "";
}

function calcularD(){
    var xA = document.getElementById("xA").value;
    var yA = document.getElementById("yA").value;
    var xB = document.getElementById("xB").value;
    var yB = document.getElementById("yB").value;
    var primeiraParte = Math.pow((xB - xA), 2);
    var segundaParte = Math.pow((yB - yA), 2);
    var soma = primeiraParte + segundaParte;
    var resultado = Math.sqrt(soma);
    document.getElementById("display").value = resultado.toFixed(2);
}

function calcularPM(){
    var xA = document.getElementById("xA").value;
    var yA = document.getElementById("yA").value;
    var xB = document.getElementById("xB").value;
    var yB = document.getElementById("yB").value;
    var primeiraParte = (xA + xB) / 2;
    var segundaParte = (yA + yB) / 2;
    document.getElementById("display").value = `PM = (${primeiraParte},${segundaParte})`;
}

function calcularER(){
    var xA = document.getElementById("xA").value;
    var yA = document.getElementById("yA").value;
    var xB = document.getElementById("xB").value;
    var yB = document.getElementById("yB").value;
    var matriz = [
        [xA, xB, 1, xA], 
        [yA, yB, 1, yA]
    ]
    var n1 = ((-1 * matriz[0][1]) * matriz[1][0]);
    var x1 = ((-1 * matriz[0][2]) * matriz[1][1]);
    var y1 = ((-1 * matriz[0][3]) * matriz[1][2]);
    var n2 = matriz[0][0] * matriz[1][1];
    var x2 = matriz[0][1] * matriz[1][2];
    var y2 = matriz[0][2] * matriz[1][3];
    var somaN = n1 + n2;
    var somaX = x1 + x2;
    var somaY = y1 + y2;
    somaN = (somaN > 0 ? `+${somaN}`: somaN);
    somaX = (somaX > 0 ? `+${somaX}`: somaX);
    somaY = (somaY > 0 ? `+${somaY}`: somaY);
    document.getElementById("display").value = `${somaX}x ${somaY}y ${somaN} = 0`;
}
function calcularCF(){
    var xA = document.getElementById("xA").value;
    var yA = document.getElementById("yA").value;
    var xB = document.getElementById("xB").value;
    var yB = document.getElementById("yB").value;
    var resultado = (yA - yB) / (xA - xB);
    document.getElementById("display").value = `CF = ( ${resultado} )`;
}