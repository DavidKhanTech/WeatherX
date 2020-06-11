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
  let temp = response.data.main.temp
  // console.log(temp)
  let showTemp = document.createElement("h2")
  let textTemp = document.createTextNode(temp + "° F");
  weather.append(showTemp)
  showTemp.append(textTemp)
}

searchButton.addEventListener('click', getTheWeather)