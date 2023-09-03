function agregar(valor) {
    document.getElementById('pantalla').value += valor // recibe el elemento del html indicado
} // obtengo el elemento con getelementbyid y el .value tiene que ver con que como es un input este guardara un valor entonces ese ese valor el que queremos captuar
// una vez capturado lo concatenamos a nuevo valor agregaro a pantalla si se agregan mas.

function borrar() {
    document.getElementById('pantalla').value = '' // una vez obtenemos el elemento de presionar C la pantalla queda vacia
}

function calcular() {
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla) // aca se hace la operacion eval() evalua lo que hay en pantalla matematicamente
    document.getElementById('pantalla').value = resultado
}
