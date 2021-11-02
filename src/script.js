function city(event, response) {
    event.preventDefault()
    let apiKey = '4484f27c974cf29d19799c9876c88990'
    let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?'
    axios.get(`${apiUrl}&appid=${apiKey}`).then(response)
    console.log(response)

    let input = document.querySelector('#search')
    let h1 = document.querySelector('h1')
    h1.innerHTML = input.value.toUpperCase()
}

let form = document.querySelector('form')
form.addEventListener('submit', city)
    //q=${input}