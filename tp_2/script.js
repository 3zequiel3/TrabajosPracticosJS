// 1️⃣ INVERTIR UN ARRAY (sin usar .reverse())
console.log("1️⃣ INVERTIR UN ARRAY");
console.log("---------------------");

function invertirArray(arr) {
    let arrayInvertido = [];
    // Recorrer el array desde el final hacia el inicio
    for (let i = arr.length - 1; i >= 0; i--) {
        arrayInvertido.push(arr[i]);
    }
    return arrayInvertido;
}

// Ejemplo de uso
let numeros = [1, 2, 3, 4];
let numerosInvertidos = invertirArray(numeros);
console.log(`Array original: [${numeros}]`);
console.log(`Array invertido: [${numerosInvertidos}]`);
console.log("");

// 2️⃣ PALÍNDROMO
console.log("2️⃣ VERIFICAR PALÍNDROMO");
console.log("------------------------");

function esPalindromo(texto) {
    // Convertir a minúsculas para comparación
    let textoLimpio = texto.toLowerCase();
    let longitud = textoLimpio.length;
    
    // Comparar caracteres desde los extremos hacia el centro
    for (let i = 0; i < longitud / 2; i++) {
        if (textoLimpio[i] !== textoLimpio[longitud - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Ejemplos de uso
let palabra1 = "reconocer";
let palabra2 = "javascript";
console.log(`"${palabra1}" es palíndromo: ${esPalindromo(palabra1)}`);
console.log(`"${palabra2}" es palíndromo: ${esPalindromo(palabra2)}`);
console.log("");

// 3️⃣ CONTAR VOCALES
console.log("3️⃣ CONTAR VOCALES");
console.log("------------------");

function contarVocales(texto) {
    let vocales = "aeiouAEIOU";
    let contador = 0;
    
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }
    return contador;
}

// Ejemplo de uso
let frase = "Javascript ES Genial";
let cantidadVocales = contarVocales(frase);
console.log(`Frase: "${frase}"`);
console.log(`Cantidad de vocales: ${cantidadVocales}`);
console.log("");

// 4️⃣ ROTACIÓN DE ARRAY
console.log("4️⃣ ROTACIÓN DE ARRAY");
console.log("---------------------");

function rotarDerecha(arr) {
    if (arr.length === 0) return arr;
    
    // Tomar el último elemento
    let ultimoElemento = arr[arr.length - 1];
    let arrayRotado = [ultimoElemento];
    
    // Agregar el resto de elementos (excepto el último)
    for (let i = 0; i < arr.length - 1; i++) {
        arrayRotado.push(arr[i]);
    }
    
    return arrayRotado;
}

// Ejemplo de uso
let arrayOriginal = [10, 20, 30, 40];
let arrayRotado = rotarDerecha(arrayOriginal);
console.log(`Array original: [${arrayOriginal}]`);
console.log(`Array rotado: [${arrayRotado}]`);
console.log("");

// 5️⃣ ORDENAR NÚMEROS (sin usar .sort())
console.log("5️⃣ ORDENAR NÚMEROS");
console.log("-------------------");

function ordenarBurbuja(arr) {
    let arrayOrdenado = [...arr]; // Crear copia del array
    let n = arrayOrdenado.length;
    
    // Algoritmo de ordenamiento burbuja
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arrayOrdenado[j] > arrayOrdenado[j + 1]) {
                // Intercambiar elementos
                let temp = arrayOrdenado[j];
                arrayOrdenado[j] = arrayOrdenado[j + 1];
                arrayOrdenado[j + 1] = temp;
            }
        }
    }
    
    return arrayOrdenado;
}

// Ejemplo de uso
let numerosDesordenados = [5, 2, 9, 1, 8, 3];
let numerosOrdenados = ordenarBurbuja(numerosDesordenados);
console.log(`Array desordenado: [${numerosDesordenados}]`);
console.log(`Array ordenado: [${numerosOrdenados}]`);
console.log("");

// 6️⃣ REEMPLAZO DE PALABRAS
console.log("6️⃣ REEMPLAZO DE PALABRAS");
console.log("-------------------------");

function reemplazarPalabra(texto, palabraVieja, palabraNueva) {
    let resultado = "";
    let palabras = texto.split(" ");
    
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] === palabraVieja) {
            palabras[i] = palabraNueva;
        }
    }
    
    return palabras.join(" ");
}

// Ejemplo de uso
let textoOriginal = "me gusta programar en Java";
let textoModificado = reemplazarPalabra(textoOriginal, "Java", "JavaScript");
console.log(`Texto original: "${textoOriginal}"`);
console.log(`Texto modificado: "${textoModificado}"`);
console.log("");

// 7️⃣ NÚMEROS ÚNICOS (sin usar Set)
console.log("7️⃣ NÚMEROS ÚNICOS");
console.log("------------------");

function numerosUnicos(arr) {
    let unicos = [];
    
    for (let i = 0; i < arr.length; i++) {
        let yaExiste = false;
        
        // Verificar si el elemento ya existe en el array de únicos
        for (let j = 0; j < unicos.length; j++) {
            if (arr[i] === unicos[j]) {
                yaExiste = true;
                break;
            }
        }
        
        // Si no existe, agregarlo
        if (!yaExiste) {
            unicos.push(arr[i]);
        }
    }
    
    return unicos;
}

// Ejemplo de uso
let numerosRepetidos = [1, 2, 2, 3, 4, 4, 5, 1, 3];
let soloUnicos = numerosUnicos(numerosRepetidos);
console.log(`Array con repetidos: [${numerosRepetidos}]`);
console.log(`Solo únicos: [${soloUnicos}]`);
console.log("");

// 8️⃣ INTERSECCIÓN DE ARRAYS
console.log("8️⃣ INTERSECCIÓN DE ARRAYS");
console.log("--------------------------");

function interseccionArrays(arr1, arr2) {
    let interseccion = [];
    
    for (let i = 0; i < arr1.length; i++) {
        // Verificar si el elemento de arr1 existe en arr2
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                // Verificar que no esté ya en la intersección
                let yaExiste = false;
                for (let k = 0; k < interseccion.length; k++) {
                    if (interseccion[k] === arr1[i]) {
                        yaExiste = true;
                        break;
                    }
                }
                if (!yaExiste) {
                    interseccion.push(arr1[i]);
                }
            }
        }
    }
    
    return interseccion;
}

// Ejemplo de uso
let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
let elementosComunes = interseccionArrays(array1, array2);
console.log(`Array 1: [${array1}]`);
console.log(`Array 2: [${array2}]`);
console.log(`Elementos comunes: [${elementosComunes}]`);
console.log("");

// 9️⃣ CONTAR PALABRAS
console.log("9️⃣ CONTAR PALABRAS");
console.log("-------------------");

function contarPalabras(texto) {
    let palabras = texto.toLowerCase().split(" ");
    let conteo = {};
    
    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        if (conteo[palabra]) {
            conteo[palabra]++;
        } else {
            conteo[palabra] = 1;
        }
    }
    
    return conteo;
}

// Ejemplo de uso
let textoEjemplo = "hola mundo hola javascript mundo";
let conteoPalabras = contarPalabras(textoEjemplo);
console.log(`Texto: "${textoEjemplo}"`);
console.log("Conteo de palabras:");
for (let palabra in conteoPalabras) {
    console.log(`  ${palabra}: ${conteoPalabras[palabra]}`);
}
console.log("");

// 🔟 MATRIZ TRANSPUESTA
console.log("🔟 MATRIZ TRANSPUESTA");
console.log("---------------------");

function matrizTranspuesta(matriz) {
    let filas = matriz.length;
    let columnas = matriz[0].length;
    let transpuesta = [];
    
    // Crear la matriz transpuesta
    for (let j = 0; j < columnas; j++) {
        transpuesta[j] = [];
        for (let i = 0; i < filas; i++) {
            transpuesta[j][i] = matriz[i][j];
        }
    }
    
    return transpuesta;
}

// Función auxiliar para mostrar matriz
function mostrarMatriz(matriz, nombre) {
    console.log(`${nombre}:`);
    for (let i = 0; i < matriz.length; i++) {
        console.log(`  [${matriz[i].join(", ")}]`);
    }
}

// Ejemplo de uso
let matrizOriginal = [
    [1, 2, 3],
    [4, 5, 6]
];

let matrizTrans = matrizTranspuesta(matrizOriginal);

mostrarMatriz(matrizOriginal, "Matriz original");
mostrarMatriz(matrizTrans, "Matriz transpuesta");