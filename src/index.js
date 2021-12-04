import './css/styles.css';

const DEBOUNCE_DELAY = 300;

fetchCountries();

function fetchCountries() {
  fetch('https://restcountries.com/v3.1/name/all')
    .then(response => {
      return response.json();
    })
    .then(country => {
      console.log(country);
    })
    .catch(error => {
      console.log(error);
    });
}
