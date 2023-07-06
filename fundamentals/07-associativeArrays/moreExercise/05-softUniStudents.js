function softUni(data) {

    const courses = [];

    for (let line of data) {

        if (line.includes(': ')) {
            const [courseName, capacity] = line.split(': ');
            let isExisting = courses.find(a => a.name === courseName);

            if (isExisting) {
                isExisting.capacity += Number(capacity);
            } else {
                const course = {
                    name: courseName,
                    capacity: Number(capacity),
                    students: [],
                }
                courses.push(course);
            }
        } else {
            line = line.replace('[', ',')
                .replace('] with email ', ',')
                .replace(' joins ', ',');
            const [user, credits, email, courseName] = line.split(',');
            let isExisting = courses.find(a => a.name === courseName);

            if (isExisting && isExisting.capacity > 0) {
                const student = {
                    username: user,
                    email,
                    credits: Number(credits),
                }
                isExisting.students.push(student);
                isExisting.capacity -= 1;
            }
        }
    }

    courses.sort((a, b) => b.students.length - a.students.length)
        .forEach(course => {
            console.log(`${course.name}: ${course.capacity} places left`);
            course.students.sort((a, b) => b.credits - a.credits)
                .forEach(student => {
                    console.log(`--- ${student.credits}: ${student.username}, ${student.email}`);
                })
        })
}

softUni([
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'])
