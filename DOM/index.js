/* 
    Window Object -> The window object in JavaScript represents the global object in a 
    browser environment. It is automatically created by the browser and acts as the 
    top-level object for all JavaScript code running in the browser.

    It represents the browser window or tab.

    All global variables and functions become properties of the window object.

    It provides methods and properties to interact with the browser, such as:

    window.alert() – shows a popup alert.

    window.setTimeout() – delays execution of code.

    window.location – provides information about the current URL.

    window.alert("Hello"); // same as alert("Hello")
    console.log(window.location.href); // prints current URL

    Can we access parent element using child element?

*/

const heading = document.querySelector('#mHead');
const formDetails = document.querySelector('#regiForm');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const passwordMessage = document.querySelector('#passwordMessage');

heading.innerText = "Welcome";

const subHeading = document.createElement('h2');
subHeading.innerHTML = '<p>Please fill the form below </p>';
heading.insertAdjacentElement('afterend', subHeading);

const submitButton = document.createElement('button');
submitButton.innerText = "Submit";
formDetails.insertAdjacentElement('beforeend', submitButton);

const formData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const confirmPasswordError = document.createElement('p');

function handleChange(event) {

    const { name, value } = event.target;
    formData[name] = value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    const errorMessage = document.createElement('p');
    const password = document.querySelector('#password');
    const passwordValue = password.value;

    passwordMessage.innerHTML = ' ';
    if (confirmPasswordError) {
        confirmPasswordError.remove();
    }

    if (event.target.name === 'password') {
        if (passwordValue.length < 4) {
            errorMessage.innerText = "Weak Password";
            errorMessage.style.color = 'red';
            passwordMessage.appendChild(errorMessage);
        } else if (passwordValue.length >= 4 && passwordValue.length < 6) {
            errorMessage.innerText = "Medium Password";
            errorMessage.style.color = 'orange';
            passwordMessage.appendChild(errorMessage);
        } else if (passwordValue.length >= 6 && !passwordRegex.test(passwordValue)) {
            errorMessage.innerText = "Password should contain at least one uppercase letter, one lowercase letter, and one number";
            errorMessage.style.color = 'yellow';
            passwordMessage.appendChild(errorMessage);
        } else {
            errorMessage.innerText = "Strong Password";
            errorMessage.style.color = 'green';
            passwordMessage.appendChild(errorMessage);
        }
    }

}

function handleSubmit(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
        confirmPasswordError.innerText = "Password and Confirm Password do not match";
        confirmPasswordError.style.color = 'red';
        confirmPassword.insertAdjacentElement('afterend', confirmPasswordError);
        return;
    } else {
        console.log(formData);
        alert("Form submitted successfully!");
        formDetails.reset();
    }
}
