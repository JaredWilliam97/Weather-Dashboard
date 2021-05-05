// Attempted this method but had to change
// var apiKey = "1d6fd810a7af591bd185bc2ab7f866ba";
// var apiKey2 = ""
//   .getElementById("search-city-button")
//   .addEventListener("click", function () {
//     var city = "";
//     var url =
//       "http://api.openweathermap.org/data/2.5/weather?q=" +
//       city +
//       "&appid=" +
//       apiKey +
//       "&units=imperial";
//   });
// created new key and started an array
var APIKey = "1d6fd810a7af591bd185bc2ab7f866ba";
var cityArray = [];

function displayCurrentWeather(city) {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&APPID=" +
    APIKey +
    "&units=imperial";

  $.ajax({
    url: queryURL,
    method: "GET",
  })
  .then(function (response) {
    $(".weather-info").empty();
    $(".condition-image").empty();

    var weather = $(".weather-info");

    var tempResponse = response.main.temp;

    var temperature = $("<div>").text("Temperature: " + tempResponse + "℉");
    weather.append(temperature);

    var humidityCall = response.main.humidity;

    var humidity = $("<div>").text("Humidity: " + humidityCall + "%");
    weather.append(humidity);

    var windCall = response.wind.speed;

    var wind = $("<div>").text("Wind Speed: " + windCall + " MPH");
    weather.append(wind);

    var weatherCurrent = response.weather[0].icon;

    var bigCurrent =
      "http://openweathermap.org/img/w/" + weatherCurrent + ".png";

    $(".condition-image").append('<img src="' + bigCurrent + '" />');
  });
}
