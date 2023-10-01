function solve() {
    const sections = Array.from(document.getElementsByTagName('section'))
    const result = document.getElementById('results')
    let rightAnswers = 0;

    //iterate through every section and count right answers 
    sections.forEach((section, index) => {
        section.addEventListener('click', (event) => {
            if (event.target.className === 'answer-text') {
                const answerText = event.target.textContent
                if (answerText === 'onclick' || answerText === 'JSON.stringify()' || answerText === 'A programming API for HTML and XML documents') {
                    rightAnswers++;
                }
                section.style.display = 'none'

                //check if user answered all questions and if so display result.
                if (index + 1 < sections.length) {
                    sections[index + 1].style.display = 'block'
                } else {
                    result.style.display = 'block'
                    if (rightAnswers === 3) {
                        document.querySelector('#results>li>h1').textContent = "You are recognized as top JavaScript fan!"
                    } else {
                        document.querySelector('#results>li>h1').textContent = `You have ${rightAnswers} right answers`
                    }
                }
            }
        })
    })
}
