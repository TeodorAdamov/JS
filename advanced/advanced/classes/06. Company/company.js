class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!(name && salary && position && department) || salary < 0) {
            throw new Error('Invalid input!')
        }
        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }

        this.departments[department].push({ name, salary, position });
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let highestAverageSalary = 0;
        let department = ''

        for (let key of Object.keys(this.departments)) {
            let averageSalary = this.departments[key].reduce((acc, current) => acc + current.salary, 0) / this.departments[key].length;
            if (highestAverageSalary < averageSalary) {
                highestAverageSalary = averageSalary;
                department = key;
            }
        }

        const output = []
        this.departments[department].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
            .forEach(worker => {
                output.push(`${worker.name} ${worker.salary} ${worker.position}`)
            })

        return `Best Department is: ${department}\nAverage salary: ${highestAverageSalary.toFixed(2)}\n${output.join('\n')}`
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());