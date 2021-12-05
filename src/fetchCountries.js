export function fetchCountries(name) {
  fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,population,flags,languages`)
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
