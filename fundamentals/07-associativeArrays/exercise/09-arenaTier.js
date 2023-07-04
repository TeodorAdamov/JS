function arenaTier(data) {

    let myGladiators = [];
    for (let line of data) {
        if (line === 'Ave Cesar') {
            break;
        }

        if (line.includes('vs')) {
            let [name1, name2] = line.split(' vs ');
            let glad1 = myGladiators.find(element => element.name === name1);
            let glad2 = myGladiators.find(element => element.name === name2);

            if (glad1 && glad2) {
                let glad1Techniques = Object.keys(glad1.techniques);
                for (let curTechnique of glad1Techniques) {
                    if (glad2.techniques.hasOwnProperty(curTechnique)) {
                        if (glad1.totalSkill > glad2.totalSkill) {
                            let indexToSplice = myGladiators.indexOf(glad2)
                            myGladiators.splice(indexToSplice, 1)
                            break;
                        } else if (glad2.totalSkill > glad1.totalSkill) {
                            let indexToSplice = myGladiators.indexOf(glad1)
                            myGladiators.splice(indexToSplice, 1)
                            break;
                        }
                    }
                }
            }


        } else {
            let [name, technique, skill] = line.split(' -> ');
            let isExisting = myGladiators.find(element => element.name === name);

            if (isExisting) {
                isExisting.totalSkill += Number(skill)
                if (isExisting.techniques.hasOwnProperty(technique) && isExisting.techniques[technique] < skill) {
                    isExisting.techniques[technique] = Number(skill);
                } else if (!isExisting.techniques.hasOwnProperty(technique)) {
                    isExisting.techniques[technique] = Number(skill);
                }

            } else {
                let tempGlad = {
                    name,
                    techniques: {},
                    totalSkill: Number(skill)

                }
                tempGlad.techniques[technique] = Number(skill);
                myGladiators.push(tempGlad);
            }
        }
        for (let glad of myGladiators) {
            let totalSkill = Object.values(glad.techniques).reduce((a, b) => a + b);
            glad.totalSkill = totalSkill;
        }
    }
    
    myGladiators.sort((a, b) => b.totalSkill - a.totalSkill || a.name.localeCompare(b.name))

    for (let glad of myGladiators) {
        console.log(`${glad.name}: ${glad.totalSkill} skill`);
        Object.entries(glad.techniques).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach(x => {
            console.log(`- ${x[0]} <!> ${x[1]}`);
        })      
    }
}

arenaTier([
    'Peter -> Duck -> 700',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ])