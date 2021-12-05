export function fetchCountries(name) {
  fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,population,flags,languages`)
    .then(response => {
      return response.json();
    })
    .then(renderCountryList)
    .catch(error => {
      console.log(error);
    });
}

import countryListTemplate from './templates/country-list.hbs';
import countryCardTemplate from './templates/country-cards.hbs';

const countryList = document.querySelector('.country-list');

function renderCountryList(country) {
  countryList.innerHTML = countryListTemplate(country);
}
