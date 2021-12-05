// Key of weather icons
const getWeatherIcons = (icon) => {
    const weatherIcons = {
      "01d": "/images/clear_sky.png",
      "01n": "/images/clear_sky_night.png",
      "02d": "/images/partly_cloudy.png",
      "02n": "/images/partly_cloudy_night.png",
      "03d": "/images/cloudy.png",
      "03n": "/images/cloudy_night.png",
      "04d": "/images/broken_clouds.png",
      "04n": "/images/broken_clouds_night.png",
      "09d": "/images/shower_rain.png",
      "09n": "/images/shower_rain_night.png",
      "10d": "/images/rain.png",
      "10n": "/images/rain_night.png",
      "11d": "/images/thunderstorm.png",
      "11n": "/images/thunderstorm_night.png",
      "13d": "/images/snow.png",
      "13n": "/images/snow_night.png",
      "50d": "/images/mist.png",
      "50n": "/images/mist_night.png"
    };
  
    return weatherIcons[icon];
  };

  export default getWeatherIcons;