const button = document.getElementById('getLocationBtn');
const locationDisplay = document.getElementById('location');


async function getData(latitude, longitude) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=93e083156dd14c8f9ac145131251206&q=${latitude},${longitude}&aqi=yes`
    );
    return await promise.json();
}


 async function gotLocation(position){
 const result = await getData(position.coords.latitude, position.coords.longitude)
 console.log(result);
    locationDisplay.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country} ${result.current.temp_c}°C `;
};

function failtogetLocation(){
    console.error('Unable to retrieve your location');
}

button.addEventListener('click', async() => {
const result = navigator.geolocation.getCurrentPosition(gotLocation, failtogetLocation);


});

