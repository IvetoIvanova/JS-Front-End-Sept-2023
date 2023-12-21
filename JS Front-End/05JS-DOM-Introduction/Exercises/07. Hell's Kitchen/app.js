function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      let inputText = JSON.parse(document.querySelector('#inputs textarea').value);
      let averageSalary = 0;
      let totalSalary = 0;
      let currentAverageSalary = 0;
      let bestRestaurantName = '';
      let output = {};

      for (const line of inputText) {
         let restaurantInfo = line.split(' - ');
         let restaurantName = restaurantInfo.shift();
         let workersData = restaurantInfo[0].split(', ');

         for (let worker of workersData) {
            let [name, salary] = worker.split(' ');

            if (!output.hasOwnProperty(restaurantName)) {
               output[restaurantName] = {};
            }

            if (output.hasOwnProperty(restaurantName)) {
               output[restaurantName][name] = Number(salary);
            }
         }
      }

      let entries = Object.entries(output);

      for (let entry of entries) {
         let key = entry[0];
         let values = Object.entries(entry[1]);

         for (let [name, salary] of values) {
            totalSalary += salary;
         }

         averageSalary = totalSalary / values.length;

         if (averageSalary > currentAverageSalary) {
            currentAverageSalary = averageSalary;
            bestRestaurantName = key;
            totalSalary = 0;
         }

      }

      let result = Object.entries(output[bestRestaurantName]).sort((a, b) => b[1] - a[1]);
      let print = '';

      result.forEach(worker => print += `Name: ${worker[0]} With Salary: ${worker[1]} `);
      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestaurantName} Average Salary: ${currentAverageSalary.toFixed(2)} Best Salary: ${(result[0][1]).toFixed(2)}`;
      document.querySelector('#workers p').textContent = print;
   }
}
