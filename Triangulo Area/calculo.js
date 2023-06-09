var v1=0,v2=0,v3=0,s, area, res, resul, texto=''

function captura1(){
    v1=document.getElementById('v1').value
    v1=Number.parseInt(v1)
    if(isNaN(v1)) //comprueba que el valor sea un valor vallido 
        v1=0
}
function captura2(){
    v2=document.getElementById('v2').value
    v2=Number.parseInt(v2)
    if(isNaN(v2))
        v2=0
}
function captura3(){
    v3=document.getElementById('v3').value
    v3=Number.parseInt(v3)
    if(isNaN(v3))
        v3=0
    resul=document.getElementById('resultado');
}

function area(){
    s = (v1 + v2 + v3) / 2;
    res = Math.sqrt(s * (s - v1) * (s - v2) * (s - v3));
    resul.innerHTML= "El resultado de la operacion es:" + res
}
function tipoTriangulo(){
    if (v1 === v2 && v2 === v3) {
        res= "Equilátero";
    } else if (v1 === v2 || v1 === v3 || v2 === v3) {
        res= "Isósceles";
    } else {
        res= "Escaleno";
    }
    resul.innerHTML= "El tipo de triangulo es: " + res
}

