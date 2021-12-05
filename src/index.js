import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import countryListTemplate from './templates/country-list.hbs';
import countryCardTemplate from './templates/country-cards.hbs';

var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 1000;

const searchInput = document.querySelector('#search-box');
searchInput.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(event) {
  const searchQuery = event.target.value.trim();

  if (searchQuery != 0) {
    fetchCountries(searchQuery);
  } else {
    return;
  }
}
