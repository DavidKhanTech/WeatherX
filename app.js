//-----------------------API JS---------------------------------------//

const DOMAIN = "api.openweathermap.org/data/2.5/weather?q=NewYork,ny&APPID=";
const apiKey = "07f242a168c1acc0be2f290d6b332cde"

const searchButton = document.querySelector('.searchButton');
const cityText = document.querySelector('input');
const searchTerm = document.querySelector('.city');
const temp = document.querySelector('.temp');

async function getTheWeather() {

  let response = await axios.get(`${DOMAIN}${cityText.input}&units=imperial&appid=${apiKey} `);
  console.log(response)

  //   let cityTemp = response.data.city.temp
  //   temp.innerHTML = `${cityTemp}° F`

}

searchButton.addEventListener('click', getTheWeather)