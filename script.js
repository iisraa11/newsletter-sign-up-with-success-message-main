const form = document.getElementById('email-form')
const email = document.getElementById('email')

form.addEventListener('submit', e => {
    e.preventDefault();

    validateEmail();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error')
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const newsletter = document.querySelector('.main-container')
    const subscriptionSuccess = document.querySelector('.subscription-success')
    const dismissButton = subscriptionSuccess.querySelector('.button')

    errorDisplay.innerText = '';
    inputControl.classList.remove('error');

    newsletter.style.display = 'none'
    subscriptionSuccess.style.display = 'grid'

    dismissButton.addEventListener('click', () => {
        newsletter.style.display = 'grid'
        subscriptionSuccess.style.display = 'none'
    })
}

const isValidEmail = email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
    return regex.test(String(email).toLowerCase());
}

const validateEmail = () => {
    const emailValue = email.value.trim();
    if (emailValue === '') {
        setError(email, 'Valid email required')
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Valid email required')
    } else {
        setSuccess(email)
    }
}


