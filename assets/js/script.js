search.addEventListener('submit', function(e) {
    e.preventDefault();
    const citySearch = document.getElementById('query').value;
    const API_KEY = '936813a4181da5148d9c73c2b2fe7ccc'
    const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${API_KEY}&units=imperial`;
    
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
        console.log(data);
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



          function saveSearch() {
            
            localStorage.setItem("search", citySearch);
            // console.log(citySearch);
        
            var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
            searchHistory.push(citySearch);
            localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
            // console.log(searchHistory);
            }

          
            
            


          saveSearch();

          function displaySearchHistory() {
            let searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
            let container = document.getElementById('history-list');
            // Clear the container element
            container.innerHTML = '';
            // Create a button for each search in the search history
            for (let i = 0; i < searchHistory.length; i++) {
              let search = searchHistory[i];
              let button = document.createElement('button');
              button.textContent = search;
              container.appendChild(button);
            }
          }

          displaySearchHistory();



         

   

      });
    });


    // const url5day = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}'
    // fetch(url5day)
    // .then(response => response.json())
    // .then(data => {






 





