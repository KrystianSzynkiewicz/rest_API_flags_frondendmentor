import { countryAppendFunction } from "./dom-utils.js";
import { renderDetails } from "./view-details.js";

if (window.location.search.includes('?country=')) {
    document.querySelector('.filters').classList.add('deactive');
    renderDetails();
} else {

    document.querySelector('#backButton').classList.add('deactive');
    
const API_COUNTRIES_URL = "https://restcountries.com/v3.1/all";
const root = document.querySelector('#root');
const input = document.querySelector('#searchQuery')

let countries;
let query;
let region;

const response = await fetch(API_COUNTRIES_URL);
const jsonRes = await response.json();

// console.log(jsonRes);

countries = jsonRes.map((countries)=>{
    return {
        capital: countries.capital,
        capital: countries.capital,
        population: countries.population,
        name: countries.name.common,
        region: countries.region,
        flagUrl: countries.flags.png,
    }
});

countryAppendFunction(countries);

const filterSearchAndRegion = () => {
    const filteredCountries = countries.filter((country) => {
        return (
            country.name.toLowerCase().includes(query) &&
            (!region || country.region === region)
        )
    });
    countryAppendFunction(filteredCountries);

};

input.addEventListener ('input', (e) => {
    console.log(e.target.value)
    query = e.target.value.toLowerCase();
    // pobranie strina z inputa
    filterSearchAndRegion();
});

document.querySelector('#region').addEventListener("change", (e) => {
    region = e.target.value;
    filterSearchAndRegion();
})

}