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

function setWeatherBackground(condition) {
  const body = document.body;

  if (condition.includes("Sunny")) {
    body.style.backgroundImage = "url('sunny.jpg')";
  } else if (condition.includes("Rain")) {
    body.style.backgroundImage = "url('rainy.jpg')";
  } else if (condition.includes("Cloud")) {
    body.style.backgroundImage = "url('cloudy.jpg')";
  } else {
    body.style.backgroundImage = "url('default.jpg')";
  }

  body.style.backgroundSize = "cover";
  body.style.backgroundPosition = "center";
}