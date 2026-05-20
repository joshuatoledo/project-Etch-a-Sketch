const container = document.querySelector('.container');

for (let i = 0 ; i < 256; i++){
  const div = document.createElement('div');
 div.classList.add('grids');
 container.appendChild(div);
};


const squares = document.querySelectorAll('.grids');
  squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'orange'; 
  });
});


function promptSquarePerSide () {
  const input = prompt("Enter a number for a new square side:")
  const count = parseInt(input,10);

  if(isNaN(count)){
    alert('Please enter a valid Number:');
    return 0;
  }

  return count;
};


const button = document.createElement('button');
  button.classList.add('btn');
  button.textContent = 'Button';
  document.body.insertBefore(button,container);


  

