const apikey="4e37ba6f9228f297dd3f726071eedb60";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const response=await fetch(apiurl + city+`&apikey=${apikey}`);
    let data=await response.json();
    let cloud=data.weather[0].main;
    if(cloud=="Clear"){
        document.querySelector(".weather-icon").src = "images/clear.png"; 
    }else if(cloud=="Clouds"){
        document.querySelector(".weather-icon").src = "images/clouds.png"; 

    }else if(cloud=="Drizzle"){
        document.querySelector(".weather-icon").src = "images/drizzle.png"; 

    }else if(cloud=="Humidity"){
        document.querySelector(".weather-icon").src = "images/humidity.png"; 

    }else if(cloud=="Mist"){
        document.querySelector(".weather-icon").src = "images/mist.png"; 

    }else if(cloud=="Rain"){
        document.querySelector(".weather-icon").src = "images/rain.png"; 

    }else if(cloud=="Snow"){
        document.querySelector(".weather-icon").src = "images/snow.png"; 

    }

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";

    
}

let search=document.querySelector(".srh");
let query=document.querySelector(".srh_txt");
search.addEventListener("click",()=>{
    let city=query.value.toLowerCase();
    checkWeather(city);
})