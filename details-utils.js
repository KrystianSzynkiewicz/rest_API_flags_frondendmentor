
const createFlagElement = (country) => {
    const imgContainer = document.createElement('div');
    const imgElement = document.createElement('img');

    imgElement.src = country.flagUrl;

    return imgElement;
}


const oneInfoRender = (bold, normal) => {
    const boldElement = document.createElement("strong");
    const normalElement = document.createElement("p");

    boldElement.innerText = bold;
    normalElement.innerText = normal;

    const oneInfoElement = document.createElement("div");

    oneInfoElement.appendChild(boldElement);
    oneInfoElement.appendChild(normalElement);


    return oneInfoElement;

} 

const renderInfo = (country) => {
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('infoContainer');

    const upContainer = document.createElement('div');
    const downContainer = document.createElement('div');
    upContainer.classList.add('upContainer');
    downContainer.classList.add('downContainer');

    const leftUpContainer = document.createElement('div');
    const rightUpContainer = document.createElement('div');
    leftUpContainer.classList.add('leftUpContainer');
    rightUpContainer.classList.add('rightUpContainer');

    infoContainer.appendChild(upContainer);
    infoContainer.appendChild(downContainer);

    upContainer.appendChild(leftUpContainer);
    upContainer.appendChild(rightUpContainer);

    leftUpContainer.appendChild(oneInfoRender(country.name, ""));
    leftUpContainer.appendChild(oneInfoRender("Native Name: ", country.nativeName));
    leftUpContainer.appendChild(oneInfoRender("Native Name: ", country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")));
    leftUpContainer.appendChild(oneInfoRender("Region: ", country.region));
    leftUpContainer.appendChild(oneInfoRender("Sub Region : ", country.subregion));
    leftUpContainer.appendChild(oneInfoRender("Capital : ", country.capital));
    rightUpContainer.appendChild(oneInfoRender("Top Level Domain : ", country.tld));
    rightUpContainer.appendChild(oneInfoRender("Currencies : ", country.currencies));
    rightUpContainer.appendChild(oneInfoRender("Launguages : ", country.languages));
    downContainer.appendChild(oneInfoRender("Border Countries : ", country.borders));



//STARE :
    // const strong = document.createElement('strong');

    // const span = document.createElement('span');
    // const span2 = document.createElement('span');
    // const span3 = document.createElement('span');

    // strong.innerText = countries.name;
    // span.innerText = `Population: ${countries.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`; 
    // // .replace z https://discourse.webflow.com/t/how-to-add-3-digit-dot-separators/163019/5
    // span2.innerText = `Region: ${countries.region}`;
    // span3.innerText = `Capital: ${countries.capital}`;

    // infoContainer.appendChild(strong);
    // infoContainer.appendChild(span);
    // infoContainer.appendChild(span2);
    // infoContainer.appendChild(span3);

    // infoContainer.classList.add('column')

    return infoContainer;
}

export const countryAppendFunction = (country) => {
    root.innerHTML = '';
    country.forEach(country => {
        const detailContainer = document.createElement('div');
        detailContainer.classList.add('detailContainer');

        //back and flag
        const flagAndBackContainer = document.createElement('div');
        const backButton = document.querySelector('#backButton')

        flagAndBackContainer.appendChild(backButton);
        flagAndBackContainer.appendChild(createFlagElement(country));
        flagAndBackContainer.classList.add('flagAndBackContainer')

        //info
        const detailInfosContainer = document.createElement('div');
        detailInfosContainer.appendChild(renderInfo(country));
        detailInfosContainer.classList.add('detailInfosContainer');
    
        detailContainer.appendChild(flagAndBackContainer);
        detailContainer.appendChild(detailInfosContainer);

        root.appendChild(detailContainer);
    });
}
