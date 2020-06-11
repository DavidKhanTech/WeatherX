//-----------------------API JS---------------------------------------//
const searchButton = document.querySelector('#srchBtn');
// const cityInput = document.querySelector('input');
const zipCode = document.querySelector('.zip');
// const temp = document.querySelector('.temp');



// const DOMAIN = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value}`;
const apiKey = "07f242a168c1acc0be2f290d6b332cde"

async function getTheWeather(e) {
  e.preventDefault()
  const DOMAIN = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value}`;
  let response = await axios.get(`${DOMAIN}&units=imperial&appid=${apiKey}`);
  console.log(response)

  let temp = response.data.main.temp;
  temp.innerHTML = temp + "° F";

}

searchButton.addEventListener('click', getTheWeather)