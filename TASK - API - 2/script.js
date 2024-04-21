let countries = "https://restcountries.com/v3.1/all";


function reqListener() {
    country = JSON.parse(this.responseText);
    
    for (i = 0; i < country.length; i++) {
        console.log(country[i].name.common, country[i].region,
            country[i].subregion, country[i].population);
    }
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", countries);
req.send();
