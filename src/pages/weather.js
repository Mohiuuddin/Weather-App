import { createElement, fahrenheitToCelsius } from "./functions";

export function renderSearchBar(){
    const searchDiv = document.querySelector("#searchBar");
    const searchInput = createElement('input', 'searchInput');
    const searchBtn = createElement('button', 'searchBtn');
    searchInput.type = 'search';
    searchInput.placeholder = 'Search a city';
    searchBtn.textContent = 'Search';

    searchDiv.appendChild(searchInput);
    searchDiv.appendChild(searchBtn);
    
    return {searchDiv, searchInput, searchBtn};

}

export function renderWeather(data){
    console.log(data);
    const weatherData = document.getElementById('weatherData');
    weatherData.innerHTML = "";
    const currentDate = createElement('p', 'currentDate');
    const currentCondition = createElement('p', 'currentCondition');
    const address = createElement('p', 'address');
    const weatherDetails = createElement('div', 'weatherDetails');
    const tempDiv = createElement('div', 'tempDiv');
    const details = createElement('div', 'details');
    const feelsLike = createElement('p', 'feelsLike');
    const windspeed = createElement('p', 'windspeed');
    const humidity = createElement('p', 'humidity');

    const currDate = new Date(data.current.date);
    currentDate.textContent = currDate.toLocaleDateString('en-US', { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    });
    currentCondition.textContent = data.current.conditions;
    address.textContent= data.address;
    tempDiv.innerHTML = `${fahrenheitToCelsius(data.current.temp)}<sup class='suptext'>°C</sup>`;
    feelsLike.innerHTML = `Feels Like: ${fahrenheitToCelsius(data.current.feelsLike)}<sup>°C</sup>`;
    windspeed.textContent = `Wind Speed: ${data.current.windspeed} MPH`;
    humidity.textContent =`Humidity: ${data.current.humidity}%`;
    details.append(feelsLike, windspeed, humidity);

    weatherData.appendChild(currentDate);
    weatherData.appendChild(currentCondition);
    weatherData.appendChild(address);
    weatherDetails.appendChild(tempDiv);
    weatherDetails.appendChild(details);
    weatherData.appendChild(weatherDetails);

    const forecast = document.getElementById('forecast');
    forecast.innerHTML="";
    data.forecast.forEach((day) => {
    const forecastDay = createElement('div', 'forecast-day');
    const weatherIcon = createElement('i', 'weatherIcon');
    weatherIcon.classList.add('fas');
    switch (day.conditions.toLowerCase()) {
  case 'rain':
  case 'rain, overcast':
    weatherIcon.classList.add('fa-cloud-showers-heavy');
    break;

  case 'partially cloudy':
  case 'cloudy':
    weatherIcon.classList.add('fa-cloud');
    break;

  case 'clear':
  case 'sunny':
    weatherIcon.classList.add('fa-sun');
    break;

  case 'snow':
  case 'snow showers':
    weatherIcon.classList.add('fa-snowflake');
    break;

  case 'fog':
  case 'mist':
    weatherIcon.classList.add('fa-smog');
    break;

  case 'windy':
  case 'wind':
    weatherIcon.classList.add('fa-wind');
    break;

  default:
    weatherIcon.classList.add('fa-cloud'); 
}
    const dayName = createElement('p', 'day');
     const date = new Date(day.date);
    dayName.textContent = date.toLocaleDateString('en-US', { weekday: 'short' });
    const temp = createElement('p', 'temp');
    temp.textContent = `${fahrenheitToCelsius(day.tempMax)}°C / ${fahrenheitToCelsius(day.tempMin)}°C`;  
    const current = createElement('p', 'current');
    current.textContent = `${day.conditions}`;
    forecastDay.append( weatherIcon, dayName, temp, current);
    forecast.appendChild(forecastDay);
    });
    
    

}