function resetInput(){
    document.getElementById('city-name').value = ''
}

const app_id = "56704570548cd97ee6c4d5aaab995ef5"
let city_name = ''
let data

const fetchWeatherData = () => {
        event.preventDefault()
        
        city_name = document.getElementById('city-name').value
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${app_id}&units=metric`)
            .then(response => response.json())
            .then(response => {
                if(response.cod === '404'){
                    alert('City not found!. Please enter a valid city name.')
                    return
                }
                else{
                    document.getElementById("weather-temp").innerHTML = `temp: ${Math.round(response.main.temp)} &#176;C`
                }

                let main = response.weather[0].main;
                let description = response.weather[0].description;
                let pressure = response.main.pressure;
                let humidity = response.main.humidity;
                let name1 = response.name;

                document.getElementById("heading").innnerHTML = `${name1}`
                document.getElementById("weather-main").innerHTML = `${main}`
                document.getElementById("weather-description").innerHTML = `${description}`
                document.getElementById("weather-pressure").innerHTML = `Pressure: ${pressure} hPa`
                document.getElementById("weather-humidity").innerHTML = `Humidity: ${humidity}%`

                // Setting background image based on weather
                const  BACKGROUND_IMAGES = {
                    'Thunderstorm' : 'weather-animations/Thunderstrom.avif',
                    'Drizzle' : 'weather-animations/Drizzle.avif',
                    'Rain' : 'weather-animations/rain.avif',
                    'Snow' : 'weather-animations/snow.avif',
                    'Clear' : 'weather-animations/clear.avif',
                    'Clouds' : 'weather-animations/clouds.avif',
                    'Haze' : 'weather-animations/haze.avif',
                    'fog': 'weather-animation/fog.avif',

                }
                const backgroundImageUrl = BACKGROUND_IMAGES[main] || BACKGROUND_IMAGES['Clear'];
                document.getElementById("card").style.backgroundImage = `url('${backgroundImageUrl}')`
        })
}