import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

feedbackForm.addEventListener('input', throttle(onEmailTextareaInput, 500))
feedbackForm.addEventListener('submit', onFormSubmit)

let inputValues = {};

initEmailTextareaMassage ();

function onFormSubmit (evt) {
   evt.preventDefault();
   console.log(inputValues);
   evt.target.reset();
   inputValues = {};
   localStorage.removeItem(LOCAL_STORAGE_KEY);
}

function onEmailTextareaInput (evt) {
   inputValues[evt.target.name] = evt.target.value
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(inputValues))
}

function initEmailTextareaMassage () {
   let savedLocalStorageValue = localStorage.getItem(LOCAL_STORAGE_KEY)
   
   if (savedLocalStorageValue) {
   savedLocalStorageValue = JSON.parse(savedLocalStorageValue)
   Object.entries(savedLocalStorageValue).forEach(([name, value]) => 
   {inputValues[name] = value
   feedbackForm.elements[name].value = value})
   }
}
  
