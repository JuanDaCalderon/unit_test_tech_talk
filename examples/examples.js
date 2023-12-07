//Correcta
test("Cálculo de cuota de préstamo con tasa de interés cero", () => {
  const montoPrestamo = 15000;
  const tasaInteres = 0;
  const plazoMeses = 6;

  const cuota = calcularCuotaPrestamo(montoPrestamo, tasaInteres, plazoMeses);

  expect(cuota).toBe(2500);
});

// malas
test("Try magical assumptions", () => {
  const result = add(2, 3);

  expect(result).toBeGreaterThan(0);
});

test("test with a lot of variables", () => {
  const a = 2,
    b = 3,
    exp = 2;

  const result = add(a, b);
  const powResult = pow(result, exp);
  const sqrResult = sqr(powResult);

  expect(sqrResult).toBe(5);
});

test("Multiply", () => {
  const result = multiply(2, 3);

  expect(result).toBe(6);
});
/* ------------------------------------------------------------ */

// Correctas para kahoot (malas pruebas unitarias segun FIRST)

test("Create a user", async () => {
  const user = { id: 1, name: "John" };
  const result = await createTheUserInDataBase(user);
  expect(result).not.toBe(null);
});

test("Prueba con dependencia de estado externo", () => {
  const estadoInicial = obtenerEstadoInicial();
  const resultadoEsperado = estadoInicial + 5;

  const resultado = realizarOperacionConEstadoExterno(5);

  expect(resultado).toBe(resultadoEsperado);
});

test("Non-repeatable test with current time", () => {
  const currentTime = new Date();

  const result = getDifferenceTimeWith(currentTime);

  expect(result).toBe("GMT+1");
});

// Malas para kahoot (buenas pruebas unitarias segun FIRST)
test("Suma de dos números", () => {
  const a = 2;
  const b = 3;

  const resultado = sumar(a, b);

  expect(resultado).toBe(5);
});

test("Cuadrado de un número", () => {
  const numero = 4;

  const resultado = calcularCuadrado(numero);

  expect(resultado).toBe(16);
});

test("Filtrar números pares", () => {
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

function sortArray(arr) {
  return [...arr].sort((a, b) => a - b);
}
const result = sortArray([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);

function sumaArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Ejemplo de uso
const resultadoSuma = sumaArray([1, 2, 3, 4, 5]); // El resultado siempre será 15

// Correctas (Funciones impuras)

let factor = 2;
function multiplyByFactor(num) {
  return num * factorGlobal;
}
factor = 3;
const resultadoMultiplicador = multiplyByFactor(4);

let clock = { counter: 0 };
function getCounter() {
  clock.counter++;
  return clock.counter;
}
const count1 = getCounter();
const count2 = getCounter();

function obtenerNumeroAleatorio() {
  return Math.random();
}

// Ejemplo de uso
const resultadoAleatorio = obtenerNumeroAleatorio();
// La función devuelve un valor diferente cada vez que se llama, incluso con los mismos parámetros, por lo que no es predecible.

// PRUEBAS QUE FALLAN DEBIDO A FUNCIONES IMPURAS
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
test("Get random number function is not predictable", () => {
  // Arrange
  const expectingValue = 2; // We expect that the result will be 2
  // Act
  const result = getRandomNumber(6);
  // Assert
  expect(result).toBe(expectingValue);
});

// Simulamos una función que realiza una solicitud de red, por ejemplo, a una API
async function obtenertetosaesdeAPI() {
  const respuesta = await realizarPeticionHTTP("https://api.example.com/data");
  return respuesta.data;
}
test("Prueba de obtenerDatosDesdeAPI", async () => {
  // Arrange
  const valorEsperado = { mensaje: "Hola, mundo" };

  // Act
  const resultado = await obtenerDatosDesdeAPI();

  // Assert
  expect(resultado).toEqual(valorEsperado);
});

/* TDD ---------------------------------------------------------- */

test("Check if a word is a palindrome", () => {
  // RED
  const palindromeWord = "reconocer";
  const result = isPalindrome(palindromeWord);
  expect(result).toBe(true); // Test fails
});

function isPalindrome(word) {
  // GREEN
  return true; // Test passes
}

test("Check if a word is not a palindrome", () => {
  // This test create a triangulation
  expect(isPalindrome("programacion")).toBe(false); // Test fails
}); // RED

function isPalindrome(word) {
  // BLUE
  const reverseWord = word.split("").reverse().join("");
  return word === reverseWord; // Second test passes
}

test("Check if a word is a palindrome with an other word", () => {
  const palindromeWord = "oso";
  const result = isPalindrome(palindromeWord);
  expect(result).toBe(true); // Test passes
}); // GREEN

/* ---------------- TDD ------------------ */

describe("Calculator", () => {
  // ...
});

describe("Calculator App", () => {
  it("should Divide two numbers correctly", () => {
    // Arrange
    const calculator = new Calculator();
    const num1 = 52;
    const num2 = 6;
    // Act
    const result = calculator.divide(num1, num2);
    // Assert
    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThan(10);
  });
});

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it("should add two numbers correctly", () => {
    // ...
  });
});

describe("Calculator", () => {
  it("should add two numbers correctly", () => {
    // Arrange
    const calculator = new Calculator();
    const num1 = 5;
    const num2 = 10;

    // Act
    const result = calculator.add(num1, num2);

    // Assert
    expect(result).toBe(15);
  });
});

it("should quickly add a product to the shopping cart", () => {
  const shoppingCart = new ShoppingCart();
  shoppingCart.addProduct("Laptop", 999.99);
  const productCount = shoppingCart.getProductCount();
  expect(productCount).toBe(1);
});

it("should not affect other shopping carts", () => {
  const cart1 = new ShoppingCart();
  const cart2 = new ShoppingCart();

  // First test
  cart1.addProduct("Phone", 499.99);
  const productCount1 = cart1.getProductCount();
  expect(productCount1).toBe(1);

  // Second test (independent of the first test)
  cart2.addProduct("Tablet", 299.99);
  const productCount2 = cart2.getProductCount();
  expect(productCount2).toBe(1);
});

it("should correctly reflect the paid status after payment", () => {
  const shoppingCart = new ShoppingCart();
  shoppingCart.addProduct("Headphones", 129.99);
  shoppingCart.pay();

  // Assert
  expect(shoppingCart.isPaid()).toBe(true);
});

it("should be written before implementing new features", () => {
  const calculator = new Calculator();
  /* multiply function is not implemented yet
    and it could be done by TDD */
  const result = calculator.multiply(5, 5);
  expect(result).toBe(25);
});

it("should generate unique IDs consistently", () => {
  const id1 = generateUniqueId();
  const id2 = generateUniqueId();
  expect(id1).not.toBe(id2);
});

it("should return true if the event is happening right now", () => {
  const eventStartTime = new Date();
  const eventEndTime = new Date(eventStartTime.getTime() + 3600000); // One Hour event
  const result = isEventInProgress(eventStartTime, eventEndTime);
  expect(result).toBe(true);
});

it("should create a new record in the database", () => {
  const newRecord = { id: "999", value: "New Value" };
  createRecordInDatabase(newRecord);
  const retrievedRecord = getRecordFromDatabase("999");
  expect(retrievedRecord.value).toBe("New Value");
});
