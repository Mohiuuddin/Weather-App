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
    const currentCondition = createElement('p', 'currentCondition');
    const address = createElement('p', 'address');
    const tempDiv = createElement('div', 'tempDiv');
    currentCondition.textContent = data.current.conditions;
    address.textContent= data.address;
    tempDiv.textContent = `${fahrenheitToCelsius(data.current.temp)}C`;
    weatherData.appendChild(currentCondition);
    weatherData.appendChild(address);
    weatherData.appendChild(tempDiv);
    

}