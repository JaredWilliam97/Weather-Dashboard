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
// ran this function to get current weather
function displayCurrentWeather(city) {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&APPID=" +
    APIKey +
    "&units=imperial";
  // used jQuery to get my url and used .then to start the function
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
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
  //created the search button
}
$("#search-button").on("click", function (event) {
  event.preventDefault();

  var inputCity = $("#city-input").val().trim();
  cityArray.push(inputCity);

  $(".city").text(inputCity);

  var todayDate = $(".today-date");
  console.log(todayDate);

  $(todayDate).text("(" + moment().format("MM/DD/YYYY") + ")");

  var fiveDayText = $("#five-day-text");
  console.log(fiveDayText);
  $(fiveDayText).text("3-Hour Forecast: ");

  displayCurrentWeather(inputCity);
  displaySearchedCity(inputCity);
  fiveDayForecast(inputCity);
});
//created displayed search city
function displaySearchedCity(newCity) {
  $(".city-card-body").empty();

  localStorage.setItem("searchedCity", JSON.stringify(cityArray));

  for (var i = 0; i < cityArray.length; i++) {
    var cityName = $("<p>");
    cityName.addClass("new-city-p");
    cityName.attr(cityArray[i]);
    cityName.text(cityArray[i]);

    $(".city-card-body").append(cityName);
  }
}
function fiveDayForecast(inputCityName) {
  var queryTemp =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    inputCityName +
    "&APPID=" +
    APIKey +
    "&units=imperial";
  var queryConditionImage =
    // used jquery and ajax to get the 5 day forecast
    $.ajax({
      url: queryTemp,
      method: "GET",
    }).then(function (tempAnswer) {
      $(".forecastCards").empty();

      for (var i = 0; i < 5; i++) {
        var forecastDate = tempAnswer.list[i].dt_txt.slice(0, 10);

        var theTemp = tempAnswer.list[i].main.temp;
        var theHumidity = tempAnswer.list[i].main.humidity;
        var weatherResponse = tempAnswer.list[i].weather[0].icon;

        var mapover =
          "http://openweathermap.org/img/w/" + weatherResponse + ".png";

        var cardContent =
          "<div class='col-sm-2 cardDay'><p class='dateForecast'>" +
          forecastDate +
          "</p><p>" +
          '<img src="' +
          mapover +
          '" />' +
          "</p><p>" +
          "Temp: " +
          theTemp +
          "℉" +
          "</p><p>" +
          "Humidity: " +
          theHumidity +
          "%" +
          "</p></div>";

        $(".forecastCards").append(cardContent);
      }
    });
}
