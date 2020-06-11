//-----------------------API JS---------------------------------------//
const searchButton = document.querySelector('#srchBtn');
// const cityInput = document.querySelector('input');
const zipCode = document.querySelector('.zip');
// const temp = document.querySelector('.temp');

const value = zipCode.value

const DOMAIN = `http://api.openweathermap.org/data/2.5/weather?zip=80111`;
const apiKey = "07f242a168c1acc0be2f290d6b332cde"

async function getTheWeather(e) {
  e.preventDefault()
  let response = await axios.get(`${DOMAIN}&units=imperial&appid=${apiKey}`);
  console.log(response)

  //   let cityTemp = response.data.city.temp
  //   temp.innerHTML = `${cityTemp}° F`

}

searchButton.addEventListener('click', getTheWeather)
console.log(zipCode.value)
console.log(zipCode)