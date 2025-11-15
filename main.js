var countries = [];
var selectElement = document.getElementById('countries');
fetch('countries.json')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    countries = data;
    countries.forEach(function (country) {
        var option = document.createElement('option');
        option.textContent = country.name;
        option.value = country.code;
        selectElement === null || selectElement === void 0 ? void 0 : selectElement.appendChild(option);
    });
})
    .catch(function (error) { throw new Error('Failed to fetch countries', error); });
