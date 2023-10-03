function validate() {
    const button = document.getElementById('submit');
    const [username, email, password, confirmPassword, checkbox] = document.querySelectorAll('#userInfo input');
    const companyInfo = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber');
    const valid = document.getElementById('valid');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    })

    const usernamePattern = /^[a-z0-9A-Z]{3,20}$/
    const emailPattern = /[\w]*[@][\w]*[.]+[\w\.]*/
    const passwordPattern = /^\w{5,15}$/
    const companyNumberPattern = /^\d{4}$/


    button.addEventListener('click', (event) => {
        event.preventDefault();

        const isUsernameValid = validation(username, usernamePattern);
        const isEmailValid = validation(email, emailPattern);
        const isPassValid = validation(password, passwordPattern, confirmPassword);

        if (checkbox.checked) {
            const isCompanyNumberValid = validation(companyNumber, companyNumberPattern);
            if (isUsernameValid && isEmailValid && isPassValid && isCompanyNumberValid) {
                valid.style.display = 'block';
            } else {
                valid.style.display = 'none';
            }
        } else {
            if (isUsernameValid && isEmailValid && isPassValid) {
                valid.style.display = 'block';
            } else {
                valid.style.display = 'none';
            }
        }

        function validation(input, regex, confirmPassword) {
            if (confirmPassword !== undefined) {
                if (input.value.match(regex) === null || confirmPassword.value.match(regex) === null || input.value !== confirmPassword.value) {
                    input.style.border = 'inset';
                    confirmPassword.style.border = 'inset';
                    input.style.borderColor = 'red'
                    confirmPassword.style.borderColor = 'red'
                    return false
                } else {
                    input.style.border = 'none';
                    confirmPassword.style.border = 'none';
                    return true;
                }
            }
            if (input.value.match(regex) === null) {
                input.style.border = 'inset';
                input.style.borderColor = 'red'
                return false
            } else {
                input.style.border = 'none';
                return true;
            }
        }
    })
}
