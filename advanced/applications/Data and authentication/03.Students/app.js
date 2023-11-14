function attachEvents() {
    document.getElementById('form').addEventListener('submit', onSubmit)
    window.addEventListener('load', onLoad)
    const url = 'http://localhost:3030/jsonstore/collections/students';

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const { firstName, lastName, facultyNumber, grade } = Object.fromEntries(formData.entries());
        if (!firstName || !lastName || !facultyNumber || !grade) {
            return
        }

        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
        }

        const response = await fetch(url, options)
        onLoad();
    }

    async function onLoad() {
        const response = await fetch(url)
        const data = await response.json();
        const tBody = document.querySelector('tbody');
        tBody.textContent = '';

        Object.values(data).forEach(student => {
            tBody.appendChild(createStudents(student))
        })
    }

    function createStudents(studentObj) {
        const row = document.createElement('tr');
        const firstName = document.createElement('td');
        const lastName = document.createElement('td');
        const facultyNumber = document.createElement('td');
        const grade = document.createElement('td');
        firstName.textContent = studentObj.firstName;
        lastName.textContent = studentObj.lastName;
        facultyNumber.textContent = studentObj.facultyNumber;
        grade.textContent = studentObj.grade;
        row.appendChild(firstName);
        row.appendChild(lastName);
        row.appendChild(facultyNumber);
        row.appendChild(grade);

        return row;
    }

}

attachEvents()