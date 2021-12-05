export function fetchCountries(name) {
  if (name == 0) {
    return;
  } else {
    fetch(
      `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`,
    )
      .then(response => {
        return response.json();
      })
      .then(renderCountryCard)
      .catch(error => {
        console.log(error);
      });
  }
}

import countryListTemplate from './templates/country-list.hbs';
import countryCardTemplate from './templates/country-cards.hbs';

const countryList = document.querySelector('.country-list');
const countryCard = document.querySelector('.country-info');

function renderCountryList(country) {
  countryList.innerHTML = countryListTemplate(country);
}

function renderCountryCard(country) {
  countryCard.innerHTML = countryCardTemplate(country);
}
