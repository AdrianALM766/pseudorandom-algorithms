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

// --- 3. Envio del Formulario: Método Congruencial Mixto ---
document.getElementById('mixto-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const requestData = {
        seed: parseInt(document.getElementById('mixto-seed').value),
        a: parseInt(document.getElementById('mixto-a').value),
        c: parseInt(document.getElementById('mixto-c').value),
        m: parseInt(document.getElementById('mixto-m').value),
        iterations: parseInt(document.getElementById('mixto-iterations').value)
    };

    try {
        const result = await fetchCongruencialMixto(requestData);
        renderResultsTable(result.data);
    } catch (error){
        console.error("Error al generar la simulación mixta:", error);
        alert("Ocurrió un error al conectar con el servidor.");
    }
});

document.getElementById('mult-form').addEventListener('submit', async function(event){
    event.preventDefault();

    const requestData = {
        seed: parseInt(document.getElementById('mult-seed').value),
        a: parseInt(document.getElementById('mult-a').value),
        m: parseInt(document.getElementById('mult-m').value),
        iterations: parseInt(document.getElementById('mult-iterations').value)
    };

    try {
        const result = await fetchCongruencialMultiplicativo(requestData);
        renderResultsTable(result.data);
    } catch (error){
        console.error("Error al generar la simulación multiplicativa:", error);
        alert("Ocurrió un error al conectar con el servidor.");
    }
});

document.getElementById('cuadradom-form').addEventListener('submit', async function(event){
    event.preventDefault();

    const requestData = {
        seed: parseInt(document.getElementById('cuad-seed').value),
        digits: parseInt(document.getElementById('cuad-digits').value),
        iterations: parseInt(document.getElementById('cuad-iterations').value)
    };

    try {
        const result = await fetchCuadradosMedios(requestData);
        renderResultsTable(result.data);
    } catch (error){
        console.error("Error al generar la simulación de cuadrados medios:", error);
        alert("Ocurrió un error al conectar con el servidor.");
    }
});



