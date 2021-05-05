// Created api key

var apiKey = "1d6fd810a7af591bd185bc2ab7f866ba";
var apiKey2 = ""
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
var APIKey = "83fabb81ed82f75df63ff5d8ae957d0c";
var cityArray = [];

function displayCurrentWeather(city) {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&APPID=" +
    APIKey +
    "&units=imperial";

  console.log(queryURL);

