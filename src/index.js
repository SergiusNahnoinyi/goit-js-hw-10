import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const searchInput = document.querySelector('#search-box');
searchInput.addEventListener('input', onSearch);

function onSearch(event) {
  const searchQuery = event.currentTarget.value;
  console.log(searchQuery);
  fetchCountries(searchQuery);
}
