const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "132e655188msh380205f0db26d72p1054b8jsnbf710fe5a808",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWheather = (city) => {
    cityName.innerHTML = city;

    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
        options
        )
        .then((response) => response.json())
        .then((response) => {
            
            
            console.log(response);
            
            cloud_pct.innerHTML = response.cloud_pct;
            temp.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;
            wind_degrees.innerHTML = response.wind_degrees;
            sunrise.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;
        })
        .catch((err) => console.log(err));
        
    }
    submit.addEventListener("click", (e) => {
        e.preventDefault()
        getWheather(city.value)

    }, []);

    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi",
        options
        )
        .then((response) => response.json())
        .then((response) => {
            
            
            console.log(response);
            
            delhi_cloud_pct.innerHTML = response.cloud_pct;
            delhi_temp.innerHTML = response.temp;
            delhi_feels_like.innerHTML = response.feels_like;
            delhi_humidity.innerHTML = response.humidity;
            delhi_min_temp.innerHTML = response.min_temp;
            delhi_max_temp.innerHTML = response.max_temp;
            delhi_wind_speed.innerHTML = response.wind_speed;
            delhi_wind_degrees.innerHTML = response.wind_degrees;
            delhi_sunrise.innerHTML = response.sunrise;
            delhi_sunset.innerHTML = response.sunset;
        })
        .catch((err) => console.log(err));
        
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=new york",
        options
        )
        .then((response) => response.json())
        .then((response) => {
            
            
            console.log(response);
            
            york_cloud_pct.innerHTML = response.cloud_pct;
            york_temp.innerHTML = response.temp;
            york_feels_like.innerHTML = response.feels_like;
            york_humidity.innerHTML = response.humidity;
            york_min_temp.innerHTML = response.min_temp;
            york_max_temp.innerHTML = response.max_temp;
            york_wind_speed.innerHTML = response.wind_speed;
            york_wind_degrees.innerHTML = response.wind_degrees;
            york_sunrise.innerHTML = response.sunrise;
            york_sunset.innerHTML = response.sunset;
        })
        .catch((err) => console.log(err));
        
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=tokyo",
        options
        )
        .then((response) => response.json())
        .then((response) => {
            
            
            console.log(response);
            
            tokyo_cloud_pct.innerHTML = response.cloud_pct;
            tokyo_temp.innerHTML = response.temp;
            tokyo_feels_like.innerHTML = response.feels_like;
            tokyo_humidity.innerHTML = response.humidity;
            tokyo_min_temp.innerHTML = response.min_temp;
            tokyo_max_temp.innerHTML = response.max_temp;
            tokyo_wind_speed.innerHTML = response.wind_speed;
            tokyo_wind_degrees.innerHTML = response.wind_degrees;
            tokyo_sunrise.innerHTML = response.sunrise;
            tokyo_sunset.innerHTML = response.sunset;
        })
        .catch((err) => console.log(err));
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=beijing",
        options
        )
        .then((response) => response.json())
        .then((response) => {
            
            
            console.log(response);
            
            beijing_cloud_pct.innerHTML = response.cloud_pct;
            beijing_temp.innerHTML = response.temp;
            beijing_feels_like.innerHTML = response.feels_like;
            beijing_humidity.innerHTML = response.humidity;
            beijing_min_temp.innerHTML = response.min_temp;
            beijing_max_temp.innerHTML = response.max_temp;
            beijing_wind_speed.innerHTML = response.wind_speed;
            beijing_wind_degrees.innerHTML = response.wind_degrees;
            beijing_sunrise.innerHTML = response.sunrise;
            beijing_sunset.innerHTML = response.sunset;
        })
        .catch((err) => console.log(err));
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris",
        options
        )
        .then((response) => response.json())
        .then((response) => {
            
            
            console.log(response);
            
            Paris_cloud_pct.innerHTML = response.cloud_pct;
            Paris_temp.innerHTML = response.temp;
            Paris_feels_like.innerHTML = response.feels_like;
            Paris_humidity.innerHTML = response.humidity;
            Paris_min_temp.innerHTML = response.min_temp;
            Paris_max_temp.innerHTML = response.max_temp;
            Paris_wind_speed.innerHTML = response.wind_speed;
            Paris_wind_degrees.innerHTML = response.wind_degrees;
            Paris_sunrise.innerHTML = response.sunrise;
            Paris_sunset.innerHTML = response.sunset;
        })
        .catch((err) => console.log(err));
        