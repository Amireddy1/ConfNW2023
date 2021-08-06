const weather_API="8c7366ff3da9092c6b43476d3c005ba0";

navigator.geolocation.getCurrentPosition(on_geolocation,off_geolocation);

function on_geolocation(position_of_user){
    const lat=position_of_user.coords.latitude;
    const lon=position_of_user.coords.longitude;
    const url=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weather_API}&units=metric`;

    fetch(url) 
    .then((response)=>response.json())
    .then((data)=>{
        const weather_text=document.querySelector("#nav_clmn_right_row_top span");

        weather_text.innerText=`${data.main.temp}도, ${data.sys.country}, ${data.name}`;
    })
}
function off_geolocation(){
    alert("Can't find you. No weather for you");
}