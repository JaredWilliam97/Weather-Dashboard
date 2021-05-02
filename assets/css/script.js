var apiKey = "1d6fd810a7af591bd185bc2ab7f866ba";

document
  .getElementById("search-city-button")
  .addEventListener("click", function () {
    var city = "";
    var url =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      apiKey +
      "&units=imperial";
  });
