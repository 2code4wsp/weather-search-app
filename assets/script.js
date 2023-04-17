//global elements for each id
//function init() {
    var location = document.querySelector('#city-input');
    var cityVal = document.querySelector('#city');
    var btnSub = document.querySelector('#city-click');
    //var pictureEl = document.getElementById('photo');
    //var temp = document.querySelector('#temp');
    //var humid = document.querySelector('#humidity');
    //var wind = document.querySelector('#wind');

    var apiK = '8d284b80a31339b43b0995d300fbe089';
    requestURL = 'http://api.openweathermap.org/'
    //https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={apiK}

    //make API call
    function getWeather(lat, lon) {
        let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiK}`;
        fetch(api).then(function (response) {
            return response.json()
        }).then(data => displayWeather(data))
        console.log(response);
        displayWeather.append(response);
    }

    function displayWeather(data) {
        const temp = data.display - current.temp;
        const humidity = data.display - current.humidity;
        const wind = data.display - current.wind;

        const tempElement = document.createElement('#temp');
        tempElement.innerHTML = `${temp} ${tempElement.innerHTML} K`;
        const humidElement = document.createElement('#humidity');
        humidityElement.innerHTML = `${humidity} ${humidElement} %`;
        const windElement = document.createElement('#wind');
        windElement.innerHTML = `${wind} ${windElement.innerHTML} MPH`;

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
        fetch(`http://api.openweathermap.org/data/2.5/weather?q={city name}&limit=5&appid=8d284b80a31339b43b0995d300fbe089`).then(res => res.json())
            .then(data => {
                var lat = data[0].lat;
                var lon = data[0].lon;
                var cityName = data[0].name;
                getWeather(lat, lon, cityName)
                console.log(cityName);
            })

//get the 5 day out forecast info
//var cityId = response.data.city;
//var forecastUrl = "api.openweathermap.org/data/2.5/forecast?q={city name},{state code},{country code}&appid={apiK}";

        

     });