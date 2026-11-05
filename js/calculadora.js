function sumar (){

    let varn1= parseInt(document.getElementById("num1").value);
    let varn2= parseInt(document.getElementById("num2").value);
     document.getElementById("resultado1").value = `${varn1 + varn2}`;

}

function restar () {
    
    let varn1= parseInt(document.getElementById("num1").value);
    let varn2= parseInt(document.getElementById("num2").value);
    document.getElementById("resultado1").value = `${varn1 - varn2}`;
}

function multi() {

    let varn1= parseInt(document.getElementById("num1").value);
    let varn2= parseInt(document.getElementById("num2").value);
    document.getElementById("resultado1").value = `${varn1 * varn2}`;
}

function divi() {
   
    let varn1= parseInt(document.getElementById("num1").value);
    let varn2= parseInt(document.getElementById("num2").value);
    document.getElementById("resultado1").value = `${varn1 / varn2}`;
}