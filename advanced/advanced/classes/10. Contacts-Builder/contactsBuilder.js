function solve() {
    class Contact {
        constructor(firstName, lastName, phone, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.phone = phone;
            this.email = email;
            this.online = false;
        }
        set online(value) {
            this._online = value;
            const titleDiv = document.getElementById(`contact-${this.firstName}-${this.lastName}`);
            if (titleDiv) {
                if (this._online) {
                    titleDiv.classList.add('online');
                } else {
                    titleDiv.classList.remove('online');
                }
            }
        }

        get online() {
            return this._online;
        }



        render(id) {
            const article = document.createElement('article');
            //creating title div with info button
            const titleDiv = document.createElement('div');
            titleDiv.textContent = `${this.firstName} ${this.lastName}`
            titleDiv.classList.add('title')
            titleDiv.id = `contact-${this.firstName}-${this.lastName}`;
            const infoButton = document.createElement('button');
            infoButton.innerHTML = '&#8505;'
            titleDiv.appendChild(infoButton);

            if (this.online) {
                titleDiv.classList.add('online')
            }

            //creating addition info

            const infoDiv = document.createElement('div');
            infoDiv.classList.add('info');
            infoDiv.style.display = 'none'
            const phoneSpan = document.createElement('span');
            phoneSpan.innerHTML = `&phone; ${this.phone}`
            const emailSpan = document.createElement('span');
            emailSpan.innerHTML = `&#9993; ${this.email}`

            infoDiv.appendChild(phoneSpan);
            infoDiv.appendChild(emailSpan);

            //listener to info button
            infoButton.addEventListener('click', () => {
                if (infoDiv.style.display === 'block') {
                    infoDiv.style.display = 'none'
                } else {
                    infoDiv.style.display = 'block'
                }
            })
            //appending divs to article and article to the HTML
            article.appendChild(titleDiv);
            article.appendChild(infoDiv);

            document.getElementById(id).appendChild(article)


        }

    }
debugger
    let contacts = [
        new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
        new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
        new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
    ];
    contacts.forEach(c => c.render('main'));
    
    // After 1 second, change the online status to true
    setTimeout(() => contacts[1].online = true, 2000);
}



