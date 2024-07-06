Das Beispile Wetter API ist ein Node.js Server. Dieser kann man als Docker Container builden und in Docker laufen lassen.

Es Simuliert ein Web API, welches von jemand anderem im Internet publiziert wurde.

Folgende Schritte um das API zu starten.
1. Starte den Docker Deamon
2. Builde das Docker Image mit diesem Befehl
```
docker build -t weather-api .
```
3. Starte ein Container mit diesem Command
```
docker run -p 8080:8080 -d weather-api
```