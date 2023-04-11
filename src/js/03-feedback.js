import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const message = document.querySelector('.feedback-form textarea');
const email = document.querySelector('.feedback-form input');

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const formData = {};

dataFromLocalStorage()

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();
  if (message.value === '' || email.value === '') {
    return;
  }
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
};