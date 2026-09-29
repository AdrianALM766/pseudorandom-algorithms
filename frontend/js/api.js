/**
 * Módulo de peticiones HTTP (Fetch API) hacia el backend FastAPI
 */

const BASE_URL = 'http://127.0.0.1:8000/api/v1/generate';

//Peticion POST para el metodo Congruencial Mixto
/**
 * @param {Object} data // {seed, a, c, m, iterations}
 * @returns {Promise<Object>} // respuesta en JSON del backend
 */


export async function fetchCongruencialMixto(data) {
    const response = await fetch(`${BASE_URL}/congruencial-mixto`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }); 
    if (!response.ok){
        throw new Error(`Error en la petición: ${response.statusText}`);
    }
    return await response.json();
}

export async function fetchCongruencialMultiplicativo(data) {
    const response = await fetch(`${BASE_URL}/congruencial-multiplicativo`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if(!response.ok){
        throw new Error(`Error en la petición: ${response.statusText}`);
    }
    return await response.json();
}

export async function fetchCuadradosMedios(data) {
    const response = await fetch(`${BASE_URL}/cuadrados-medios`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if(!response.ok){
        throw new Error(`Error en la petición: ${response.statusText}`);
    }
    return await response.json();
}


