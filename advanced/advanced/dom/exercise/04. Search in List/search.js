function search() {
   const towns = document.querySelectorAll('ul#towns li');
   const search = document.getElementById('searchText').value;
   const result = document.getElementById('result');


   let matches = 0;
   debugger

   for (let town of towns) {
      let word = town.textContent;
      if(word.includes(search)) {
         matches++
         town.style.textDecoration = 'underline'
         town.style.fontWeight = 'bold'
         
      } 
   }
   result.textContent = `${matches} matches found`
}
