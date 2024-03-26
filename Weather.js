const apiKey = "cf094f80ec14dcb16cfbd1a7f191a6dd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon')


async function checkWeather(city) {
const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);


  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°F";
  document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
  document.querySelector('.wind').innerHTML = data.wind.speed + "mph";


  if(data.weather[0].main == "Clouds") {
    weatherIcon.src = "./Images/clouds.png"
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "./Images/clear.png"
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "./Images/drizzle.png"
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "./Images/mist.png"
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "./Images/rain.png"
  } else if (data.weather[0] == "Snow") {
    weatherIcon.src = "./Images/snow.png"
  }

  document.querySelector(".weather").style.display = "block"

}


searchbtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
})
