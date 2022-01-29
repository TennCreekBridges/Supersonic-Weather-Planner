console.log('hello');

// pull city from search box
let city = $("#search-input").val();

console.log(city);

// build query
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=1f7f67bb2143af57cf3bf01da71a8e1f";

