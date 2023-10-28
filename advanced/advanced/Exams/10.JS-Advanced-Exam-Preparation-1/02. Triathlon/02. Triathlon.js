class Triathlon {
    constructor(name) {
        this.competitionName = name;
        this.participants = {};
        this.listOfFinalists = [];
    }
    addParticipant(participantName, participantGender) {
        if (!this.participants.hasOwnProperty(participantName)) {
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`
        }
        return `${participantName} has already been added to the list`;
    }
    completeness(participantName, condition) {
        if (!this.participants[participantName]) {
            throw new Error(`${participantName} is not in the current participants list`);
        }
        if (this.participants.hasOwnProperty(participantName) && condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }

        const finishedDiscipCount = Math.floor(condition / 30);

        if (finishedDiscipCount > 0 && finishedDiscipCount < 3) {
            return `${participantName} could only complete ${finishedDiscipCount} of the disciplines`;
        }
        const myFinalist = {
            name: participantName,
            gender: this.participants[participantName]
        }
        this.listOfFinalists.push(myFinalist);
        delete this.participants[participantName];
        return `Congratulations, ${participantName} finished the whole competition`;
    }
    rewarding(participantName) {
        const hasFinished = this.listOfFinalists.some((finalist) => finalist.name === participantName)
        if (!hasFinished) {
            return `${participantName} is not in the current finalists list`;
        }
        return `${participantName} was rewarded with a trophy for his performance`;
    }
    showRecord(criteria) {
        if (this.listOfFinalists.length === 0) {
            return `There are no finalists in this competition`;
        }

        if (criteria === 'male' || criteria === 'female') {
            const filteredByCriteria = this.listOfFinalists.filter(finalist => finalist.gender === criteria);

            if (filteredByCriteria.length === 0) {
                return `There are no ${criteria}'s that finished the competition`;
            }

            return `${filteredByCriteria[0].name} is the first ${criteria} that finished the ${this.competitionName} triathlon`

        }
        const result = [`List of all ${this.competitionName} finalists:`];

        this.listOfFinalists.sort((a, b) => a.name.localeCompare(b.name))
            .forEach(finalist => {
                result.push(finalist.name)
            })

        return result.join('\n');
    }
}
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 70));
console.log(contest.showRecord("all"));
