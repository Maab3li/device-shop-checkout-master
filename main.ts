let countries: Array<object> =[];

const selectElement = document.getElementById('countries')

    fetch('/countries.json')
    .then(response => response.json())
    .then(data => {
        countries = data
        countries.forEach(country => {
        const option = document.createElement('option')
        option.textContent = country.name
        option.value = country.code
        selectElement?.appendChild(option)
        })
    })
    .catch(error => {throw new Error('Failed to fetch countries', error)})
    
    
