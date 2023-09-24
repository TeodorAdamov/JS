function create(words) {
   const content = document.getElementById('content')

   words.forEach(str => {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = str;
      p.style.display = 'none';

      div.addEventListener('click', () => {
         p.style.display = 'block'
      })

      div.appendChild(p);
      content.appendChild(div);
   });
}


create(['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet'])