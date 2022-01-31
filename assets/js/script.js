// globals
var searchButtonEl = document.querySelector("#search-button");
var historyArray = document.querySelector("#cities");
var resetButton = document.querySelector("#resetBtn");

// API fetch and function
var getWeatherApi = function () {
    var cityName = document.getElementById("search-input").value;
    console.log(cityName);
    const weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=1f7f67bb2143af57cf3bf01da71a8e1f&units=imperial";
    fetch(weatherApi)
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
            })
        }
    })

    // save to localStorage
    var savedCities = JSON.parse(localStorage.getItem("city"));
    if (savedCities == null) {
      savedCities = [];
    }
    var favCities = cityName;
    savedCities.push(favCities);
    localStorage.setItem("city", JSON.stringify(savedCities));
    console.log(localStorage.getItem("city"));
    // display searched cities to search history section
    historyArray.innerHTML = savedCities.join('<br/><hr/>');
};

// reset cleared search history
var resetFavorites = function () {
    historyArray.textContent = "";
    localStorage.clear();
    console.log("cleared city search history");
}

// eventListener for search button
searchButtonEl.addEventListener("click", getWeatherApi);

// add event listener to reset saved cities
resetButton.addEventListener("click", resetFavorites);

