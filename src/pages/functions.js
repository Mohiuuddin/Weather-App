import nightImg from "../asset/night.jpg";
import sunnyImg from "../asset/sunny.jpg";
import sunnyImg1 from "../asset/sunny1.jpg";
import foggyImg from "../asset/fog-mist.jpg";
import snowyImg from "../asset/snowy.jpg";
import rainyImg from "../asset/rain.jpg";
import thunderImg from "../asset/thunder.jpg";
import cloudyImg from "../asset/cloudy.jpg";
import windyImg from "../asset/windy.jpg";

export async function getApiData(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
      location
    )}?key=PPPQVTRQQEZN3YQZF3U9SSGEM`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
  return dataObj(weatherData);
}

export function dataObj(rawData) {
  return {
    address: rawData.address,
    current: {
      temp: rawData.currentConditions.temp,
      conditions: rawData.currentConditions.conditions,
      feelsLike: rawData.currentConditions.feelslike,
      humidity: rawData.currentConditions.humidity,
      windspeed: rawData.currentConditions.windspeed,
      date: rawData.days[0].datetime,
    },
    forecast: rawData.days.slice(0, 7).map((day) => ({
      date: day.datetime,
      tempMax: day.tempmax,
      tempMin: day.tempmin,
      conditions: day.conditions,
    })),
  };
}


export function createElement(tagName, addClass) {
    const el = document.createElement(tagName);
    if (addClass !== "") {
        el.classList.add(addClass);
    }
    return el;
}

export function createImg(src, alt){
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;;
    return img;
}  

export function fahrenheitToCelsius(temp){
  let degree =  (temp - 32) * 5 / 9;
  return Math.ceil(degree);
} 

export function showLoader() {
  document.getElementById("loader").style.display = "flex";
}

export function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

export function setWeatherBackground(condition) {
  const body = document.body;
  const cond = condition.toLowerCase().split(" ")[0].replace(/[^a-z]/g, ""); 

  let bgImage = nightImg; 

  if (cond === "sunny" || cond === "clear") {
    bgImage = sunnyImg1;
  } else if (cond === "cloud" || cond === "overcast" || cond === "partially") {
    bgImage = cloudyImg;
  } else if (cond === "rain" || cond === "drizzle" || cond === "showers") {
    bgImage = rainyImg;
  } else if (cond === "thunder") {
    bgImage = thunderImg;
  } else if (cond === "snow") {
    bgImage = snowyImg;
  } else if (cond === "fog" || cond === "haze" || cond === "mist") {
    bgImage = foggyImg;
  } else if (cond === "wind") {
    bgImage = windyImg;
  }

  body.style.background = `url('${bgImage}') no-repeat center center fixed`;
  
}
