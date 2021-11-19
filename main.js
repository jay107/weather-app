window.addEventListener("load", () => {
    let long;
    let lat;
    let tempDesc = document.querySelector(".temp-description");
    let tempDegree = document.querySelector(".temp-degree");
    let locationZone = document.querySelector(".location-timezone");
    let locationRegion = document.querySelector(".location-region");
    let locationIcon = document.querySelector(".icon");
    let tempDegIcon = document.querySelector(".temp-degree-icon");
    let tempInF = document.querySelector(".temp-in-f");
    let tempInC = document.querySelector(".temp-in-c");
    let formInput = document.querySelector(".form-input");
    let formButton = document.querySelector(".form-button");    
    let searchValue = document.querySelector(".search-value");
   
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            formButton.addEventListener("click", function(e){
                e.preventDefault();
                searchValue.textContent = formInput.value;
            
            const api = `https://api.weatherapi.com/v1/current.json?key=426d997a221240fb9a1100632210806&q=${searchValue.textContent}`;
            
            fetch(api)
            .then(response =>{
                return response.json();
            }).then(data => {
                const {temp_c, temp_f} = data.current;
                const {text} = data.current.condition;
                const {name} = data.location;
                const {region} = data.location;
                const {icon} = data.current.condition;
                //set dom element from api
                tempDegree.textContent = temp_c;
                tempDesc.textContent = text;
                locationZone.textContent = name;
                locationIcon.src = icon;
                locationRegion.textContent = region;

            tempInF.addEventListener("click", function(){
                tempDegree.textContent = temp_f;
                tempDegIcon.textContent = "F";
            });
            tempInC.addEventListener("click", function(){
                tempDegree.textContent = temp_c;
                tempDegIcon.textContent = "C";
            })
            });
            formInput.value = "";
        })
        });
        
    }else{
        h1.textContent = "hey ! this is not working , because we are not able to find your location..."
    }

    // degreeSection.addEventListener("click", {
    //     if degreeSection.
    // })
})