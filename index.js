let operacion = prompt("Selecciona el número de la operación que desea realizar: 1-sumar 2-Restar 3-Multiplicar 4-Dividir");
var primerNumero = prompt("Escribe la primera cifra");
var segundoNumero = prompt("Escribe la segunda cifra");//El usuario ingresa los valores que desea que se realice en la operacion//


function suma (primerNumero, segundoNumero) { // si el usuario ingresa el signo + suma entonces se ejecuta la funcion de suma//
    var primerNumero = primerNumero.Number();
    var segundoNumero = segundoNumero.Number();
    return (primerNumero + segundoNumero);
}

function resta (primerNumero, segundoNumero) { //si el usuario ingresa el signo - menos, entonces se ejecuta la funcion de resta//
    return (primerNumero - segundoNumero);
}
function multiplicar (num1,num2) { // si el usuario ingresa el signo * multiplo, entonces se ejecuta la funcion de multiplicar//
    return (primerNumero * segundoNumero);
}
function dividir (primerNumero,segundoNumero) { // si el usuario ingresa el signo / divisor, entonces se ejecuta la funcion de dividir
    if(operacion = 4)
        if(segundoNumero ===0){
            return("Error, no se puede dividir entre cero")
    } else{
        return (num1 / num2);
    }
}
switch(operacion){
        case "1":
        resultado = suma();
        alert("El resultado es: " + resultado);
        break;
    
    case "2":
        resultado = resta();
        alert("El resultado es: " + resultado);
        break;
    case "3":
        resultado = multiplicar();
        alert("El resultado es: " + resultado);
        break;
    case "4":
        resultado = dividir();
        alert("El resultado es: " + resultado);
        break;
    default:
        alert("verifica la informacion");
        break;
}