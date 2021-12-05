import './css/styles.css';
import { fetchCountries } from './fetchCountries';

var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 1000;

const searchInput = document.querySelector('#search-box');
searchInput.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(event) {
  const searchQuery = event.target.value;

  if (searchQuery != 0) {
    fetchCountries(searchQuery);
  } else {
    return;
  }
}
