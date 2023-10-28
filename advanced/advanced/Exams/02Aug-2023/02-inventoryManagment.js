class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        if (this.items.length === this.capacity) {
            throw new Error("The inventory is already full.");
        }

        const isExisting = this.items.find(el => el.name === itemName);
        if (isExisting) {
            isExisting.quantity += Number(quantity);
        } else {
            const item = {
                name: itemName,
                quantity: Number(quantity)
            }
            this.items.push(item)
        }

        return `Added ${quantity} ${itemName}(s) to the inventory.`
    }

    sellItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        const isExisting = this.items.find(el => el.name === itemName);

        if (isExisting) {
            if (quantity > isExisting.quantity) {
                throw new Error(`Not enough ${itemName}(s) in stock.`)
            }
            isExisting.quantity -= Number(quantity);
            if (isExisting.quantity <= 0) {
                this.items.splice(this.items.indexOf(isExisting), 1);
                this.outOfStock.push(itemName);
            }
        } else {
            throw new Error(`The item ${itemName} is not available in the inventory.`)
        }
        return `Sold ${quantity} ${itemName}(s) from the inventory.`
    }

    restockItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        const isExisting = this.items.find(el => el.name === itemName);
        const isExistingInOutOfStock = this.outOfStock.includes(itemName);

        if (isExisting) {
            isExisting.quantity += Number(quantity);
        } else {
            const item = {
                name: itemName,
                quantity: Number(quantity)
            }
            if (isExistingInOutOfStock) {
                this.outOfStock.splice(this.outOfStock.indexOf(itemName), 1)
            }
            this.items.push(item)
        }
        return `Restocked ${quantity} ${itemName}(s) in the inventory.`
    }


    getInventorySummary() {
        const result = ['Current Inventory:'];
        this.items.forEach(item => {
            result.push(`${item.name}: ${item.quantity}`)
        })
        if (this.outOfStock.length > 0) {
            let str = `Out of Stock: ${this.outOfStock.join(', ')}`
           
            result.push(str);
        }
        return result.join('\n');
    }
}



const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5)); 
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());



