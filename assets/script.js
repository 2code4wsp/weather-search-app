//global elements for each id
//function init() {
var location = document.querySelector('#city-input');
var cityVal = document.querySelector('#city');
var btnSub = document.querySelector('#city-click');
//var pictureEl = document.getElementById('photo');
var temp = document.querySelector('#temp');
var humid = document.querySelector('#humidity');
var wind = document.querySelector('#wind');

var apiK = '8d284b80a31339b43b0995d300fbe089';
//requestURL = 'http://api.openweathermap.org/'
//https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={apiK}

//make API call
function getWeather(lat, lon) {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiK}`;
    fetch(api).then(function (response) {
        return response.json()
            .then(data => displayWeather(data))
    })
}

function displayWeather(data) {
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const wind = data.main.wind;

    const tempElement = document.createElement('div');
    tempElement.innerHTML = `${temp} ${tempElement.innerHTML}`;
    response.appendChild(tempElement);
    const humidElement = document.createElement('div');
    humidityElement.innerHTML = `${humidity} ${humidElement}`;
    response.appendChild(humidityElement);
    const windElement = document.createElement('div');
    windElement.innerHTML = `${wind} ${windElement.innerHTML}`;
    response.appendChild(windElement);

}

//parse the response & display current weather
const currentDate = new Date(response.data.currentDate);
console.log(currentDate);
const day = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();
locationEl.innerHTML = response.data.location + ' ' + day + ' ' + month + ' ' + year;
//var weatherPic = response.data.weather[0].icon;




//add button functionality
btnSub.addEventListener("click", function () {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&limit=5&appid=8d284b80a31339b43b0995d300fbe089`)
        .then(res => res.json())
        .then(data => {
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            var cityName = data.name;
            getWeather(lat, lon, cityName);
            console.log(cityName);
});
});

//get the 5 day out forecast info
var cityName = data.name;
var countryCode = data.sys.country;
var forecastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName},${countryCode}&appid=${apiK}`;
fetch(forecastUrl).then(res => res.json())
    .then(data => {
        const forecastEl = document.querySelectorAll(".forecast");
        for (let i = 0; i < forecastEl.length; i++) {
            forecastEl[i].innerHTML = "";
            const forecastDate = new Date(data.list[i].dt * 1000);
            forecastEl[i].appendChild(document.createTextNode(forecastDate.toDateString()));
        }


    });