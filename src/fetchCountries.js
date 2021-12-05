import countryListTemplate from './templates/country-list.hbs';
import countryCardTemplate from './templates/country-cards.hbs';

const countryList = document.querySelector('.country-list');
const countryCard = document.querySelector('.country-info');

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
      .then(markupRendering)
      .catch(error => {
        console.log(error);
      });
  }
}

function markupRendering(country) {
  if (country.length >= 10) {
    alert('Too many matches found. Please enter a more specific name.');
    return;
  } else if (country.length > 1 && country.length <= 10) {
    countryList.innerHTML = countryListTemplate(country);
    countryCard.innerHTML = '';
    return;
  } else countryCard.innerHTML = countryCardTemplate(country);
  countryList.innerHTML = '';
  return;
}
