const apiKey = "230e219a0d87f70209e6a2c8b2ff3d9e";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp - 273) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/hrs ";
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
