// input 
let findBtn = document.querySelector("#findBtn");
let city = document.querySelector("#city-name");
let apikey =  "ddc04b7702a58b520f316359bdcd48a6";

// output
let weatherDescription = document.querySelector("#weather-description");
let temp = document.querySelector("#temp")
let windSpeed = document.querySelector("#wind-speed");
let humidity = document.querySelector("#humidity");

function getWeatherAPI(){

    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&APPID=${apikey}`;
    
    fetch(apiURL)
    .then(response => response.json())
    .then((data)=> {
        weatherDescription.innerHTML = data.weather[0].description;
        temp.innerHTML = `${data.main.temp}°C`;
        windSpeed.innerHTML = `${data.wind.speed}m/s`;
        humidity.innerHTML = `${data.main.humidity}%`

    })
}

findBtn.addEventListener("click", getWeatherAPI);