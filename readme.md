# General Algorithmics & Pseudo-Random Number Generators

Este repositorio reúne una colección de implementaciones en código de algoritmos fundamentales de las ciencias de la computación, matemáticas discretas y simulación. 

Su propósito es servir como un registro educativo, estructurado y documentado de soluciones algorítmicas, enfocándose en la claridad conceptual, la corrección lógica y el análisis teórico.

---

## 📌 Algoritmos Implementados

Actualmente, el proyecto incluye métodos clásicos para la **Generación de Números Pseudoaleatorios (PRNGs)**:

### 1. Método de los Cuadrados Medios (Middle-Square Method)
* **Descripción:** Algoritmo propuesto por John von Neumann que genera números pseudoaleatorios mediante el aislamiento de los dígitos centrales del cuadrado de un número base (semilla).
* **Uso:** Estudio histórico de generadores y análisis de periodos/ciclos repetitivos.

### 2. Método de los Productos Medios (Middle-Product Method)
* **Descripción:** Variante del método de cuadrados medios que utiliza dos semillas iniciales de igual longitud para multiplicar y extraer los dígitos centrales en cada iteración.
* **Uso:** Mejora sobre el método original para extender el periodo antes de caer en ciclos.

### 3. Métodos Congruenciales (Congruential Generators)
* **Descripción:** Algoritmos fundamentados en aritmética modular y relaciones de recurrencia lineal.
* **Subtipos incluidos:**
  * **Congruencial Lineal:** $X_{n+1} = (aX_n + c) \pmod m$
  * **Congruencial Multiplicativo:** $X_{n+1} = (aX_n) \pmod m$
* **Uso:** Generación eficiente de secuencias uniformes $[0, 1)$ mediante el cumplimiento del Teorema de Hull-Dobell para asegurar periodos completos.

---