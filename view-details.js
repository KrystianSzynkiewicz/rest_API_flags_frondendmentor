import { countryAppendFunction } from "./details-utils.js";

export const renderDetails = async () => {

    
let countryName = window.location.href.split("=")[1];
console.log(countryName);
const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
const jsonRes = await response.json();

console.log(jsonRes);
// całe info o kraju



let country = jsonRes.map((country)=>{
    return {
        flagUrl: country.flags.png,
        name: country.name.common,
        nativeName: country.name.nativeName,
        population: country.population,
        region: country.region,
        region: country.subregion,
        capital: country.capital,
        domain: country.tld,
        currencies: country.currencies,
        languages: country.languages,
        borderCountries: country.borders,
    }
});


countryAppendFunction(country)

};






// console.log(country[0].languages);
// let shortName = country[0].languages;
// let shortNameVar = Object.keys(shortName)[0];
// console.log(shortNameVar)
//ten shortNameVar trzeba wstawić zamiast tego cat
//przesortowane info o kraju - dosortuj tak jak w projekcie