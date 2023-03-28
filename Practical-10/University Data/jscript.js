const url = 'http://universities.hipolabs.com/search?country=india';

async function getUniversities() {

    const response = await fetch(url);
    const data = await response.json();

    // create table rows and cells for each university
    const tableBody = document.querySelector('#universities-table tbody');
    data.forEach(university => {
      const nameCell = document.createElement('td');
      nameCell.textContent = university.name;
      const countryCell = document.createElement('td');
      countryCell.textContent = university.country;
      const stateCell = document.createElement('td');
      stateCell.textContent = university.alpha_two_code;
      const webpageCell = document.createElement('td');
      webpageCell.innerHTML = `<a href="${university.web_pages[0]}">${university.web_pages[0]}</a>`;

      // create table row and append cells to it
      const row = document.createElement('tr');
      row.appendChild(nameCell);
      row.appendChild(countryCell);
      row.appendChild(stateCell);
      row.appendChild(webpageCell);

      // append table row to table body
      tableBody.appendChild(row);
    });

}

getUniversities();
