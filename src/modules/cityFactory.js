export const newCity = (cityName, currentTemp, highTemp, lowTemp, weather, icon, lat, lon) => {
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