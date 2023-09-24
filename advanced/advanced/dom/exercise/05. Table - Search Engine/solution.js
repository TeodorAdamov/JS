function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const search = document.getElementById('searchField')

   function onClick() {
      const table = document.querySelectorAll('tbody tr');

      
      for (let row of table) {
         let text = row.textContent;

         if (text.includes(search.value)) {
            row.className = 'select';
         } else {
            row.className = '';
         }
      }
      search.value = '';
   }
}