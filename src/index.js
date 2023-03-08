import './style.css';
import renderCities from './modules/renderCities';

export let allCities = JSON.parse(localStorage.getItem("allCities") || '[]');
export const mainDisplay = document.createElement('div');

window.addEventListener('onLoad', renderCities(allCities))

//Update Storage
export function updateStorage(cityArray) {
    localStorage.setItem("allCities", JSON.stringify(cityArray));
};