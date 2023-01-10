

// search.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const citySearch = document.getElementById('query').value;
//     const API_KEY = '936813a4181da5148d9c73c2b2fe7ccc'
//     const Time_Key = 'Q3H3015UOY45'
//     const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${API_KEY}&units=imperial`;
//     const timeurl = 'http://api.timezonedb.com/v2.1/get-time-zone?key=${Time_Key}&format=json&by=position&lat=${lat}&lng=${lon}';
    


//         fetch(url2)
//         .then(response => response.json())
//         .then(data => {
//             lat = data.coord.lat;
//             lon = data.coord.lon;
//             const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;

//             return fetch(url);
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             const temp = data.main.temp;
//             const weather = data.weather[0].main;
//             const city = data.name;
//             const country = data.sys.country;
//             const icon = data.weather[0].icon;
//             const description = data.weather[0].description;
//             const humidity = data.main.humidity;
//             const wind = data.wind.speed;
           

           
//             document.getElementById('temp').textContent =
//             'Current Temp: ' + temp + '°F';
//             document.getElementById('country').textContent = 'Country: ' + country;
//             document.getElementById('city').textContent = 'City: ' + city;
//             document.getElementById('weather').textContent = 'Weather: ' + weather + ' - ' + description;
//             document.getElementById(
//                 'weathericon'
//             ).src = 'http://openweathermap.org/img/w/' + icon + '.png';
//             document.getElementById('humidity').textContent =
//             'Humidity: ' + humidity + '%';
//             document.getElementById('wind').textContent = 'Wind: ' + wind + 'mph';

//         })
//       })

console.log(dayjs().format('MM/DD/YYYY'));

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
        document.getElementById('wind').textContent = 'Wind: ' + wind + 'mph';



          function saveSearch() {
            
            localStorage.setItem("search", citySearch);
            // console.log(citySearch);
        
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
              container.appendChild(button);
            }
          }

          displaySearchHistory();


          // document.getElementById("submit").addEventListener("click", function() {
          //   var weatherContainer = document.getElementById("current");
          //   weatherContainer.classList.remove("hidden");
          // });

const API_KEY = '936813a4181da5148d9c73c2b2fe7ccc';
const citySearch5 = document.getElementById('query').value;

const url5 = `https://api.openweathermap.org/data/2.5/forecast?q=${citySearch5}&appid=${API_KEY}&units=imperial`;

fetch(url5)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Get the forecast container element
    const forecastContainer = document.getElementById('fiveDay');
    // Loop through the forecast data and create a forecast card for each day
    let dayData = data.list;



const fiveeDay = document.getElementById('fiveDay');
  console.log('api')
  for (let i = 0; i < data.list.length; i += 8) {
    var dateEl = dayjs.unix(dayData[i].dt).format('MM/DD/YYYY')
var iconEl = 'http://openweathermap.org/img/w/' + dayData[i].weather[0].icon + '.png'
    var tempEl = dayData[i].main.temp + '°F'
  for (let j=0; j < 5; j++) {
  
    console.log('loop')
 
document.querySelectorAll('.date5')[j].textContent = dateEl;
document.querySelectorAll('.icon5')[j].src = iconEl;
document.querySelectorAll('.temp5')[j].textContent = tempEl;
// console.log('fiveDay')
}



  
     forecastDate = new Date(dayData.dt_txt);
    if (forecastDate.getHours() === 0) {
      // Create and append forecast card elements using dayData
    }
  } 
  })

})

})

 
    






 





