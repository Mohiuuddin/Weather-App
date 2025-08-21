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
    const currentCondition = createElement('p', 'currentCondition');
    const address = createElement('p', 'address');
    const weatherDetails = createElement('div', 'weatherDetails');
    const tempDiv = createElement('div', 'tempDiv');
    const details = createElement('div', 'details');
    const feelsLike = createElement('p', 'feelsLike');
    const windspeed = createElement('p', 'windspeed');
    const humidity = createElement('p', 'humidity');

    currentCondition.textContent = data.current.conditions;
    address.textContent= data.address;
    tempDiv.innerHTML = `${fahrenheitToCelsius(data.current.temp)}<sup class='suptext'>°C</sup>`;
    feelsLike.innerHTML = `Feels Like: ${fahrenheitToCelsius(data.current.feelsLike)}<sup>°C</sup>`;
    windspeed.textContent = `Wind Speed: ${data.current.windspeed} MPH`;
    humidity.textContent =`Humidity: ${data.current.humidity}%`;

    details.append(feelsLike, windspeed, humidity);

    weatherData.appendChild(currentCondition);
    weatherData.appendChild(address);
    weatherDetails.appendChild(tempDiv);
    weatherDetails.appendChild(details);
    weatherData.appendChild(weatherDetails);
    

}