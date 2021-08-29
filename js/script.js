
const countryElement = document.getElementById('result-section');
const inputFiled = document.querySelector('.input-filed');
inputFiled.addEventListener('keypress', clickKey);
function allCountry() {
    fetch(`https://restcountries.eu/rest/v2/all`)
        .then(res => res.json())
        .then(data => checkCountryName(data));
}

function clickKey(eve){
    if (eve.keyCode == 13) {
        getSearchValue(inputFiled.value);

        // Clear Input Filed
        inputFiled.value = '';
    }
}

function getSearchValue(name) {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => displayData(data[0]));
    // console.log(name);
}

function displayData(country) {
    countryElement.innerHTML = `
       <div>
          <img src="${country.flag}" alt="${country.flag}" />
        </div>
        <div class="info">
          <h3>${country.alpha2Code}</h3>
          <h3>${country.name}</h3>
          <h3>${country.demonym}</h3>
          <h3>${country.timezones[0]}</h3>
          <h3>${country.subregion}</h3>
          <h3>${country.region}</h3>
        </div>
    `;
    // countryElement.appendChild(div)

}