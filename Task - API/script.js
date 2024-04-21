let api = "https://restcountries.com/v3.1/all";

function reqListener() {
    let CountryFlags = JSON.parse(this.responseText);
    console.log(CountryFlags)

    for (let i = 0; i < CountryFlags.length; i++) {
        console.log(CountryFlags[i].name.common,CountryFlags[i].flags);
    }
}
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", api);
req.send();
