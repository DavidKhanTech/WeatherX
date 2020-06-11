//-----------------------API JS---------------------------------------//
const searchButton = document.querySelector('#srchBtn');
const zipCode = document.querySelector('.zip');
const weather = document.querySelector('.weather')
const apiKey = "07f242a168c1acc0be2f290d6b332cde"

async function getTheWeather(e) {
  e.preventDefault()
  const DOMAIN = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value}`;
  let response = await axios.get(`${DOMAIN}&units=imperial&appid=${apiKey}`);
  // console.log(response)

  //-----Variable temp holds response Data from API
  let temp = response.data.main.temp
  let condition = response.data.weather[0].main

  // console.log(temp)
  let showTemp = document.createElement("h2")
  let textTemp = document.createTextNode(temp + " ° F" + " " + condition);
  weather.append(showTemp)
  showTemp.append(textTemp)
}

searchButton.addEventListener('click', getTheWeather)

//------------------ Clothing Advertisements -------------------------\\
let coldClothes = ""
let hotClothes = ""

if (temp <= 59) {
  console.log(coldClothes)
} else {
  console.log(hotClothes)
}