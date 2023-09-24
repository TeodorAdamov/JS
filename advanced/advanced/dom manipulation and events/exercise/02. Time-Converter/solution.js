function attachEventsListeners() {
    const convertButtonElements = Array.from(document.querySelectorAll('input[type=button]'))

    convertButtonElements.forEach(button => {
        button.addEventListener('click', () => {

            const days = document.getElementById('days');
            const hours = document.getElementById('hours');
            const minutes = document.getElementById('minutes');
            const seconds = document.getElementById('seconds');

            if (days.value) {
                const dayValue = Number(days.value)
                hours.value = dayValue * 24;
                minutes.value = dayValue * 24 * 60;
                seconds.value = dayValue * 24 * 60 * 60;
            } else if (hours.value) {
                const hoursValue = Number(hours.value);
                days.value = hoursValue / 24;
                minutes.value = hoursValue * 60;
                seconds.value = hoursValue * 60 * 60;
            } else if (minutes.value) {
                const minutesValue = Number(minutes.value)
                days.value = minutesValue / 24 / 60;
                hours.value = minutesValue / 60;
                seconds.value = minutesValue * 60;
            } else if (seconds.value) {
                const secondsValue = Number(seconds.value)
                days.value = secondsValue / 24 / 60 / 60
                hours.value = secondsValue / 60 / 60
                minutes.value = secondsValue / 60
            }
        })
    })
}

document.querySelectorAll('input[type=text]')