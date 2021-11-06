function showTemp(response) {
    let temperature = Math.round(response.data.main.temp)
    let location = response.data.name
    let showTemperature = document.querySelector('#search-location')
    showTemperature.innerHTML = `${location} ${temperature} C`
}

function showPosition(position) {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    let apiKey = 'b6765d68e282aad8b366f98563a2c837'
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(showTemp)
}

function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition)
}

let button = document.querySelector('.current-location')
button.addEventListener('click', getLocation)

function getWeather(response) {
    document.querySelector('h1').innerHTML = response.data.name
    document.querySelector('h3').innerHTML = Math.round(response.data.main.temp)
    document.querySelector('#humidity').innerHTML = response.data.main.humidity
    document.querySelector('#wind').innerHTML = Math.round(
        response.data.wind.speed,
    )
    document.querySelector('#description').innerHTML =
        response.data.weather[0].main
}

function search(city) {
    let apiKey = 'b6765d68e282aad8b366f98563a2c837'
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(getWeather)
    console.log(apiUrl)
}

function handleSubmit(event) {
    event.preventDefault()
    let city = document.querySelector('.new-location').value
    search(city)
}
let searchButton = document.querySelector('#search-form')
searchButton.addEventListener('submit', handleSubmit)

search('Mexico City')