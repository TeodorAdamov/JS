async function lockedProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles'
    const main = document.getElementById('main');
    const profile = document.querySelector('.profile');

    const info = await fetch(url);
    const profiles = await info.json();
    let count = 1;
    try {
        for (let key in profiles) {
            main.appendChild(createPeople(profiles[key], count));
            count++;
        }
    } catch (error) {
        console.log(error);
    }
    main.children[0].remove();

    function createPeople(peopleObj, userCount) {
        const { username, age, email } = peopleObj;
        const newProfile = profile.cloneNode(true);
        const hiddenFields = newProfile.querySelector('div');
        hiddenFields.style.display = 'none'
        hiddenFields.className = `user${userCount}HiddenFields`
        const showMoreButton = newProfile.querySelector('button');
        const [lockInput, unlockInput, usernameInput, emailInput, ageInput] = Array.from(newProfile.querySelectorAll('input'));


        //changing values for each user
        lockInput.name = `user${userCount}Locked`;
        unlockInput.name = `user${userCount}Locked`;
        usernameInput.name = `user${userCount}Username`;
        usernameInput.value = username;
        emailInput.name = `user${userCount}Email`;
        emailInput.value = email;
        ageInput.name = `user${userCount}Age`;
        ageInput.value = age;

        showMoreButton.addEventListener('click', () => {
            if (unlockInput.checked) {
                if (hiddenFields.style.display === 'none') {
                    hiddenFields.style.display = 'block'
                } else {
                    hiddenFields.style.display = 'none'
                }
            }
        })
        return newProfile;
    }
}