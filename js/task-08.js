const refs = {
    loginForm: document.querySelector('.login-form'),
    emailInput: document.querySelector('[type="email"]'),
    passwordInput: document.querySelector('[type="password"]'),
    btnSubmit: document.querySelector('[type="submit"]'),
}

refs.loginForm.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    if (refs.emailInput.value === "" || refs.passwordInput.value === "") {
        return alert("Please fill in all fields");
    };

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
        email, password,
    }

    console.log(formData);
    refs.loginForm.reset();
}