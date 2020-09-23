// unit 8 js code 

//gobal variables

let content = [];
const url = `https://randomuser.me/api/?results=12&inc=name, picture, email, location, phone, dob &noinfo &nat=US`;
const grid = document.querySelector(".grid");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal-content");
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

    content.forEach((employee, index) => {
        let name = employee.name;
        let email = employee.email;
        let city = employee.location.city;
        let picture = employee.picture;

    employees += `
        <section class="card" data-index="${index}">
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

function makeModal(index) {

    let { name, dob, phone, email, location : {city, street, state, postcode}, picture } = content[index];

    let date = new Date(dob.date);

    const modalWindow = `
        <div class="modal-avatar">
            <img class="avatar" src="${picture.large}">
        </div>
            <div class="modal-text-container">
                <h2>${name.first} ${name.last}</h2>
                <p>${email}</p>
                <p>${city}</p>
            </div>
            <hr />
            <div class="modal-text-container">
                <p>${phone}</p>
                <p>${street.number} ${street.name}, ${state} ${postcode}</p>
                <p>Birthday: ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
            </div>
    `;

    overlay.classList.remove("hidden");
    modal.innerHTML = modalWindow;
}

//calling the function with a click event

grid.addEventListener('click', e => {
    if (e.target !== grid) {
        const card = e.target.closest('.card');
        const index = card.getAttribute('data-index');

        makeModal(index);
    }
});

//closing the modal window

modalClose.addEventListener('click', () => {
    overlay.classList.add("hidden");
});










