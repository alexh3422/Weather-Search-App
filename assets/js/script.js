

const lat = '47.608013'
const lon = '-122.335167'
const API_KEY = '936813a4181da5148d9c73c2b2fe7ccc'
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const temp = data.main.temp
        const weather = data.weather[0].main
        const city = data.name
        const country = data.sys.country
        const icon = data.weather[0].icon
        const description = data.weather[0].description
        const humidity = data.main.humidity
        const wind = data.wind.speed

        document.getElementById('temp').textContent = 'Current Temp: ' + temp + '°F'
        document.getElementById('country').textContent = 'Country: ' + country
        document.getElementById('city').textContent = 'City: ' + city
        document.getElementById('weather').textContent = 'Weather: ' + weather
        document.getElementById('weathericon').src = 'http://openweathermap.org/img/w/' + icon + '.png'
        document.getElementById('humidity').textContent = 'Humidity: ' + humidity + '%'  
    }   
)
