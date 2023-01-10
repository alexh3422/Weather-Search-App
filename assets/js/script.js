

search.addEventListener('submit', function(e) {
    e.preventDefault();
    const citySearch = document.getElementById('query').value;
    const API_KEY = '936813a4181da5148d9c73c2b2fe7ccc'
    const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${API_KEY}&units=imperial`;
  function weather() {
       fetch(url2)
      .then(response => response.json())
      .then(data => {
        lat = data.coord.lat;
        lon = data.coord.lon;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;

        return fetch(url);
      })
      .then(response => response.json())
      .then(data => {
      
        const temp = data.main.temp;
        const weather = data.weather[0].main;
        const city = data.name;
        const country = data.sys.country;
        const icon = data.weather[0].icon;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;
  
        document.getElementById('temp').textContent =
          'Current Temp: ' + temp + '°F';
        document.getElementById('country').textContent = 'Country: ' + country;
        document.getElementById('city').textContent = 'City: ' + city;
        document.getElementById('weather').textContent = 'Weather: ' + weather;
        document.getElementById(
          'weathericon'
        ).src = 'http://openweathermap.org/img/w/' + icon + '.png';
        document.getElementById('humidity').textContent =
          'Humidity: ' + humidity + '%';
        document.getElementById('wind').textContent = 'Wind: ' + wind + 'mph';



          function saveSearch() {
            
            localStorage.setItem("search", citySearch);
          
        
            var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
            searchHistory.push(citySearch);
            localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

    }

          
            
            


          saveSearch();

          function displaySearchHistory() {
            let searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
            let container = document.querySelector('#history-list');
            // Clear the container element
            container.innerHTML = '';
            // Create a button for each search in the search history
            for (let i = 0; i < searchHistory.length; i++) {
              let search = searchHistory[i];
              let button = document.createElement('button');
              button.textContent = search;
              button.addEventListener('click', function() {
                // set the citySearch5 to the city of the button clicked
                citySearch5 = this.textContent;
                weatherForecast()
              });
              container.appendChild(button);
            }
          }

          displaySearchHistory();


const API_KEY = '936813a4181da5148d9c73c2b2fe7ccc';
const citySearch5 = document.getElementById('query').value;

const url5 = `https://api.openweathermap.org/data/2.5/forecast?q=${citySearch5}&appid=${API_KEY}&units=imperial`;
function weatherForecast() {
fetch(url5)
  .then(response => response.json())
  .then(data => {
   console.log(data)
   //loop below is for array from openweather
//  for (let i = 0; i < data.list.length; i += 8) {
  // loop below is for displaying on page
      for (let j=0; j <= 5; j++) {
        var dataIndex = [0,8,16,24,32]
          var forecastData = data.list;
          var dateEl = dayjs.unix(forecastData[dataIndex[j]].dt).format('MM/DD/YYYY');
          var iconEl = 'http://openweathermap.org/img/w/' + forecastData[dataIndex[j]].weather[0].icon + '.png'
          var tempEl = forecastData[dataIndex[j]].main.temp + '°F'
          var windEl = 'Wind: ' + forecastData[dataIndex[j]].wind.speed + 'mph'
          var humidityEl = 'Humidity: ' + forecastData[dataIndex[j]].main.humidity + '%'
  
          document.querySelectorAll('.dateFive')[j].textContent = dateEl;
          document.querySelectorAll('.iconFive')[j].src = iconEl;
          document.querySelectorAll('.tempFive')[j].textContent = tempEl
          document.querySelectorAll('.windFive')[j].textContent = windEl;
          document.querySelectorAll('.humidityFive')[j].textContent = humidityEl;
      // }

  }


  })
 


  } 
  weatherForecast();
  })
  }
  weather();
})


 
    






 





