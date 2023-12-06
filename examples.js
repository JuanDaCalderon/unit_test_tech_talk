//Correcta
test('Cálculo de cuota de préstamo con tasa de interés cero', () => {
    const montoPrestamo = 15000;
    const tasaInteres = 0;
    const plazoMeses = 6;

    const cuota = calcularCuotaPrestamo(montoPrestamo, tasaInteres, plazoMeses);

    expect(cuota).toBe(2500);
});

// malas
test('Prueba con asunciones mágicas', () => {
    const resultado = sumar(2, 3);

    expect(resultado).toBeGreaterThan(0);
});

test('Prueba con uso inadecuado de variables', () => {
    const a = 2, b = 3, exponente = 2;

    const suma = sumar(a, b);
    const potenciaResult = potencia(suma, exponente);
    const raizCuadradaResult = raizCuadrada(potenciaResult);

    expect(raizCuadradaResult).toBe(5);
});

test('Prueba de multiplicación sin configuración clara', () => {
    const resultado = multiplicar(2, 3);

    expect(resultado).toBe(6);
});
/* ------------------------------------------------------------ */

// Correctas para kahoot (malas pruebas unitarias segun FIRST)

test('Prueba lenta de operaciones de base de datos', async () => {
    const usuario = { id: 1, nombre: 'John' };

    const resultado = await realizarOperacionBaseDeDatos(usuario);

    expect(resultado).toEqual({ status: 'ok' });
});

test('Prueba con dependencia de estado externo', () => {
    const estadoInicial = obtenerEstadoInicial();
    const resultadoEsperado = estadoInicial + 5;

    const resultado = realizarOperacionConEstadoExterno(5);

    expect(resultado).toBe(resultadoEsperado);
});

test('Prueba no repetible con tiempo actual', () => {
    const tiempoActual = new Date();
    const resultadoEsperado = realizarOperacionConTiempoActual(tiempoActual);

    const resultado = realizarOperacionConTiempoActual(tiempoActual);

    expect(resultado).toBe(resultadoEsperado);
});

// Malas para kahoot (buenas pruebas unitarias segun FIRST)
test('Suma de dos números', () => {
    const a = 2;
    const b = 3;

    const resultado = sumar(a, b);

    expect(resultado).toBe(5);
});

test('Cuadrado de un número', () => {
    const numero = 4;

    const resultado = calcularCuadrado(numero);

    expect(resultado).toBe(16);
});

test('Filtrar números pares', () => {
    const lista = [1, 2, 3, 4, 5, 6];

    const resultado = filtrarNumerosPares(lista);

    expect(resultado).toEqual([2, 4, 6]);
});

/* ---------------------------------------------------------------------------------------- */
// malas (funciones puras bien implementadas)

function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Ejemplo de uso
const resultado = fibonacci(5); // El resultado siempre será 5


function ordenarArray(arr) {
    return [...arr].sort((a, b) => a - b);
}

// Ejemplo de uso
const resultadoOrdenamiento = ordenarArray([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);
// El resultado siempre será [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

function sumaArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// Ejemplo de uso
const resultadoSuma = sumaArray([1, 2, 3, 4, 5]); // El resultado siempre será 15

// Correctas (Funciones impuras)

let factorGlobal = 2;

function multiplicarPorFactor(num) {
    return num * factorGlobal;
}

// Ejemplo de uso
factorGlobal = 3;
const resultadoMultiplicador = multiplicarPorFactor(4); // Resultado será 12, pero depende de la variable global factorGlobal

let estadoExterno = { contador: 0 };

function incrementarContador() {
    estadoExterno.contador++;
    return estadoExterno.contador;
}

// Ejemplo de uso
const resultado1 = incrementarContador(); // Resultado1 será 1
const resultado2 = incrementarContador(); // Resultado2 será 2

function obtenerNumeroAleatorio() {
    return Math.random();
}

// Ejemplo de uso
const resultadoAleatorio = obtenerNumeroAleatorio();
// La función devuelve un valor diferente cada vez que se llama, incluso con los mismos parámetros, por lo que no es predecible.


// PRUEBAS QUE FALLAN DEBIDO A FUNCIONES IMPURAS
function obtenerNumeroAleatorio() {
    return Math.random();
}
test('Prueba de obtenerNumeroAleatorio', () => {
    // Arrange
    const valorEsperado = 0.5; // Esperamos que el número aleatorio sea 0.5

    // Act
    const resultado = obtenerNumeroAleatorio();

    // Assert
    expect(resultado).toBe(valorEsperado);
});

// Simulamos una función que realiza una solicitud de red, por ejemplo, a una API
async function obtenerDatosDesdeAPI() {
    const respuesta = await realizarPeticionHTTP('https://api.example.com/data');
    return respuesta.data;
}
test('Prueba de obtenerDatosDesdeAPI', async () => {
    // Arrange
    const valorEsperado = { mensaje: 'Hola, mundo' };

    // Act
    const resultado = await obtenerDatosDesdeAPI();

    // Assert
    expect(resultado).toEqual(valorEsperado);
});


/* TDD ---------------------------------------------------------- */


test('Verificar si una palabra es un palíndromo', () => { // ROJO
    const palabraPalindromo = 'reconocer';
    const resultado = esPalindromo(palabraPalindromo);
    expect(resultado).toBe(true);
});

function esPalindromo(palabra) { // VERDE
    return true;
}

test('Verificar si una palabra no es un palíndromo', () => {
    expect(esPalindromo('programacion')).toBe(false);
}); // ROJO

function esPalindromo(palabra) { // AZUL
    const palabraInvertida = palabra.split('').reverse().join('');
    return palabra === palabraInvertida;
}

test('Verificar si una palabra es un palíndromo - Caso 1', () => {
    expect(esPalindromo('oso')).toBe(true);
}); // VERDE

