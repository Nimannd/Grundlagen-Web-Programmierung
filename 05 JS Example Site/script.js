(function () {
    async function fetchData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    }

    function insertData(data) {
        const container = document.getElementById('weatherdisplay');
        container.innerHTML = '';
        data.forEach(item => {
            var iconUrl = 'http://localhost:8080' + item.icon;
            container.appendChild(createWeatherCard(item.city, item.temp, item.weather, iconUrl));
        });
    }

    // Function to create the HTML structure
    function createWeatherCard(city, temperature, weatherDescription, iconUrl) {
        // Create the main card div
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';

        // Create the card body div
        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'card-body';

        // Create the weather icon image
        const weatherIcon = document.createElement('img');
        weatherIcon.className = 'weathericon';
        weatherIcon.src = iconUrl;
        weatherIcon.alt = 'weather-icon';

        // Create the card title (city name)
        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = city;

        // Create the card text paragraph
        const cardText = document.createElement('p');
        cardText.className = 'card-text';

        // Create the temperature span
        const temperatureSpan = document.createElement('span');
        temperatureSpan.className = 'temperature';
        temperatureSpan.textContent = `${temperature}`;

        // Create the weather description span
        const weatherDescriptionSpan = document.createElement('span');
        weatherDescriptionSpan.className = 'temperature';
        weatherDescriptionSpan.textContent = weatherDescription;

        // Construct the card text content
        cardText.innerHTML = `${temperatureSpan.outerHTML}°C, ${weatherDescriptionSpan.outerHTML}`;

        // Append the elements to the card body
        cardBodyDiv.appendChild(weatherIcon);
        cardBodyDiv.appendChild(cardTitle);
        cardBodyDiv.appendChild(cardText);

        // Append the card body to the main card div
        cardDiv.appendChild(cardBodyDiv);

        return cardDiv;
    }

    async function loadAndInsertData() {
        const apiUrl = 'http://127.0.0.1:8080/weather';
        const data = await fetchData(apiUrl);
        if (data) {
            setTimeout(() => insertData(data), 2000);
        }
    }

    function warning(event) {
        this.closest(".card").classList.toggle("dark");
        console.log(event);
    }

    document.addEventListener('DOMContentLoaded', loadAndInsertData);
    document.getElementById('warnbtn').addEventListener('click', warning);

    console.log('Hello from the script file!');
})();

function changeTheme() {

    // Get the root element
    var r = document.querySelector(':root');
    r.style.setProperty('--primarycolordark', '#D32F2F');
    r.style.setProperty('--primarycolorlight', '#FFCDD2');
    r.style.setProperty('--primarycolor', '#F44336');
    r.style.setProperty('--iconColor', '#FFFFFF');
    r.style.setProperty('--accentcolor', '#536DFE');
    r.style.setProperty('--primarytextcolor', '#212121');
    r.style.setProperty('--secondarytextcolor', '#757575');
    r.style.setProperty('--dividercolor', '#BDBDBD');
    r.style.setProperty('--backgroundcolor', 'white');
}