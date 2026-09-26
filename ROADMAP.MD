# 🗺️ Roadmap de Aprendizaje y Desarrollo: Project Simulation & PRNG Dashboard

**Objetivo:** Transformar la colección de algoritmos de generación de números pseudoaleatorios (PRNG) en una aplicación web Full-Stack e interactiva en un plazo de **2 a 3 semanas** (dedicando entre 5 y 10 horas semanales).

---

## 🎯 Meta del Proyecto
Desarrollar un **Dashboard Visual Interactivo** que consuma una **API REST en Python (FastAPI)** para ejecutar simulación de generadores pseudoaleatorios, visualización de secuencias en tiempo real (gráficos/histogramas) y evaluación de calidad estadística (Prueba Chi-cuadrada).

---

## 🏗️ Arquitectura Técnica

* **Backend:** Python 3 + FastAPI + Uvicorn + Pydantic.
* **Procesamiento de Datos & Gráficos:** Matplotlib / Pandas / NumPy / Plotly.js.
* **Frontend:** HTML5 + CSS3 + JavaScript Vanilla (`fetch` API asíncrona).
* **Control de Versiones:** Git & GitHub (Flujo de ramas: `main`, `dev`, `sandbox-A1` con Conventional Commits).

---

## 📅 Plan de Trabajo (Paso a Paso)

### 🔴 Semana 1: Backend & API REST (FastAPI)
* [✔️] Refactorizar la lógica existente de los algoritmos de PRNGs (`cuadrados_medios`, `productos_medios`, `congruencial_mixto`, `multiplicativo`, `aditivo`) en módulos reutilizables en Python.
* [✔️] Configurar entorno virtual e instalar dependencias (`fastapi`, `uvicorn`, `pydantic`).
* [✔️] Crear el servidor backend en `backend/main.py`.
* [✔️] Diseñar los endpoints `POST`:
  * `/api/v1/generate/congruential`
  * `/api/v1/generate/middle-square`
  * `/api/v1/generate/middle-product`
* [✔️] Probar y validar la API interactiva en `http://127.0.0.1:8000/docs`.

### 🟡 Semana 2: Frontend Base + Integración Asíncrona (`fetch`)
* [✔️] Crear la estructura web base en `frontend/index.html` y `styles.css`.
* [✔️] Construir formularios dinámicos para ingresar parámetros ($X_0$, $a$, $c$, $m$, iteraciones).
* [ ] Implementar script en JavaScript (`app.js`) utilizando `fetch()` para enviar peticiones `POST` al backend.
* [ ] Mostrar las tablas de resultados normalizados $U_i$ en la interfaz en tiempo real sin recargar la página.

### 🟢 Semana 3: Visualización Dinámica & Pruebas Estadísticas
* [ ] Integrar **Plotly.js** en el frontend (o renderizado en backend con **Matplotlib**).
* [ ] Dibujar gráficos en pantalla:
  * **Histograma de Frecuencia:** Para analizar la distribución uniforme $[0, 1)$.
  * **Gráfico de Serie Temporal:** Para identificar ciclos o patrones repetitivos.
* [ ] Implementar la **Prueba Chi-cuadrada ($\chi^2$)** de uniformidad en el backend.
* [ ] Mostrar un indicador visual (Badge Verde / Rojo) indicando si la secuencia superó la prueba estadística.
* [ ] Publicación del proyecto y actualización del `README.md` con captura del Dashboard.

---

## 🧪 Autoevaluación y Perfil Inicial
* **Nivel de API:** Creación de endpoints simples en Python.
* **Manejo de Gráficos/Datos:** Primer acercamiento a librerías de visualización de datos.
* **Tiempo disponible:** 5 - 10 horas / semana.