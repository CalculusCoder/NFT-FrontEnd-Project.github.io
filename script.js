// HAMBURGER MENU
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})



//MODAL POPUP
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');


//Event Listeners
openModalButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const modal = document.querySelector(button.dataset.modalTarget); //storing modal
        openModal(modal)
    })
})


overlay.addEventListener('click', function() {
    const modals = document.querySelectorAll('.modal.activate')
    modals.forEach(function(modal){
        closeModal(modal)
    })
})


closeModalButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const modal = button.closest('.modal');
        closeModal(modal)
    })
})

//Functions 
function openModal(modal) {
    if (modal == null) {
        return
    } else {
        modal.classList.add('activate');      
        overlay.classList.add('activate');
        menu.classList.remove('is-active')  //remove hamburger menu when you click on Signup
        menuLinks.classList.remove('active')
    }

}

function closeModal(modal) {
    if (modal == null) {
        return
    } else {
        modal.classList.remove('activate');
        overlay.classList.remove('activate');
    }

}






//VALIDATION FORM
const form = document.getElementById('form');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');  //targeting css class
const message = document.getElementById('message');
let isValid = false;


//Event Listeners
form.addEventListener('submit', processData)



//Functions
function validateForm () {
    isValid = form.checkValidity();     //isValid is automatically false, use checkValidity html function to change isValid to true or false
    if (!isValid) {     //Styling message for error
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    return;
    }
    if (password1.value === password2.value) {  //checking if passwords match
        password1.style.borderColor = 'rgb(33, 255, 21)'
        password2.style.borderColor = 'rgb(33, 255, 21)'
    } else {
        message.textContent = 'Passwords do not match.';
        message.style.color = 'red';
        password1.style.borderColor = 'red';
        password2.style.borderColor = 'red';
        return;
    }
    if (isValid===true && password1.value === password2.value) {        //Check for both form and passwords to be valid
        message.textContent = "You have successfully signed up, please check your email for more details.";
        message.style.color = 'rgb(33, 255, 21)';
    }

}

//Store data in an object
function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        password: form.password.value
    };
    console.log(user); //Logging the users data in the console. 
}


//Run store form data function, only if valid
function processData(event) {
    event.preventDefault();     //Preven page from refreshing since data is local
    validateForm(); 
    if (isValid===true && password1.value === password2.value) {
        storeFormData();
    }
}




//SMOOTH SCROLL

