// globals
var searchButtonEl = document.querySelector('#search-button');

// API fetch and function
var getWeatherApi = function () {
    var cityName = document.getElementById('search-input').value;
    console.log(cityName);
    const weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=1f7f67bb2143af57cf3bf01da71a8e1f";
    fetch(weatherApi)
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
            })
        }
    })
};

// save to localStorage

// eventListener for Search button
searchButtonEl.addEventListener("click", getWeatherApi);
