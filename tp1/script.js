// 1️⃣ CREAR UN ARRAY DE PALABRAS
console.log("1️⃣ CREANDO ARRAY DE PALABRAS");
console.log("----------------------------");

let palabras = [];
for (let i = 0; i < 5; i++) {
    let palabra = prompt(`Ingrese la palabra ${i + 1} de 5:`);
    palabras.push(palabra);
}
console.log("Array original de palabras:", palabras);
console.log("");

// 2️⃣ MANIPULAR EL ARRAY
console.log("2️⃣ MANIPULANDO EL ARRAY");
console.log("-----------------------");

// Agregar palabra al inicio
palabras.unshift("Inicio");
console.log("Array después de agregar 'Inicio' al principio:", palabras);

// Agregar palabra al final
palabras.push("Final");
console.log("Array después de agregar 'Final' al final:", palabras);

// Eliminar la segunda palabra
palabras.splice(1, 1);
console.log("Array después de eliminar la segunda palabra:", palabras);
console.log("");

// 3️⃣ ANALIZAR LAS PALABRAS
console.log("3️⃣ ANALIZANDO LAS PALABRAS");
console.log("-------------------------");

// Mostrar la longitud de cada palabra
console.log("Longitud de cada palabra:");
for (let i = 0; i < palabras.length; i++) {
    console.log(`  "${palabras[i]}" tiene ${palabras[i].length} caracteres`);
}

// Encontrar la palabra más larga
let palabraMasLarga = palabras[0];
for (let i = 1; i < palabras.length; i++) {
    if (palabras[i].length > palabraMasLarga.length) {
        palabraMasLarga = palabras[i];
    }
}
console.log(`La palabra más larga es: "${palabraMasLarga}" con ${palabraMasLarga.length} caracteres`);

// Verificar si alguna palabra contiene la letra "a"
console.log("Palabras que contienen la letra 'a':");
let contieneLa = false;
for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].toLowerCase().includes("a")) {
        console.log(`  "${palabras[i]}" contiene la letra 'a'`);
        contieneLa = true;
    }
}
if (!contieneLa) {
    console.log("  Ninguna palabra contiene la letra 'a'");
}
console.log("");

// 4️⃣ JUEGO DE INVERSIÓN DE PALABRAS
console.log("4️⃣ JUEGO DE INVERSIÓN DE PALABRAS");
console.log("---------------------------------");

let palabrasInvertidas = [];
for (let i = 0; i < palabras.length; i++) {
    // Invertir cada palabra usando split, reverse y join
    let palabraInvertida = palabras[i].split("").reverse().join("");
    palabrasInvertidas.push(palabraInvertida);
}

console.log("Array con palabras invertidas:", palabrasInvertidas);
alert("Palabras invertidas: " + palabrasInvertidas.join(", "));
console.log("");

// 5️⃣ PALÍNDROMO
console.log("5️⃣ VERIFICACIÓN DE PALÍNDROMOS");
console.log("------------------------------");

let verificarPalindromos = confirm("¿Quiere comprobar si hay palíndromos en las palabras?");

if (verificarPalindromos) {
    console.log("Verificando palíndromos...");
    let hayPalindromos = false;
    
    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i].toLowerCase();
        let palabraInvertida = palabra.split("").reverse().join("");
        
        if (palabra === palabraInvertida) {
            console.log(`  ✅ "${palabras[i]}" es un palíndromo`);
            hayPalindromos = true;
        }
    }
    
    if (!hayPalindromos) {
        console.log("  ❌ No se encontraron palíndromos en el array");
    }
} else {
    console.log("Usuario decidió no verificar palíndromos");
}
console.log("");

// 6️⃣ BONUS (OPCIONAL)
console.log("6️⃣ EJERCICIOS BONUS");
console.log("-------------------");

// Contar palabras con más de 4 caracteres
let palabrasLargas = 0;
for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > 4) {
        palabrasLargas++;
    }
}
console.log(`Cantidad de palabras con más de 4 caracteres: ${palabrasLargas}`);

// Crear un string con todas las palabras unidas por "-"
let palabrasUnidas = palabras.join("-");
console.log(`Todas las palabras unidas por guiones: "${palabrasUnidas}"`);
