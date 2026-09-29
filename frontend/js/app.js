// --- 1. Importaciones de nuestros módulos de JS ---
import {
    fetchCongruencialMixto,
    fetchCongruencialMultiplicativo,
    fetchCuadradosMedios
} from './api.js';

import {
    renderResultsTable,
    showMethodCard
} from './ui.js';

// --- 2. Eventos para cambiar entre pestañas del menú ---

document.getElementById('btn-mixto').addEventListener('click', () => {
    showMethodCard('card-mixto');
});

document.getElementById('btn-mult').addEventListener('click', () => {
    showMethodCard('card-mult');
});

document.getElementById('btn-cuad').addEventListener('click', () => {
    showMethodCard('card-cuad');
});


/*
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


