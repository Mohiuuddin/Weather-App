import { renderWeather, renderSearchBar } from "./pages/weather";
import { getApiData } from "./pages/functions";
import "./styles.css";


const {searchInput, searchBtn} = renderSearchBar();

getApiData('dhaka').then(data=>{
 renderWeather(data);
});

searchBtn.addEventListener('click', ()=>{
   const city = searchInput.value.trim();
   if (!city) return;
   searchInput.value = "";
   getApiData(city).then(data=>{
    renderWeather(data);
   }) 
});


