# Umbraco Demo

## Voraussetzung
- Docker Desktop ist installiert und kann Linux basierte Images ausführen
- Docker Compose

## Ausführen
1. Wechsle mit dem Terminal in den Ordner UmbracoContainer
1. Lasse Docker Compose eine Umbraco Umgebung einrichten
```
docker compose up -d
```
3. Öffne http://localhost/
3. Trage Name, Mail und ein Passwort ein um ein Admin Benutzer zu erstellen.
3. Wähle eine gewünschte Telemetry Policy
3. Klicke auf Install
3. Lasse die Installation durchlaufen und loge dich anschliessend mit dem vorhin erstellten Benutzer ein.
3. Entdecke wie ein CMS Backend aussieht und was man machen kann. Besonderes Augenmerk auf Content/Inhalt
3. Rufe nochmal nur http://localhost/ auf
3. Finde die vorhin gesehenen Inhalte in der Website wieder.