//-----------------------API JS---------------------------------------//

const DOMAIN = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID";
const apiKey = "07f242a168c1acc0be2f290d6b332cde"

const searchButton = document.querySelector('.searchButton');
const cityText = document.querySelector('input');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');

async function getTheWeather() {

  let response = await axios.get(`${DOMAIN}${cityText.input}&units=imperial&appid=${apiKey} `);
  console.log(response)


}

searchButton.addEventListener('click', getTheWeather)
