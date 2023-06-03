//variables con js var, let, const var nombre nombre=39 nombre="luis"
var v1=0,v2=0,res, resul, texto=''

function captura1(){
    v1=document.getElementById('v1').value
    v1=Number.parseInt(v1)
    if(isNaN(v1))
        v1=0
}
function captura2(){
    v2=document.getElementById('v2').value
    v2=Number.parseInt(v2)
    if(isNaN(v2))
        v2=0
    resul=document.getElementById('resultado');
}
function sum(){
    res=v1+v2
    texto="El resultado de la suma es: "+res
    resul.textContent=texto
}
function resta(){
    res=v1-v2;
    texto="El resultado de la resta es:"+ res
    resul.textContent=texto 
}
function multiplicacion(){
    res=v1*v2;
    texto="El resultado de la multiplicación es:"+ res
    resul.textContent=texto 
}
function division(){
    if(v2!=0){
        res=v1/v2;
        texto="El resultado de la división es:"+ res
    }
    else      
        texto="No se puede dividir entre 0"
    resul.textContent=texto 
}