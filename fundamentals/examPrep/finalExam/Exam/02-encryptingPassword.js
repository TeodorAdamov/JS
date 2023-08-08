function encryptingPass(data) {

    let passCount = Number(data.shift());
    let pattern = /(.+)>(?<firstGroup>\d{3})\|(?<secondGroup>[a-z]{3})\|(?<thirdGroup>[A-Z]{3})\|(?<fourthGroup>[^<>]{3})<\1/

    for (let i = 0; i < passCount; i++) {
        let curPass = data.shift();

        let match = pattern.exec(curPass);

        if (match !== null) {
            let result = match.groups.firstGroup + match.groups.secondGroup + match.groups.thirdGroup + match.groups.fourthGroup;
            console.log(`Password: ${result}`);
        } else {
            console.log('Try another password!');
        }
    }
}

encryptingPass([
    "5",

    "aa>111|mqu|BAU|mqu<aa",

    "()>111!aaa!AAA!^&*<()",

    "o>088|abc|AAA|***<o",

    "asd>asd|asd|ASD|asd<asd",

    "*>088|zzzz|ZzZ|123<*"])