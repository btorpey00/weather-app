
import './style.css';

let allCities = JSON.parse(localStorage.getItem("allCities") || '[]');
const mainDisplay = document.createElement('div');

window.addEventListener('onLoad', renderCity(allCities))

//recieve new city by location
function newCityByLocation(addNewContainer) {
    if('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((function(position) {
            getWeather(position.coords.latitude, position.coords.longitude);
        }), locationError)
    }
    else {
        alert('Must allow location to be detected');
        console.log('no location');
    }
    addNewContainer.innerText = '';
}

function locationError(error) {
    alert('Must allow location to be detected');
    console.log(error);
}

//Find Lat and Lon from city, state name
async function getLocationByCity(searchCity, searchState) {
    try {
        const response = await fetch('http://api.openweathermap.org/geo/1.0/direct?q='+ searchCity + ',' + searchState + ',US&limit=1&appid=c0a92c0ac55c91de326ffa8fa5b4e1f7', {mode: 'cors'});
        const cityData = await response.json();
        getWeather(cityData[0].lat, cityData[0].lon);
    } catch (error) {
        alert('Invalid City/State');
        console.log(error);
    }
};

//find Lat and Lon from zip
async function getLocationByZip(searchZip) {
    try {
        const response = await fetch('http://api.openweathermap.org/geo/1.0/zip?zip='+ searchZip + ',US&limit=5&appid=c0a92c0ac55c91de326ffa8fa5b4e1f7', {mode: 'cors'});
        const cityData = await response.json();
        getWeather(cityData.lat, cityData.lon);
    } catch (error) {
        alert('Could not find Zip Code');
        console.log(error);
    }
};

//fetch weather info from API
async function getWeather(lat, lon) {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=c0a92c0ac55c91de326ffa8fa5b4e1f7&units=imperial', {mode: 'cors'});
        const cityWeather = await response.json();
        let cityInfo = newCity(cityWeather.name, cityWeather.main.temp, cityWeather.main.temp_max, cityWeather.main.temp_min, cityWeather.weather[0].description, cityWeather.weather[0].icon, lat, lon);
        allCities.push(cityInfo);
        updateStorage(allCities);
        renderCity(allCities);        
        // return cityInfo;
    } catch (error) {
        alert('Invalid entry');
        renderCity(allCities);
        console.log(error);
    }
};

//City factory function
const newCity = (cityName, currentTemp, highTemp, lowTemp, weather, icon, lat, lon) => {
    return {
        cityName,
        currentTemp,
        highTemp,
        lowTemp,
        weather,
        icon,
        lat,
        lon
    };
}

//render city cards
function renderCity(allCities) {
    
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

        const viewMore = document.createElement('button');
        viewMore.innerText = 'View Details';
        cityCard.appendChild(viewMore);

        const deleteCity = document.createElement('button');
        deleteCity.innerText = 'Delete City';
        cityCard.appendChild(deleteCity);
        deleteCity.addEventListener('click', function(){
            allCities.splice(index , 1);
            updateStorage(allCities);
            renderCity(allCities);
        })
    };
    if(allCities.length < 5) {
        mainDisplay.appendChild(addNewCity());
    };
};

//choose how to add new city
function addNewCity() {
    const addNewContainer = document.createElement('div');
    addNewContainer.classList = 'add-new-container';
    
    const addNewHeader = document.createElement('h3');
    addNewHeader.textContent = 'Add New City';
    addNewContainer.appendChild(addNewHeader);

    const addNewText = document.createElement('p');
    addNewText.textContent = '(Maximum 5 Cities)';
    addNewContainer.appendChild(addNewText);

    const addNewLocationButton = document.createElement('button');
    addNewLocationButton.classList = 'add-new-button';
    addNewLocationButton.innerText = 'Add by Current Location';
    addNewLocationButton.addEventListener('click', function() {
        newCityByLocation(addNewContainer);
    });
    addNewContainer.appendChild(addNewLocationButton);

    const addNewZipButton = document.createElement('button');
    addNewZipButton.classList = 'add-new-button';
    addNewZipButton.innerText = 'Add by Zip Code';
    addNewZipButton.addEventListener('click', function() {
        newCityByZip(addNewContainer);
    });
    addNewContainer.appendChild(addNewZipButton);
    
    const addNewNameButton = document.createElement('button');
    addNewNameButton.classList = 'add-new-button';
    addNewNameButton.innerText = 'Add by City and State';
    addNewNameButton.addEventListener('click', function() {
        newCityByName(addNewContainer);
    });
    addNewContainer.appendChild(addNewNameButton)
    
    return addNewContainer;
}

//receive new city by zip
function newCityByZip(addNewContainer) {
    addNewContainer.innerText = '';

    const zipInputField = document.createElement('input');
    zipInputField.setAttribute('type', 'number');
    zipInputField.id = 'zip-input-field';
    zipInputField.classList = 'zip-input';
    const zipInputLabel = document.createElement('label');
    zipInputLabel.setAttribute('for', 'zip-input-field');
    zipInputLabel.innerText = 'Zip Code: ';
    addNewContainer.appendChild(zipInputLabel);
    addNewContainer.appendChild(zipInputField);

    const zipCancel = document.createElement('button');
    zipCancel.classList = 'cancel-button';
    zipCancel.innerText = 'Cancel';
    addNewContainer.appendChild(zipCancel);

    const zipAccept = document.createElement('button');
    zipAccept.classList = 'accept-button';
    zipAccept.innerText = 'Enter';
    addNewContainer.appendChild(zipAccept);
    zipAccept.addEventListener('click', function() {
        getLocationByZip(zipInputField.value);
        addNewContainer.innerText = '';
    });
}

//receive new city by name
function newCityByName(addNewContainer) {
    addNewContainer.innerText = '';

    const cityInputField = document.createElement('input');
    cityInputField.id = 'city-input-field';
    cityInputField.classList = 'city-input';
    const cityInputLabel = document.createElement('label');
    cityInputLabel.setAttribute('for', 'city-input-field');
    cityInputLabel.innerText = 'City: ';
    addNewContainer.appendChild(cityInputLabel);
    addNewContainer.appendChild(cityInputField);

    const stateSelect = document.createElement('select');
    stateSelect.id = 'select-state';
    const stateLabel = document.createElement('label');
    stateLabel.setAttribute('for', 'select-state');
    stateLabel.innerText = 'State: '
    addNewContainer.appendChild(stateLabel);
    addNewContainer.appendChild(stateSelect);

    const stateCodes = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

    for(let i = 0; i < stateCodes.length; i++) {
        let stateCode = document.createElement('option');
        stateCode.value = stateCodes[i];
        stateCode.innerText = stateCodes[i];
        stateSelect.appendChild(stateCode);
    }

    const byNameCancel = document.createElement('button');
    byNameCancel.classList = 'cancel-button';
    byNameCancel.innerText = 'Cancel';
    addNewContainer.appendChild(byNameCancel);

    const byNameAccept = document.createElement('button');
    byNameAccept.classList = 'accept-button';
    byNameAccept.innerText = 'Enter';
    addNewContainer.appendChild(byNameAccept);
    byNameAccept.addEventListener('click', function() {
        getLocationByCity(cityInputField.value, stateSelect.value);
        addNewContainer.innerText = '';
    });
};

function updateStorage(cityArray) {
    localStorage.setItem("allCities", JSON.stringify(cityArray));
};





