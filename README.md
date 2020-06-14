# WeatherX

A weather fashion app that shows you the weather and recommends stylish clothes for you to wear!

https://davidkhantech.github.io/WeatherX/

# Project Description

Want to know the weather and what to wear according to zip code?

Would you like fashion tips for that specific vacation location.

WeatherX has the solution.

WeatherX is using Realtime weather data for your everyday fashion needs.

WeatherX checks the weather for any zip code and then recommends what to wear based on the weather conditions.

WeatherX can potentially be a new way to advertise or used for eCommerce

Nowadays, people barely have time to go out and shop for clothes.

WeatherX is currently at its concept stage with great potential and is presently accepting angel investors.

# API and Data Sample

OpenWeatherMap API

# API Data Sample

{
"coord": {"lon": -122.08,"lat": 37.39},
"weather": [
{
"id": 800,
"main": "Clear",
"description": "clear sky",
"icon": "01d"
}
],
"base": "stations",
"main": {
"temp": 282.55,
"feels_like": 281.86,
"temp_min": 280.37,
"temp_max": 284.26,
"pressure": 1023,
"humidity": 100
},
"visibility": 16093,
"wind": {
"speed": 1.5,
"deg": 350
},
"clouds": {
"all": 1
},
"dt": 1560350645,
"sys": {
"type": 1,
"id": 5122,
"message": 0.0139,
"country": "US",
"sunrise": 1560343627,
"sunset": 1560396563
},
"timezone": -25200,
"id": 420006353,
"name": "Mountain View",
"cod": 200
}

# Wireframes

https://ibb.co/fGcZW2D

# MVP/PostMVP

1. Pull Weather Data

2. Add Clothing Conditions

# MVP

Pull Weather Data

# PostMVP

Add Clothing Condition

# Project Schedule

Day Deliverable Status

Monday, 6/8 Project plan; Project approval

Tuesday, 6/9 Whiteboard functionality: Structure and Design (HTML & CSS)

Wednesday, 6/10 Code for API

Thursday, 6/11 Code for API/ Attempt clothes recommendations

Friday, 6/12 Attempt clothes recommendations/
Finalize CSS and Completed MVP

Monday, 6/15 Present Project!

# Priority Matrix

1. Structure Html and basic CSS design

2. Connect API for Weather

3. Connect Clothing recommendations

# Timeframes

HTML Structure Estimated: 5hr Actual: 3hr

Basic CSS Styles Estimated: 5hr Actual: 7hr

Code API to check weather Estimated: 10hr Actual: 10hr

Code if else with img src's of outfits's Estimated: 5hr Actual:4hr

Total Hours- Estimated: 40hr Actual: 24hr

# Code Snippet

//-----Variable temp holds response Data from API-----//

let temp = response.data.main.temp
let condition = response.data.weather[0].main

let showTemp = document.createElement("h2")
let textTemp = document.createTextNode(temp + " ° F" + " " + condition);
weather.append(showTemp)
showTemp.append(textTemp)
setTimeout("showIt()", 3000);
}

# Change Log

I originally wanted to have the weather checked instantly using
another Geo Location API, but then I realized if someone wants to
check for a different location that would not be possible, so I changed the data to pull using a zip
code.
