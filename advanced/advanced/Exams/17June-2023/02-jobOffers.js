class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        candidates.forEach(candidate => {
            const [name, education, yearsExperience] = candidate.split('-');
            const isExisting = this.jobCandidates.find(el => el.name === name);

            if (isExisting) {
                if (Number(yearsExperience) > isExisting.yearsExperience) {
                    isExisting.yearsExperience = Number(yearsExperience)
                }
            } else {
                const worker = {
                    name,
                    education,
                    yearsExperience: Number(yearsExperience)
                }
                this.jobCandidates.push(worker);
            }
        })
        const workerNames = this.jobCandidates.map(candidate => candidate.name)
        return `You successfully added candidates: ${workerNames.join(', ')}.`
    }

    jobOffer(offerInfo) {
        const [name, minimalExperience] = offerInfo.split('-');
        const isExisting = this.jobCandidates.find(el => el.name === name);

        if (!isExisting) {
            throw new Error(`${name} is not in the candidates list!`)
        }

        if (Number(minimalExperience) > isExisting.yearsExperience) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`)
        }

        isExisting.yearsExperience = 'hired';
        return `Welcome aboard, our newest employee is ${name}.`
    }

    salaryBonus(name) {
        const isExisting = this.jobCandidates.find(el => el.name === name);
        if (!isExisting) {
            throw new Error(`${name} is not in the candidates list!`)
        }
        let salary = ''
        if (isExisting.education === 'Bachelor') {
            salary = '50,000'
        } else if (isExisting.education === 'Master') {
            salary = '60,000'
        } else {
            salary = '40,000'
        }
        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $${salary} per year!`
    }

    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error('Candidate Database is empty!')
        }

        const result = ['Candidates list:']
        this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name))
            .forEach(candidate => {
                result.push(`${candidate.name}-${candidate.yearsExperience}`)
            })
        return result.join('\n');
    }
}


let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());



