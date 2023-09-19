function createSortedList() {

    const obj = {
        numbers: [],
        size: 0,
        add: function (element) {
            this.numbers.push(element);
            this.size++;
            this.numbers.sort((a, b) => a - b)
        },
        remove: function (index) {
            if (index >= 0 && index < this.numbers.length) {
                this.numbers.splice(index, 1);
                this.size--;
            }
        },
        get: function (index) {
            if (index >= 0 && index < this.numbers.length) {
                return this.numbers[index];
            }

        },

    }
    return obj
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));




