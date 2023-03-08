import {  mainDisplay , updateStorage } from "../index";
import addNewCity from "./addNew";
import { updateAll } from "./apiActions";

export default function renderCities(allCities) {
    
    updateAll();
    mainDisplay.classList = 'main-display';
    document.body.appendChild(mainDisplay);

    mainDisplay.innerText = '';

    for (let index = 0; index < allCities.length; index++) {
            
        const cityCard = document.createElement('div');
        cityCard.classList = 'city-card';
        mainDisplay.appendChild(cityCard);

        const cityName = document.createElement('h2');
        cityName.classList = 'city-name';
        cityName.textContent = allCities[index].cityName;
        cityCard.appendChild(cityName);

        const cityTemp = document.createElement('p');
        cityTemp.classList = 'city-temp';
        cityTemp.textContent = 'Current Temp: ' + Math.round(allCities[index].currentTemp) + ' \u00B0F';
        cityCard.appendChild(cityTemp);

        const cityTempHigh = document.createElement('p');
        cityTempHigh.classList = 'city-temp-high';
        cityTempHigh.textContent = 'High Temp: ' + Math.round(allCities[index].highTemp) + ' \u00B0F';
        cityCard.appendChild(cityTempHigh);

        const cityTempLow = document.createElement('p');
        cityTempLow.classList = 'city-temp-low';
        cityTempLow.textContent = 'Low Temp: ' + Math.round(allCities[index].lowTemp) + ' \u00B0F';
        cityCard.appendChild(cityTempLow);

        const cityWeather = document.createElement('p');
        cityWeather.classList = 'city-weather';
        cityWeather.textContent = allCities[index].weather.charAt(0).toUpperCase() + allCities[index].weather.slice(1);
        cityCard.appendChild(cityWeather);

        const weatherIcon = document.createElement('img');
        weatherIcon.classList = 'weather-icon';
        weatherIcon.src = 'https://openweathermap.org/img/wn/'+allCities[index].icon+'@2x.png';
        cityCard.appendChild(weatherIcon);

        // const viewMore = document.createElement('button');
        // viewMore.innerText = 'View Details';
        // cityCard.appendChild(viewMore);
        // viewMore.addEventListener('click', function(){
        //     extendedForcast(allCities[index]);
        // });

        const deleteCity = document.createElement('button');
        deleteCity.innerText = 'Delete City';
        cityCard.appendChild(deleteCity);
        deleteCity.addEventListener('click', function(){
            allCities.splice(index , 1);
            updateStorage(allCities);
            renderCities(allCities);
        });
    };
    if(allCities.length < 5) {
        mainDisplay.appendChild(addNewCity());
    };
};
