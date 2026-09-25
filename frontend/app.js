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


