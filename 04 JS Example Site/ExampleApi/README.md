Das Beispile Wetter API ist ein Node.js Server. Dieser kann man als Docker Container builden und in Docker laufen lassen.

Es Simuliert ein Web API, welches von jemand anderem im Internet publiziert wurde.

To build the image use
```
docker build -t weather-api .
```
and then run it with
```
docker run -p 8080:8080 -d weather-api
```