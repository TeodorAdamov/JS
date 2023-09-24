function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const bestRestaurantParagraph = document.querySelector('#bestRestaurant p');
   const workersParagraph = document.querySelector('#workers p');
   const textArea = document.querySelector('#inputs textarea');

   function onClick() {
      const restaurants = JSON.parse(textArea.value);
      const myRestaurants = [];

      for (let restaurant of restaurants) {
         let [name, ...workers] = restaurant.split(/[ \- ,]+/);
         const isExisting = myRestaurants.find(restaurant => restaurant.name === name);

         if (!isExisting) {
            const createRestaurant = {
               name,
               workers: [],
               averageSalary: 0,
               bestSalary: 0,
               totalSalary: 0
            }

            for (let i = 0; i < workers.length; i += 2) {
               createRestaurant.totalSalary += Number(workers[i + 1])
               if (Number(workers[i + 1]) > createRestaurant.bestSalary) {
                  createRestaurant.bestSalary = Number(workers[i + 1]);
               }

               const worker = {
                  name: workers[i],
                  salary: Number(workers[i + 1])
               }
               createRestaurant.workers.push(worker)

            }
            createRestaurant.averageSalary = (createRestaurant.totalSalary / createRestaurant.workers.length).toFixed(2)
            myRestaurants.push(createRestaurant)
         } else {

            for (let i = 0; i < workers.length; i += 2) {
               isExisting.totalSalary += Number(workers[i + 1])
               if (Number(workers[i + 1]) > isExisting.bestSalary) {
                  isExisting.bestSalary = Number(workers[i + 1]);
               }

               const worker = {
                  name: workers[i],
                  salary: Number(workers[i + 1])
               }
               isExisting.workers.push(worker)
            }
            isExisting.averageSalary = (isExisting.totalSalary / isExisting.workers.length).toFixed(2)

         }
      }


      myRestaurants.sort((a, b) => b.averageSalary - a.averageSalary)
      myRestaurants[0].workers.sort((a, b) => b.salary - a.salary)

      bestRestaurantParagraph.textContent = `Name: ${myRestaurants[0].name} Average Salary: ${myRestaurants[0].averageSalary} Best Salary: ${(myRestaurants[0].bestSalary).toFixed(2)}`
      let str = '';

      myRestaurants[0].workers.forEach(worker => {
         str += `Name: ${worker.name} With Salary: ${worker.salary} `
      })
      workersParagraph.textContent = str;
   }
}




