
const createFlagElement = (countries) => {
    const imgContainer = document.createElement('div');
    const imgElement = document.createElement('img');

    imgElement.src = countries.flagUrl;

    return imgElement;
}

const renderInfo = (countries) => {
    const infoContainer = document.createElement('div');

    const strong = document.createElement('strong');

    const span = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');

    strong.innerText = countries.name;
    span.innerText = `Population: ${countries.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`; 
    // .replace z https://discourse.webflow.com/t/how-to-add-3-digit-dot-separators/163019/5
    span2.innerText = `Region: ${countries.region}`;
    span3.innerText = `Capital: ${countries.capital}`;

    infoContainer.appendChild(strong);
    infoContainer.appendChild(span);
    infoContainer.appendChild(span2);
    infoContainer.appendChild(span3);

    infoContainer.classList.add('column')

    return infoContainer;
}

export const countryAppendFunction = (countries) => {
    root.innerHTML = '';
    countries.forEach(country => {
        
        const countryContainer = document.createElement('div');
        countryContainer.classList.add('countryContainerS');
        
        const anchorElement = document.createElement('a');
        anchorElement.href = `?country=${country.name}`;

        anchorElement.appendChild(createFlagElement(country));
        anchorElement.appendChild(renderInfo(country));

        countryContainer.appendChild(anchorElement);

        root.appendChild(countryContainer);
    });
}