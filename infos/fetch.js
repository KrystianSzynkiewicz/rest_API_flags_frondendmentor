
fetch(`https://restcountries.com/v3.1/name/${countryName}`)
.then((resp) = resp.json())
.then( country => {
    country = country.map => {
        return {
            flagUrl: country.flags.png,
            name: country.name.common,
            nativeName: country.name.nativeName.cat.official,
            population: country.population,
            region: country.region,
            region: country.subregion,
            capital: country.capital,
            domain: country.tld,
            currencies: country.currencies,
            languages: country.languages,
            borderCountries: country.borders,
    
        }
    }
})