API_key = "d80e1765a89f0b1a221142fd3d5f9722";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherContainer = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weater span:last-child");
            city.innerText = data.name;
            weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);