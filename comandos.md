# crea un entorno virutal desde cero (venv)
python3 -m venv .venv
# agregar una libreria ejemplo (pandas)
pip install pandas

# lanza la app en backend.
uvicorn backend.main:app --reload

# activa entorno venv
source .venv/bin/activate
# desactiva entorno
deactivate

# sirve para mantener actualizado requirements.txt que expone que librerias usamos en el proyecto.
pip freeze > requirements.txt