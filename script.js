document.addEventListener('DOMContentLoaded', function () {
const apikey = "fcf10e91f772a9b7828696899ba6cd7b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.getElementById("searchbtn");
const weatherimg = document.getElementById("Weather-img");
const weathername = document.getElementById("weathr");
const hidedetails = document.getElementById("forhide");
const oops = document.getElementById("oops");

async function chackwather(city) {
    const responce =await fetch(apiurl + city + `&appid=${apikey}`);
    const data = await responce.json();
    console.log(data);

    if(data.cod == '404'){
        weatherimg.src = "./assets/4042.png";
        weatherimg.style.height = "250px";
        hidedetails.style.display = "none";
        oops.style.display = "flex";
    }
    else{
        hidedetails.style.display = "flex";
        weatherimg.style.height = "200px";
        oops.style.display = "none";
    }

    document.getElementById("cityname").innerHTML = data.name;
    document.querySelector(".nextdiv h1").innerHTML = Math.round(data.main.temp) + `<span>°C</span>`;
    document.querySelector(".humadity p").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind p").innerHTML = data.wind.speed + "   Km/h";

    switch (data.weather[0].main) {
        case "Clouds":
            weatherimg.src = "./assets/cloud.png";
            weathername.innerHTML = "Clouds";
            break;
        case "Clear":
            weatherimg.src = "./assets/clear.png";
            weathername.innerHTML = "Clear";
            break;
        case "Rain":
            weatherimg.src = "./assets/rain.png";
            weathername.innerHTML = "Rain";
            break;
        case "Snow":
            weatherimg.src = "./assets/snow.png";
            weathername.innerHTML = "Snow";
            break;
        case "Mist":
            weatherimg.src = "./assets/mist.png";
            weathername.innerHTML = "Mist";
            break;
        default:
            weatherimg.src = "./assets/cloud.png";
            weathername.innerHTML = "Clouds";
            break;
    }
}


searchbtn.addEventListener("click", function () {
    // const city = .trim();
    chackwather(searchbox.value.trim());
});
});