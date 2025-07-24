# Simple Geospatial Web App

Este ejemplo minimal usa Node.js, Express, MongoDB y Leaflet para crear un mapa donde se pueden marcar puntos y asociarles una descripción. Los puntos se almacenan en MongoDB.

## Uso

1. Asegúrate de tener MongoDB corriendo localmente (`mongodb://localhost:27017`).
2. Instala dependencias en la carpeta `example-app`:
   ```bash
   npm install
   ```
3. Ejecuta el servidor:
   ```bash
   node server.js
   ```
4. Abre `http://localhost:3000` en tu navegador.

En el mapa haz clic para ubicar un punto, escribe una descripción y pulsa **Guardar Punto**.
