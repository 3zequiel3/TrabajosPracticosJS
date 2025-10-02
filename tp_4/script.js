// ============================================
// PUNTO 1: FUNCIONES DECLARATIVAS Y EXPRESADAS
// ============================================

/**
 * FUNCIÓN DECLARATIVA
 * Se declara con la palabra clave 'function' y puede ser llamada antes de su declaración
 * debido al "hoisting" (elevación) de JavaScript.
 */
function calcularCuadrado(numero) {
    return numero * numero;
}

/**
 * FUNCIÓN EXPRESADA
 * Se asigna a una variable y NO puede ser llamada antes de su declaración.
 * Es útil cuando queremos asignar funciones condicionalmente o pasarlas como parámetros.
 */
const calcularCubo = function(numero) {
    return numero * numero * numero;
};

function testearFunciones() {
    const numero = 4;
    const cuadrado = calcularCuadrado(numero);
    const cubo = calcularCubo(numero);
    
    document.getElementById('resultado-funciones').innerHTML = `
        <p>Número: ${numero}</p>
        <p>Cuadrado (función declarativa): ${cuadrado}</p>
        <p>Cubo (función expresada): ${cubo}</p>
        <p><strong>Diferencia:</strong> Las funciones declarativas se "elevan" (hoisting), 
        las expresadas no. Las expresadas son útiles para asignaciones condicionales.</p>
    `;
}

// ============================================
// PUNTO 2: ARROW FUNCTIONS Y PARÁMETROS POR DEFECTO
// ============================================

/**
 * ARROW FUNCTION con parámetro por defecto
 * Sintaxis más concisa, no tiene su propio 'this' y no se puede usar como constructor.
 * Los parámetros por defecto se evalúan en tiempo de ejecución.
 */
const saludar = (nombre, edad = 18) => {
    return `Hola ${nombre}, tienes ${edad} años`;
};

function testearArrowFunction() {
    const saludo1 = saludar("Ana");
    const saludo2 = saludar("Carlos", 25);
    
    document.getElementById('resultado-arrow').innerHTML = `
        <p>${saludo1}</p>
        <p>${saludo2}</p>
        <p><strong>Arrow Function:</strong> Sintaxis más concisa, ideal para funciones simples. 
        Los parámetros por defecto permiten valores opcionales.</p>
    `;
}

// ============================================
// PUNTO 3: OBJETOS CON PROPIEDADES Y MÉTODOS
// ============================================

/**
 * OBJETO con propiedades y métodos
 * Propiedades: almacenan datos (nombre, edad)
 * Métodos: son funciones que pertenecen al objeto y pueden acceder a sus propiedades
 */
const persona = {
    nombre: "María",
    edad: 30,
    profesion: "Desarrolladora",
    
    // Método para presentarse
    presentarse: function() {
        return `Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}`;
    },
    
    // Método con arrow function (NO recomendado para métodos de objeto)
    cumplirAnos: () => {
        // Las arrow functions no tienen 'this' propio
        return "No puedo acceder a this correctamente";
    },
    
    // Método correcto para modificar propiedades
    cumplirAnosCorrect: function() {
        this.edad++;
        return `Ahora tengo ${this.edad} años`;
    }
};

function testearObjeto() {
    const presentacion = persona.presentarse();
    const cumpleanos = persona.cumplirAnosCorrect();
    
    document.getElementById('resultado-objeto').innerHTML = `
        <p>${presentacion}</p>
        <p>${cumpleanos}</p>
        <p><strong>Propiedades vs Métodos:</strong></p>
        <p>• Propiedades: almacenan datos (nombre, edad)</p>
        <p>• Métodos: funciones que actúan sobre los datos del objeto</p>
    `;
}

// ============================================
// PUNTO 4: DESESTRUCTURACIÓN
// ============================================

function testearDesestructuracion() {
    // Desestructuración de objeto - extrae propiedades directamente
    const { nombre, edad, profesion } = persona;
    
    // Desestructuración con renombre
    const { nombre: nombrePersona, edad: edadPersona } = persona;
    
    // Desestructuración de arrays
    const colores = ['rojo', 'verde', 'azul'];
    const [primero, segundo, tercero] = colores;
    
    document.getElementById('resultado-desestructuracion').innerHTML = `
        <p>Nombre extraído: ${nombre}</p>
        <p>Edad extraída: ${edad}</p>
        <p>Profesión extraída: ${profesion}</p>
        <p>Con renombre: ${nombrePersona} - ${edadPersona}</p>
        <p>Array desestructurado: ${primero}, ${segundo}, ${tercero}</p>
        <p><strong>Ventajas de la desestructuración:</strong></p>
        <p>• Código más limpio y legible</p>
        <p>• Menos repetición de código</p>
        <p>• Extracción directa de múltiples valores</p>
    `;
}

// ============================================
// PUNTO 5: OPERADOR SPREAD/REST
// ============================================

function testearSpreadRest() {
    // SPREAD: expande elementos de un array/objeto
    const numeros = [1, 2, 3];
    const masNumeros = [4, 5, 6];
    const todosLosNumeros = [...numeros, ...masNumeros, 7, 8];
    
    // REST: agrupa elementos en un array
    function sumarTodos(...valores) {
        return valores.reduce((suma, valor) => suma + valor, 0);
    }
    
    const suma1 = sumarTodos(1, 2, 3, 4, 5);
    const suma2 = sumarTodos(...todosLosNumeros);
    
    document.getElementById('resultado-spread').innerHTML = `
        <p>Array original: [${numeros}]</p>
        <p>Con spread: [${todosLosNumeros}]</p>
        <p>Suma con rest (1,2,3,4,5): ${suma1}</p>
        <p>Suma con rest (array completo): ${suma2}</p>
        <p><strong>Diferencia Spread vs Rest:</strong></p>
        <p>• <strong>Spread (...):</strong> expande/descompone arrays u objetos</p>
        <p>• <strong>Rest (...):</strong> agrupa múltiples elementos en un array</p>
    `;
}

// ============================================
// PUNTO 6: MANIPULACIÓN BÁSICA DEL DOM
// ============================================

function manipularDOM() {
    // Seleccionar y modificar el título
    const titulo = document.getElementById('titulo');
    titulo.textContent = '¡DOM Manipulado Exitosamente!';
    
    // Agregar/quitar clases
    titulo.classList.add('highlight');
    titulo.classList.toggle('active');
    
    // Obtener la lista y agregar nuevos elementos
    const lista = document.getElementById('lista-tareas');
    
    // Crear nuevos elementos
    const nuevaTarea1 = document.createElement('li');
    nuevaTarea1.textContent = 'Tarea creada con createElement';
    
    const nuevaTarea2 = document.createElement('li');
    nuevaTarea2.textContent = 'Otra tarea agregada dinámicamente';
    nuevaTarea2.style.color = 'blue';
    
    // Agregar al DOM
    lista.appendChild(nuevaTarea1);
    lista.appendChild(nuevaTarea2);
    
    console.log('DOM manipulado: título cambiado, clases agregadas, elementos creados');
}

// ============================================
// PUNTO 7: EVENTOS CLICK E INPUT
// ============================================

// Event listener para el botón de agregar tarea
document.addEventListener('DOMContentLoaded', function() {
    const btnAgregar = document.getElementById('btn-agregar');
    const inputTarea = document.getElementById('input-tarea');
    const lista = document.getElementById('lista-tareas');
    
    /**
     * EVENTO CLICK: Se dispara cuando el usuario hace clic en el elemento
     * Es el evento más común para interacciones de botones
     */
    btnAgregar.addEventListener('click', function() {
        const textoTarea = inputTarea.value.trim();
        
        if (textoTarea !== '') {
            const nuevaTarea = document.createElement('li');
            nuevaTarea.textContent = textoTarea;
            lista.appendChild(nuevaTarea);
            inputTarea.value = ''; // Limpiar input
            
            console.log(`Tarea agregada: ${textoTarea}`);
        } else {
            alert('Por favor, escribe una tarea válida');
        }
    });
});

// ============================================
// PUNTO 8: EVENTO SUBMIT Y PREVENTDEFAULT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const inputFormulario = document.getElementById('input-formulario');
    const mensajeFormulario = document.getElementById('mensaje-formulario');
    
    /**
     * EVENTO SUBMIT: Se dispara cuando se envía un formulario
     * preventDefault(): Previene el comportamiento por defecto (recargar página)
     */
    formulario.addEventListener('submit', function(evento) {
        // Prevenir que la página se recargue
        evento.preventDefault();
        
        const valorIngresado = inputFormulario.value;
        
        // Mostrar mensaje en el DOM
        mensajeFormulario.innerHTML = `
            <p style="color: green; font-weight: bold;">
                ✅ Formulario enviado exitosamente!<br>
                Valor ingresado: "${valorIngresado}"
            </p>
        `;
        
        // Limpiar formulario
        inputFormulario.value = '';
        
        console.log('Formulario enviado sin recargar página');
    });
});

// ============================================
// PUNTO 9: EVENTOS KEYDOWN Y CHANGE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const inputEnter = document.getElementById('input-enter');
    const selector = document.getElementById('selector');
    const seleccionActual = document.getElementById('seleccion-actual');
    const lista = document.getElementById('lista-tareas');
    
    /**
     * EVENTO KEYDOWN: Se dispara cuando se presiona una tecla
     * Útil para detectar teclas específicas como Enter, Escape, etc.
     */
    inputEnter.addEventListener('keydown', function(evento) {
        // Verificar si la tecla presionada es Enter (código 13 o 'Enter')
        if (evento.key === 'Enter' || evento.keyCode === 13) {
            const textoTarea = inputEnter.value.trim();
            
            if (textoTarea !== '') {
                const nuevaTarea = document.createElement('li');
                nuevaTarea.textContent = `⌨️ ${textoTarea} (agregado con Enter)`;
                lista.appendChild(nuevaTarea);
                inputEnter.value = '';
                
                console.log('Tarea agregada con Enter:', textoTarea);
            }
        }
    });
    
    /**
     * EVENTO CHANGE: Se dispara cuando cambia el valor de un elemento de formulario
     * Ideal para selects, checkboxes, radio buttons
     */
    selector.addEventListener('change', function(evento) {
        const opcionSeleccionada = evento.target.value;
        const textoOpcion = evento.target.options[evento.target.selectedIndex].text;
        
        if (opcionSeleccionada) {
            seleccionActual.innerHTML = `
                <strong>Opción seleccionada:</strong> ${textoOpcion} (valor: ${opcionSeleccionada})
            `;
            seleccionActual.style.color = 'green';
        } else {
            seleccionActual.textContent = 'Ninguna opción seleccionada';
            seleccionActual.style.color = 'gray';
        }
        
        console.log('Opción cambiada:', opcionSeleccionada);
    });
});

// ============================================
// EXPLICACIONES ADICIONALES
// ============================================

/**
 * DIFERENCIAS ENTRE EVENTOS:
 * 
 * • INPUT: Se dispara mientras el usuario escribe (en tiempo real)
 * • CHANGE: Se dispara cuando el valor cambia Y el elemento pierde el foco
 * • KEYDOWN: Se dispara cuando se presiona una tecla (antes de que aparezca el carácter)
 * • KEYUP: Se dispara cuando se suelta una tecla
 * • CLICK: Se dispara cuando se hace clic en un elemento
 * • SUBMIT: Se dispara cuando se envía un formulario
 */

// Función para mostrar información en consola
console.log('🚀 TP 4 - JavaScript cargado correctamente');
console.log('📝 Puntos implementados:');
console.log('1. ✅ Funciones declarativas y expresadas');
console.log('2. ✅ Arrow functions y parámetros por defecto');
console.log('3. ✅ Objetos con propiedades y métodos');
console.log('4. ✅ Desestructuración');
console.log('5. ✅ Operador spread/rest');
console.log('6. ✅ Manipulación básica del DOM');
console.log('7. ✅ Eventos click e input');
console.log('8. ✅ Evento submit y preventDefault');
console.log('9. ✅ Eventos keydown y change');

// Mensaje de bienvenida
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 DOM completamente cargado. Todos los eventos están activos.');
    
    // Agregar mensaje de instrucciones
    setTimeout(() => {
        alert('¡Bienvenido al TP 4!\n\nInstrucciones:\n• Haz clic en los botones para probar cada punto\n• Escribe en los inputs para probar eventos\n• Revisa la consola para ver logs adicionales');
    }, 1000);
});