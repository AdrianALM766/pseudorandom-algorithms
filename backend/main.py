from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Importa los generadores pseudoaleatorios.
from backend.core.prng import (
    congruencial_mixto,
    congruencial_multiplicativo,
    cuadrados_medios,
)

# Crea la aplicación de FastAPI.
app = FastAPI(
    title="PRNG Simulation Engine API",
    description="API REST para simulacion y analisis de numeros pseudoaleatorios",
    version="1.0.0",
)

# Permite solicitudes desde el frontend.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Modelos de entrada ---

# Define los parámetros del generador mixto.
class CongruencialMixtoRequest(BaseModel):
    seed: int
    a: int
    c: int
    m: int
    iterations: int = 100  # Cantidad de valores a generar.

# Define los parámetros del generador multiplicativo.
class CongruencialMultiplicativoRequest(BaseModel):
    seed: int
    a: int
    m: int
    iterations: int = 100  # Cantidad de valores a generar.

# Define los parámetros del método de cuadrados medios.
class MiddleSquareRequest(BaseModel):
    seed: int
    digits: int
    iterations: int = 100  # Cantidad de valores a generar.

# --- Endpoints ---

# Comprueba que la API está activa.
@app.get("/")
def read_root():
    return {"message": "PRNG Engine API activa y funcionando"}

# Genera una secuencia con el método mixto.
@app.post("/api/v1/generate/congruencial-mixto")
def generate_mixto(data: CongruencialMixtoRequest):
    sequence = congruencial_mixto(data.seed, data.a, data.c, data.m, data.iterations)
    return {"status": "success", "count": len(sequence), "data": sequence}

# Genera una secuencia con el método multiplicativo.
@app.post("/api/v1/generate/congruencial-multiplicativo")
def generate_multiplicativo(data: CongruencialMultiplicativoRequest):
    sequence = congruencial_multiplicativo(data.seed, data.a, data.m, data.iterations)
    return {"status": "success", "count": len(sequence), "data": sequence}

# Genera una secuencia con el método de cuadrados medios.
@app.post("/api/v1/generate/cuadrados-medios")
def generate_cuadrados(data: MiddleSquareRequest):
    sequence = cuadrados_medios(data.seed, data.digits, data.iterations)
    return {"status": "success", "count": len(sequence), "data": sequence}
    