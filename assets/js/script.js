// sets global constants
let city = document.querySelector ("#search-input");

// pull city from search box
// let city = $("#search-input").val();

// API fetch and function
const weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=city&APPID=1f7f67bb2143af57cf3bf01da71a8e1f";

var getWeatherApi = function () {
    fetch(weatherApi)
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
            })
        }
    })
};

getWeatherApi();

