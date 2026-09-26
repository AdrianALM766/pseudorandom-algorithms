// --- 1. Capturar el evento Submit del Formulario ---
// basicamente vamos a la parte con el id mixto-form y el boton submit
document.getElementById('mixto-form').addEventListener('submit', async function(event) {
    // Evita que la página web se recargue automáticamente
    event.preventDefault();

    // --- 2. Extraer los datos ingresados en las casillas ---
    const seed = parseInt(document.getElementById('seed').value);
    const a = parseInt(document.getElementById('a').value);
    const c = parseInt(document.getElementById('c').value);
    const m = parseInt(document.getElementById('m').value);
    const iterations = parseInt(document.getElementById('iterations').value);

    // creamos el objeto JSON que espera el backend en fastAPI
    const requestData = {
        seed: seed,
        a: a,
        c: c,
        m: m,
        iterations: iterations
    };
    console.log("Datos a enviar al backend:", requestData);

    try {
        // Realizamos la petición HTTP POST a FastAPI
        const response = await fetch('http://127.0.0.1:8000/api/v1/generate/congruencial-mixto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });

        // Verificamos si la respuesta del servidor fue exitosa (código HTTP 200-299)
        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.statusText}`);
        }

        // Convertimos la respuesta JSON recibida desde FastAPI a un objeto de JS
        const result = await response.json();
        console.log("Respuesta recibida de FastAPI:", result);

        // --- 3. Mostrar la tarjeta de resultados y llenar la tabla ---
        const resultsSection = document.getElementById('results-section');
        const tableBody = document.getElementById('table-body');

        // Limpiamos cualquier fila antigua que tuviera la tabla
        tableBody.innerHTML = '';

        // Iteramos los datos devueltos por FastAPI (el arreglo result.data)
        result.data.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${item.x}</td>
                <td>${item.u.toFixed(4)}</td>
            `;
            tableBody.appendChild(row);
        });

        // Hacemos visible la sección de resultados
        resultsSection.style.display = 'block';

    } catch (error) {
        console.error("Ocurrió un error al conectar con la API:", error);
        alert("Hubo un error al generar la simulación. Revisa la consola o verifica que el servidor FastAPI esté encendido.");
    }
});



/**
 * ============================================================================
 * 📌 GUÍA Y ROADMAP DE REFACTORIZACIÓN MODULAR (FRONTEND)
 * ============================================================================
 *
 * PROPÓSITO:
 * Convertir el código monolítico de app.js en una arquitectura modular limpia
 * utilizando ES Modules nativos (import/export).
 *
 * ----------------------------------------------------------------------------
 * 🚨 ORDEN ESTRICTO DE MODIFICACIÓN Y CREACIÓN DE ARCHIVOS
 * ----------------------------------------------------------------------------
 * Sigue este orden de "abajo hacia arriba" (construir cimientos primero) para
 * evitar errores de referencias no definidas ("ReferenceError") o dependencias rotas:
 *
 * 1️⃣ CREAR: frontend/js/api.js (Módulo de Peticiones HTTP / Fetch)
 *    - ¿Qué hace?: Contiene únicamente las funciones asíncronas fetch() hacia FastAPI.
 *    - Dependencias: Ninguna (no toca el DOM ni conoce la interfaz).
 *    - Responsabilidad:
 *      * Recibir los objetos con parámetros (seed, a, c, m, etc.).
 *      * Enviar la petición POST al endpoint correspondiente (/api/v1/generate/...).
 *      * Retornar los datos en formato JSON procesado.
 *      * Lanzar errores si la red o el backend fallan.
 *    - Exporta: fetchCongruencialMixto(), fetchCongruencialMultiplicativo(), etc.
 *
 * 2️⃣ CREAR: frontend/js/ui.js (Módulo de Manipulación del DOM)
 *    - ¿Qué hace?: Funciones puras de renderizado y control visual.
 *    - Dependencias: Ninguna (no hace peticiones de red).
 *    - Responsabilidad:
 *      * Limpiar y rellenar la tabla HTML (<tbody>) iterando sobre result.data.
 *      * Formatear los valores decimales Ui con toFixed(4).
 *      * Mostrar u ocultar la tarjeta de resultados (results-section).
 *      * Mostrar alertas o mensajes de error en pantalla.
 *    - Exporta: renderResultsTable(), clearResults(), showErrorAlert().
 *
 * 3️⃣ REFACTORIZAR: frontend/js/app.js (El Orquestador / Punto de Entrada)
 *    - Ubicación actual: Mover a frontend/js/app.js.
 *    - ¿Qué hace?: Conecta los eventos del usuario con los módulos api.js y ui.js.
 *    - Pasos en este archivo:
 *      a) Importar las funciones de api.js y ui.js al inicio del archivo:
 *         import { fetchCongruencialMixto } from './api.js';
 *         import { renderResultsTable, showErrorAlert } from './ui.js';
 *      b) Escuchar los eventos 'submit' de los formularios.
 *      c) Prevenir la recarga de página con event.preventDefault().
 *      d) Extraer los valores numéricos del formulario con parseInt().
 *      e) Llamar a la función de api.js con await.
 *      f) Enviar la respuesta recibida a la función renderResultsTable() de ui.js.
 *
 * 4️⃣ ACTUALIZAR: frontend/index.html (Vinculación Modular en HTML)
 *    - ¿Qué hace?: Indicarle al navegador que app.js opera como un módulo ES6.
 *    - Cambio en la etiqueta script al final del <body>:
 *      <script type="module" src="js/app.js"></script>
 *
 * ----------------------------------------------------------------------------
 * 💡 RECORDATORIOS TÉCNICOS CLAVE:
 * - La propiedad type="module" en HTML es INDISPENSABLE para habilitar 'import/export'.
 * - Siempre usar preventDefault() para evitar el refresco por defecto del formulario.
 * - Siempre verificar que el servidor FastAPI esté corriendo en http://127.0.0.1:8000
 *   con el comando: uvicorn backend.main:app --reload
 * ============================================================================
 */


