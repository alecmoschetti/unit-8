// unit 8 js code 

//gobal variables

let content = [];
const url = `https://randomuser.me/api/?results=12&inc=name, picture, email, location, phone, dob &noinfo &nat=US`;
const grid = document.querySelector(".grid");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");

// fetch request

fetch(url)
    .then(response => response.json())
    .then(response => response.results)
    .then(display)
    .catch(error => console.log(error));

// functions 

function display(employeeData) {
    content = employeeData;

    let employees = ``;

    content.forEach((employee) => {
        let name = employee.name;
        let email = employee.email;
        let city = employee.location.city;
        let picture = employee.picture;

    employees += `
        <section class="card">
            <img class="avatar" src="${picture.large}">
            <div class="text-container">
                <h2>${name.first} ${name.last}</h2>
                <p>${email}</p>
                <p>${city}</p>
            </div>
        </section>
    `;
    });
    grid.innerHTML = employees;
}











