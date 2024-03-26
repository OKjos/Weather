const apiKey = "cf094f80ec14dcb16cfbd1a7f191a6dd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=cf094f80ec14dcb16cfbd1a7f191a6dd&units=imperial";

// const something to query the city input
// const something to query the search button
//weatherIcon query 

// add city
async function checkWeather() {
  //add city
  const response = await fetch(apiUrl + '&appid=${apikey}');
  let data = await response.json();

  console.log(data);


  //query city.inner = data.name
  //same as above for temp .main.temp + °F need math.round
  //same as first for humidity .main.humdity + %
  //same as first for wind .main.wind.speed + mph


  //if statement for image changing 

}


//add city
checkWeather();