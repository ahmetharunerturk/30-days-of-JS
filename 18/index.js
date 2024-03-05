const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {

    const countries = data;

    
    const countryNames = countries.map(country => country.name);
    const countryCapitals = countries.map(country => country.capital);

    
    console.log('Name', countryNames);
    console.log('Capital:', countryCapitals);

  })
  .catch(error => console.error(error))



fetch(catsAPI)
    .then(response => {
        if (!response.ok) {
            throw new Error('error');
        }
        return response.json();
    })
    .then(data => {
        
        const catNames = data.map(cat => cat.name);

        //kedi isimleri
        console.log('Kedi İsimleri:', catNames);

        //Ağırlık
        const weightsInMetric = data.map(cat => cat.weight.metric);
        const weights = weightsInMetric.map(weight => parseFloat(weight));
        const averageWeight = weights.reduce((acc, weight) => acc + weight, 0) / weights.length;
        console.log(averageWeight);
    })
    .catch(error => {
        console.error('hata:', error);
    });
