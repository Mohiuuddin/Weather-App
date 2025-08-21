import { renderWeather, renderSearchBar } from "./pages/weather";
import { getApiData, showLoader, hideLoader, setWeatherBackground } from "./pages/functions";
import "./styles.css";


const {searchInput, searchBtn} = renderSearchBar();

showLoader();
getApiData('dhaka').then(data=>{
 renderWeather(data);
}).catch(err => {
    console.error("Error fetching weather:", err);
    const weatherData = document.getElementById('weatherData');
    weatherData.innerHTML = "<p style='color: red;'>Failed to load weather data. Please try again.</p>";
  }).finally(()=> hideLoader());

searchBtn.addEventListener('click', ()=>{
   const city = searchInput.value.trim();
   if (!city) return;
   searchInput.value = "";
   showLoader();
   getApiData(city).then(data=>{
      
    setWeatherBackground(data.current.conditions);
    renderWeather(data);
    
   }).catch(err => {
    console.error("Error fetching weather:", err);
    const weatherData = document.getElementById('weatherData');
    weatherData.innerHTML = "<p class = 'errorText'>City not found! Please enter a correct city name.</p>";
  }).finally(()=>hideLoader()); 
});


