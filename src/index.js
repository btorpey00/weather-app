// import { mode } from '../webpack.config';
import './style.css';

const searchCity = 'Golden';
const searchState = 'CO';

const searchZip = '49341';


const testButton = document.createElement('button');
document.body.appendChild(testButton);
testButton.innerText = 'Testing';
testButton.addEventListener('click', function() {
    getLocationByCity(searchCity, searchState)
});
const testButtonZip = document.createElement('button');
document.body.appendChild(testButtonZip);
testButtonZip.innerText = 'Zip';
testButtonZip.addEventListener('click', function() {
    getLocationByZip(searchZip);
});

const locationButton = document.createElement('button');
document.body.appendChild(locationButton);
locationButton.innerText = 'Location';
locationButton.addEventListener('click', function() {
    if('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(weatherByZip, locationError)
        //  => {
        //     getWeather(position.coords.latitude, position.coords.longitude);
        // })
    }
    else {
            console.log('no location');
        }

});

function weatherByZip (position) {
    getWeather(position.coords.latitude, position.coords.longitude);
}
function locationError(error) {
    console.log(error);
}


async function getLocationByCity(searchCity, searchState) {
    try {
        const response = await fetch('http://api.openweathermap.org/geo/1.0/direct?q='+ searchCity + ',' + searchState + ',US&limit=5&appid=c0a92c0ac55c91de326ffa8fa5b4e1f7', {mode: 'cors'});
        const cityData = await response.json();
        // console.log(cityData[0].lat, cityData[0].lon);
        getWeather(cityData[0].lat, cityData[0].lon);
    } catch (error) {
        console.log(error);
    }
};

async function getLocationByZip(searchZip) {
    try {
        const response = await fetch('http://api.openweathermap.org/geo/1.0/zip?zip='+ searchZip + ',US&limit=5&appid=c0a92c0ac55c91de326ffa8fa5b4e1f7', {mode: 'cors'});
        const cityData = await response.json();
        // console.log(cityData);
        getWeather(cityData.lat, cityData.lon);
    } catch (error) {
        console.log(error);
    }
};

async function getWeather(lat, lon) {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=c0a92c0ac55c91de326ffa8fa5b4e1f7&units=imperial', {mode: 'cors'});
        const cityWeather = await response.json();
        console.log(cityWeather);
    } catch (error) {
        console.log(error);

    }
}

