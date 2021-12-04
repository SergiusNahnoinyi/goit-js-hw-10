export function fetchCountries(name) {
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
