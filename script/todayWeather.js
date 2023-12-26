//function for filling the weather widgit
function weatherTile(){
    
    
    
    async function checkWeather(){
       const response = await fetch(apiUrl + `lat=${lat}&lon=${lon}` + `&appid=${apiKey}`);
       if (response.ok){
        var data = await response.json();
        console.log(data); 
       } else {
        console.log(response.status);
       };
    };
    checkWeather();
};

weatherTile();
