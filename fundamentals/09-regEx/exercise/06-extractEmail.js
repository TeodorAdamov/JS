function extractEmails(data) {

    let pattern = / (?<user>[A-Za-z0-9]+[\.\-]*\w+)@(?<host>[A-Za-z]+(?:[\.\-]?\w+)*\.[A-Za-z]+)/g

    let match = data.match(pattern)
    console.log(match.join('\n'));
}

extractEmails('Please contact us at: support@github.com.');
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.');9