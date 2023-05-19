function letters(char) {
     let num = char.charCodeAt()
     if (num >= 76 && num <= 90) {
        console.log('upper-case');
     } else if (num >= 97 && num <= 122) {
        console.log('lower-case');
     }
    
}

letters('L')