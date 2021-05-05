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
var APIKey = "1d6fd810a7af591bd185bc2ab7f866ba";
var cityArray = [];

function displayCurrentWeather(city) {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&APPID=" +
    APIKey +
    "&units=imperial";

    $("#search-button").on("click", function (event) {
      event.preventDefault();
    
      var inputCityName = $("#city-input").val().trim();
      cityArray.push(inputCityName);
    
      $(".city").text(inputCityName);
    
      var todayDate = $(".today-date");
      console.log(todayDate);
    
      // Should I have added a <br> here?
      $(todayDate).text("(" + moment().format("MM/DD/YYYY") + ")");
    
      var fiveDayText = $("#five-day-text");
      console.log(fiveDayText);
      $(fiveDayText).text("3-Hour Forecast: ");
    
      // These are the functions in one place
    
      displayCurrentWeather(inputCityName);
      displaySearchedCity(inputCityName);
      fiveDayForecast(inputCityName);
      console.log(cityArray);
    });
