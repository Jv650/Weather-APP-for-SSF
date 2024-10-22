

//Create API call
async function fetchWeatherData() { //change to async function
    try {
    const response = await fetch (
        'https://api.openweathermap.org/data/2.5/weather?lat=37.6547&lon=-122.4077&appid=4361b88f0f37e3b404be7ce6d94de062'
    );
    const data = await response.json();
    //Selecting data from API that I want to display on my site
    const city = data.name
    const country = data.sys.country
    const temp = data.main.temp
    const tempFeels = data.main.feels_like
    const humidity = data.main.humidity
    const wind = data.wind.speed
    const weatherDescription = data.weather[0].description //the [0] is used because i needed to access array elements 
    displayWeather(city, country, temp, tempFeels, humidity, wind, weatherDescription)
    } catch (error) {
        console.error('Error fetching results:', error)
    }
}
fetchWeatherData();
    /*console.log(`wind: ${wind}`)
    console.log(`Temperature: ${temp}`)
    console.log(`Feels like: ${tempFeels}`)
    console.log(`humid: ${humidity}`)
    console.log(`city: ${city}, ${country}`)
    console.log(`weather description: ${weatherDescription}`)*/

    /*.catch(error => {
    console.log('Error fetching results:', error);});*/


//Add Event Listener to the get weather button
const button = document.querySelector('#get-weather-btn');
button.addEventListener('click', (event) => {
        document.getElementById('weather-info').hidden = false;
        button.hidden = true;
        document.getElementById('hide-weather-btn').hidden = false;
    });    

//Hide the hide weather button
document.getElementById('hide-weather-btn').addEventListener('click', (event) => {
    document.getElementById('weather-info').hidden = true;
    document.getElementById('hide-weather-btn').hidden = true;
    document.querySelector('#get-weather-btn').hidden = false;
})



//Display the weather data
function displayWeather(city, country, temp, tempFeels, humidity, wind, weatherDescription){
let weatherInfo = document.getElementById('weather-info');
weatherInfo.innerHTML = `
    <p id='city-name'>${city}, ${country}</p>
    <p id='temperature'>Temperature: ${temp}</p>
    <p id=weather-description'>Weather Description: ${weatherDescription}</p>
    <p id='feels-like'>What it feels like: ${tempFeels}</p>
    <p id='humidity'>Humidity: ${humidity}</p>
    <p id='wind'>Wind: ${wind}</p>`;
/*document.getElementById('city-name').textContent = `City: ${city}`
document.getElementById('temperature').textContent =`Temperature: ${temp}`
document.getElementById('weather-description').textContent =`Weather Description: ${weatherDescription}`
document.getElementById('feels-like').textContent =`What it feels like: ${tempFeels}`
document.getElementById('humidity').textContent =`Humidity: ${humidity}`
document.getElementById('wind').textContent =`Wind: ${wind}`*/

//document.body.appendChild(weatherInfo);
}
displayWeather();




/*const button = document.querySelector('#get-weather-btn');
button.addEventListener('click', fetchWeatherData);*/




