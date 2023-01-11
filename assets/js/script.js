const API_KEY = '936813a4181da5148d9c73c2b2fe7ccc'
loadHistory();
function displayWeatherForecast() {
  //alert('in displayWeatherForecast')
  const citySearch = document.getElementById('cityQuery').value;
  const citySearchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${API_KEY}&units=imperial`;
  
  fetch(citySearchUrl).then(response => response.json())
  .then(data => {
    // console.log (data)
    lat = data.coord.lat; 
    lon = data.coord.lon;
console.log(citySearch)
    const latLonUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
    fetch(latLonUrl).then(response => response.json())
    .then(data => {
      console.log (data )

      // current weather
    

      const temp = data.main.temp;
      const weather = data.weather[0].main;
      const city = data.name;
      const country = data.sys.country;
      const icon = data.weather[0].icon;
      const humidity = data.main.humidity;
      const wind = data.wind.speed;
      console.log (time)
      document.getElementById("time").textContent = dayjs.unix(data.dt).format("HH:mm - dddd M/D/YYYY");
      document.getElementById('temp').textContent = 'Current Temp: ' + temp + '°F';
      document.getElementById('country').textContent = 'Country: ' + country;
      document.getElementById('city').textContent = 'City: ' + city;
      document.getElementById('weather').textContent = 'Weather: ' + weather;
      document.getElementById('weathericon').src = 'http://openweathermap.org/img/w/' + icon + '.png';
      document.getElementById('humidity').textContent = 'Humidity: ' + humidity + '%';
      document.getElementById('wind').textContent = 'Wind: ' + wind + 'mph';

      // 5 day forecast
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
      fetch(forecastUrl).then(response => response.json())
      .then(data => {
        console.log (data )

        for (let j=0; j <= 5; j++) {
                
          var forecastData = data.list;
          var dateEl = dayjs.unix(forecastData[j*8].dt).format('MM/DD/YYYY hh:mm A');
          var iconEl = 'http://openweathermap.org/img/w/' + forecastData[j*8].weather[0].icon + '.png'
          var tempEl = forecastData[j*8].main.temp + '°F'
          var windEl = 'Wind: ' + forecastData[j*8].wind.speed + 'mph'
          var humidityEl = 'Humidity: ' + forecastData[j*8].main.humidity + '%'
  
          document.querySelectorAll('.dateFive')[j].textContent = dateEl;
          document.querySelectorAll('.iconFive')[j].src = iconEl;
          document.querySelectorAll('.tempFive')[j].textContent = tempEl
          document.querySelectorAll('.windFive')[j].textContent = windEl;
          document.querySelectorAll('.humidityFive')[j].textContent = humidityEl;
        }    
      })
    })
  }
  
)}

  function saveCitySearch(){

    let citySearch = document.getElementById('cityQuery').value;
    let citySearchList = JSON.parse(localStorage.getItem('citySearchList')) || [];

    let citySearchButton = document.createElement('button');
    citySearchButton.textContent = citySearch;
    citySearchButton.classList.add('btn', 'btn-primary', 'btn-block', 'citySearchButton');
    document.getElementById('history-list').appendChild(citySearchButton);
    citySearchButton.addEventListener('click', savedCitySearch)
    //citySearchButton.addEventListener('click', function(e) {
    //  e.preventDefault();
    //  document.getElementById('cityQuery').value = e.target.textContent
    //  document.getElementById('cityQuery').submit()
    //})

    citySearchList.push(citySearch);
    localStorage.setItem('citySearchList', JSON.stringify(citySearchList));
 }
 //load saved history
  function loadHistory() {
    
    let citySearchList = JSON.parse(localStorage.getItem('citySearchList')) || [];
    for (let i = 0; i < citySearchList.length; i++) {
      let citySearchButton = document.createElement('button');
      citySearchButton.textContent = citySearchList[i];
      citySearchButton.classList.add('btn', 'btn-primary', 'btn-block', 'citySearchButton');
      citySearchButton.addEventListener('click', savedCitySearch)
      document.getElementById('history-list').appendChild(citySearchButton);
    }}
  

  search.addEventListener('submit', function(e) {
    e.preventDefault();
    displayWeatherForecast();
    //saves to local storage and creates new button
    saveCitySearch();
  })

  function savedCitySearch(e) {
    e.preventDefault();
    document.getElementById('cityQuery').value = e.target.textContent
    displayWeatherForecast();
  }

 