import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};


const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onformEl, 500));

fillForm();

function onFormSubmit(e) {
    e.preventDefault();
    formData.email = form.elements.email.value;
    formData.message = form.elements.message.value;

    console.log(formData);

    form.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onformEl(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

    // console.log(formData);
};

function fillForm() {
    const savedForm = localStorage.getItem(STORAGE_KEY);
    if (savedForm) {
        const parceSavedForm = JSON.parse(savedForm);
        // console.log(parceSavedForm);
        for (const prop in parceSavedForm) {
        if (parceSavedForm.hasOwnProperty(prop)) {
            // console.log(parceSavedForm[prop]);
            form.elements[prop].value = parceSavedForm[prop];
            formData[prop] = parceSavedForm[prop];
        }
    }
    }  
};