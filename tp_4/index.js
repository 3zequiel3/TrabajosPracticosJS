// Base de datos simulada (nuestros usuarios)
const users = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Luis" },
    { id: 3, name: "María" }
];

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    displayUsers();
    setupEventListeners();
});

function displayUsers() {
    const usersContainer = document.getElementById('users-list');
    usersContainer.innerHTML = users.map(user => 
        `<div class="user-card">ID: ${user.id} - ${user.name}</div>`
    ).join('');
}

function setupEventListeners() {
    document.getElementById('callback-btn').addEventListener('click', handleCallbackSearch);
    document.getElementById('promise-btn').addEventListener('click', handlePromiseSearch);
    document.getElementById('async-btn').addEventListener('click', handleAsyncSearch);
    document.getElementById('compare-btn').addEventListener('click', handleComparison);
}

// ============================================
// FUNCIONES DE UTILIDAD
// ============================================

function showLoading() {
    document.getElementById('loading').classList.remove('hidden');
}

function hideLoading() {
    document.getElementById('loading').classList.add('hidden');
}

function displayResult(containerId, type, title, message, data = null) {
    const container = document.getElementById(containerId);
    container.className = `result-container result-${type}`;
    
    let content = `<div class="result-title">${title}</div>`;
    content += `<div class="result-text">${message}</div>`;
    
    if (data) {
        content += `<div class="result-text"><strong>Datos:</strong> ID: ${data.id}, Nombre: ${data.name}</div>`;
    }
    
    container.innerHTML = content;
}

// ============================================
// ACTIVIDAD 1: CALLBACK
// ============================================

function getUserById(id, callback) {
    showLoading();
    
    // Simular demora de servidor con setTimeout (1.5 segundos)
    setTimeout(() => {
        hideLoading();
        
        // Buscar el usuario en la base de datos
        const user = users.find(user => user.id === parseInt(id));
        
        if (user) {
            // Si existe, llamar al callback sin error
            callback(null, user);
        } else {
            // Si no existe, llamar al callback con error
            callback(`Usuario con ID ${id} no encontrado`, null);
        }
    }, 1500);
}

function handleCallbackSearch() {
    const input = document.getElementById('callback-input');
    const id = input.value.trim();
    
    if (!id) {
        displayResult('callback-result', 'error', 'Error', 'Por favor ingresa un ID válido');
        return;
    }
    
    displayResult('callback-result', 'info', 'Buscando...', 'Usando callback para buscar usuario...');
    
    getUserById(id, (error, user) => {
        if (error) {
            displayResult('callback-result', 'error', 'Error (Callback)', error);
        } else {
            displayResult('callback-result', 'success', 'Éxito (Callback)', 'Usuario encontrado correctamente', user);
        }
    });
}

// ============================================
// ACTIVIDAD 2: PROMESAS
// ============================================

function getUserByIdPromise(id) {
    showLoading();
    
    return new Promise((resolve, reject) => {
        // Simular demora de servidor
        setTimeout(() => {
            hideLoading();
            
            const user = users.find(user => user.id === parseInt(id));
            
            if (user) {
                // resolve = promesa cumplida exitosamente
                resolve(user);
            } else {
                // reject = promesa rechazada (error)
                reject(new Error(`Usuario con ID ${id} no encontrado`));
            }
        }, 1500);
    });
}

function handlePromiseSearch() {
    const input = document.getElementById('promise-input');
    const id = input.value.trim();
    
    if (!id) {
        displayResult('promise-result', 'error', 'Error', 'Por favor ingresa un ID válido');
        return;
    }
    
    displayResult('promise-result', 'info', 'Buscando...', 'Usando promesa para buscar usuario...');
    
    getUserByIdPromise(id)
        .then(user => {
            displayResult('promise-result', 'success', 'Éxito (Promesa)', 'Usuario encontrado correctamente', user);
        })
        .catch(error => {
            displayResult('promise-result', 'error', 'Error (Promesa)', error.message);
        });
}

// ============================================
// ACTIVIDAD 3: ASYNC/AWAIT
// ============================================

async function fetchUser(id) {
    try {
        // await pausa la función hasta que la promesa se resuelva
        const user = await getUserByIdPromise(id);
        return { success: true, user: user };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

async function handleAsyncSearch() {
    const input = document.getElementById('async-input');
    const id = input.value.trim();
    
    if (!id) {
        displayResult('async-result', 'error', 'Error', 'Por favor ingresa un ID válido');
        return;
    }
    
    displayResult('async-result', 'info', 'Buscando...', 'Usando async/await para buscar usuario...');
    
    const result = await fetchUser(id);
    
    if (result.success) {
        displayResult('async-result', 'success', 'Éxito (Async/Await)', 'Usuario encontrado correctamente', result.user);
    } else {
        displayResult('async-result', 'error', 'Error (Async/Await)', result.error);
    }
}

// ============================================
// COMPARACIÓN DE MÉTODOS
// ============================================

async function handleComparison() {
    const container = document.getElementById('comparison-result');
    container.className = 'result-container result-info';
    
    let content = `
        <div class="result-title">🔄 Comparación de los tres métodos</div>
        <div class="result-text">Buscando usuario con ID 2 usando los tres métodos...</div>
    `;
    
    container.innerHTML = content;
    
    // Esperar un poco antes de mostrar los métodos
    setTimeout(() => {
        content += `
            <div class="method-comparison">
                <div class="method-title">1️⃣ CALLBACK</div>
                <div class="method-description">
                    • Función que se pasa como argumento<br>
                    • Se ejecuta después de completar la operación<br>
                    • Puede llevar al "callback hell"
                </div>
            </div>
            
            <div class="method-comparison">
                <div class="method-title">2️⃣ PROMESA</div>
                <div class="method-description">
                    • Objeto que representa una operación futura<br>
                    • Usa resolve() para éxito y reject() para error<br>
                    • Mejor manejo de errores con .then() y .catch()
                </div>
            </div>
            
            <div class="method-comparison">
                <div class="method-title">3️⃣ ASYNC/AWAIT</div>
                <div class="method-description">
                    • Sintaxis más limpia para manejar promesas<br>
                    • Usa try/catch para manejo de errores<br>
                    • Código más legible y fácil de mantener
                </div>
            </div>
        `;
        
        container.innerHTML = content;
    }, 1000);
    
    // Ejecutar los tres métodos para demostrar
    setTimeout(() => {
        demonstrateAllMethods();
    }, 2000);
}

function demonstrateAllMethods() {
    const testId = 2;
    
    // 1. Callback
    getUserById(testId, (error, user) => {
        if (!error) {
            console.log('📞 Callback result:', user);
        }
    });
    
    // 2. Promesa
    getUserByIdPromise(testId)
        .then(user => {
            console.log('🤝 Promise result:', user);
        })
        .catch(error => {
            console.error('🤝 Promise error:', error);
        });
    
    // 3. Async/Await
    (async () => {
        try {
            const user = await getUserByIdPromise(testId);
            console.log('⚡ Async/Await result:', user);
        } catch (error) {
            console.error('⚡ Async/Await error:', error);
        }
    })();
}

// ============================================
// EJEMPLOS ADICIONALES
// ============================================

// Función para obtener múltiples usuarios
async function getMultipleUsers(ids) {
    try {
        const promises = ids.map(id => getUserByIdPromise(id));
        const users = await Promise.all(promises);
        console.log('👥 Múltiples usuarios:', users);
        return users;
    } catch (error) {
        console.error('❌ Error al obtener múltiples usuarios:', error);
        throw error;
    }
}

// Ejemplo de uso de Promise.all
setTimeout(() => {
    console.log('🚀 Ejecutando ejemplos adicionales...');
    getMultipleUsers([1, 2, 3]);
}, 5000);