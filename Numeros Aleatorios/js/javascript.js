const numeroAleatorio=Math.floor(Math.random() * 100)+ 1;
let intentos = 0;

function adivinarNumero(){
    const numeroIngresado = parseInt(document.getElementById('numero').value);
    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100){
        document.getElementById('resultado').textContent='por favor ingresa un numero valido entre 1 y 100';
        return
    }
    intentos++;
    if (numeroIngresado === numeroAleatorio){
        document.getElementById('resultado').textContent = 'Felicitaciones Adivinaste el numero en '+(intentos) +' intentos';

    } else{
        const mensaje = numeroIngresado > numeroAleatorio ? 'menor' : 'mayor';
        document.getElementById('resultado').textContent = 'El numero que ingresaste es incorrecto. Intenta con un numero ' + mensaje;
    }
}