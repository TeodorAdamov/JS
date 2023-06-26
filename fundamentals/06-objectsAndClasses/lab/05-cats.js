function classPractice (array) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    let catsArray = [];

    for (let i = 0; i < array.length; i++) {
        let currentCat = array[i].split(' ')
        let myCat = new Cat(currentCat[0], Number(currentCat[1]));
        catsArray.push(myCat);
    }


    for(let c of catsArray) {
        c.meow()
    }
}

classPractice(['Mellow 2', 'Tom 5'])