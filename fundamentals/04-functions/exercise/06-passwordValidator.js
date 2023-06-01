function passwordValidator(password) {
    if (!passwordLength(password)) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!isPasswordOnlyLettersAndDigits(password)) {
        console.log("Password must consist only of letters and digits");
    }
    if (!checkIfPasswordHasTwoDigits(password)) {
        console.log("Password must have at least 2 digits");
    }

    if (passwordLength(password) && checkIfPasswordHasTwoDigits(password) && isPasswordOnlyLettersAndDigits(password)) {
        console.log("Password is valid");
    }

    function passwordLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        }
        return false;

    }

    function checkIfPasswordHasTwoDigits(pass) {
        let numCount = 0;

        for (let i = 0; i < pass.length; i++) {
            let curElement = pass[i]
            if (isNaN(Number(curElement))) {
                continue;
            }
            numCount++;
        }
        if (numCount >= 2) {
            return true;
        }
        return false;


    }

    function isPasswordOnlyLettersAndDigits(pass) {
        for (let curElement of pass) {
            let code = curElement.charCodeAt()
            if ((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            } else {
                return false;
            }
        }
        return true;
    }
}