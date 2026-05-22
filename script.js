const container = document.querySelector('.container');

for (let i = 0 ; i < 256; i++){
  const div = document.createElement('div');
 div.classList.add('grids');
 container.appendChild(div);
};

const squares = document.querySelectorAll('.grids');
  squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = randomColor(); 
  });
});

function promptSquarePerSide () {
  const input = prompt("Enter a number for a new square side:")
  const count = parseInt(input,10);

  if(isNaN(count) || count < 1 || count > 100){
    alert('Please enter a valid Number:');
    return null;
  }

  return count;
};

const button = document.createElement('button');
  button.classList.add('btn');
  button.textContent = 'Button';
  document.body.insertBefore(button,container);


button.addEventListener('click', ()=>{
  const size = promptSquarePerSide()
  if(size){
    container.innerHTML = '';
    createNewGrid(size)
    console.log('Generating a '+ size + ' x ' + size + ' grid');
  }
});

  function randomColor() {
    const color = '0123456789ABCDEF';
    let count = '#';

    for (let i = 0 ; i < 6 ; i++){
      count += color[Math.floor(Math.random() * 16)];
    }
    return count;
  }

function createNewGrid(size){
  let totalSquares = size * size;

  for (let i = 0; i < totalSquares; i++){
     const squares = document.createElement('div');
     squares.classList.add('grids');
     squares.style.width = (960 / size)  + 'px';
     squares.style.height = (960 / size) + 'px';
     squares.style.opacity = 0.1;
       squares.addEventListener('mouseover', () => {
        let currentOpacity = parseFloat(squares.style.opacity);
        if(currentOpacity < 1) {
          squares.style.opacity = currentOpacity + 0.1;
        }
        squares.style.backgroundColor = randomColor(); 
      });
         container.appendChild(squares);
    };
      
  };



