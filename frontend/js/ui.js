export function renderResultsTable(resultsData) {
    // 2. BUSCAMOS LOS CONTENEDORES EN EL HTML USANDO SUS ID
    const tableBody = document.getElementById('table-body');
    const resultsSection = document.getElementById('results-section');

    //limpiamos datos de la tabla por si acaso
    tableBody.innerHTML = '';

    // 4. RECORREMOS EL ARREGLO DE RESULTADOS QUE NOS MANDÓ FASTAPI
    resultsData.forEach((item, index) =>{
        // a) Creamos una fila de tabla <tr> vacía en memoria
        const row = document.createElement("tr");
        // b) Le inyectamos las 3 celdas <td> con la información
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.x}</td>
            <td>${item.u.toFixed(4)}</td>
        `;
        // c) Metemos la fila terminada dentro del <tbody> del HTML
        tableBody.appendChild(row);
    });
    // 5. HACEMOS VISIBLE LA TARJETA DE RESULTADOS EN LA PÁGINA WEB
    resultsSection.style.display = 'block';
}

// --- 1. Cambiar la tarjeta/formulario visible ---
export function showMethodCard(activeCardId) {
    // Ocultamos la tabla de resultados de la simulación anterior
    const resultsSection = document.getElementById('results-section');
    resultsSection.style.display = 'none';

    // Obtenemos todas las tarjetas de formularios
    const cards = document.querySelectorAll('.method-card');

    // Mostramos únicamente la seleccionada y ocultamos las otras
    cards.forEach(card => {
        if (card.id === activeCardId) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

