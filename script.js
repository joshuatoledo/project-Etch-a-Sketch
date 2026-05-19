const container = document.querySelector('.container');

for (let i = 0 ; i < 256; i++){
  const div = document.createElement('div');
 div.classList.add('grids');
 container.appendChild(div);
};


const squares = document.querySelectorAll('.grids');

squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'orange'; // change color when hovered
  });
});





