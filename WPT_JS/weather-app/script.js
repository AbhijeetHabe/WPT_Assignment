const weatherData = document.getElementById("weather-data")
const inputVal = document.getElementById("city-input")
const city = inputVal.value

async function getWeatherDetails() {
    const city = inputVal.value
    const API_ID = config.API_ID
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_ID}&units=metric`
    
    let jqXhr = jQuery.get(url)
    jqXhr.done((data) => {
        const temperature = Math.round(data.main.temp)
        const description = data.weather[0].description
        const icon = data.weather[0].icon
        const details = [
            `Feels like: ${data.main.feels_like}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind Speed: ${data.wind.speed}`
        ]
        weatherData.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon" />`
        weatherData.querySelector(".temperature").textContent = `${temperature}°C`
        weatherData.querySelector(".description").textContent = description
        weatherData.querySelector(".details").innerHTML = details.map((detail)=> `<div>${detail}</div>`).join("")
    })
}

// async function getWeatherData(city) {
//     const API_ID = config.API_ID
//     url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_ID}&units=metric`
//     let response = await fetch(url)
//     let data = await response.json()
    
//     const temperature = Math.round(data.main.temp)
//     const description = data.weather[0].description
//     const icon = data.weather[0].icon
//     const details = [
//         `Feels like: ${data.main.feels_like}`,
//         `Humidity: ${data.main.humidity}%`,
//         `Wind Speed: ${data.wind.speed}`
//     ]
//     weatherData.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon" />`
//     weatherData.querySelector(".temperature").textContent = `${temperature}°C`
//     weatherData.querySelector(".description").textContent = description
//     weatherData.querySelector(".details").innerHTML = details.map((detail)=> `<div>${detail}</div>`).join("")
// }



